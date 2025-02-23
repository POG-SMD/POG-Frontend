import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { httpClient } from "@/utils/httpClient";
import { useApi } from "@/hooks/useApi";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextData {
  token: string | null;
  user: User | null;
  loading: boolean;
  setToken: (token: string | null, user?: User | null) => void;
  setUser: (data: User | null) => void;
  setClose: Dispatch<SetStateAction<boolean>>;
  close: boolean;
}

const AuthContext = createContext<AuthContextData>({
  token: null,
  user: null,
  loading: false,
  setToken: () => {},
  setUser: () => {},
  setClose: () => {},
  close: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(
    window.localStorage.getItem("auth:token")
  );

  const [close, setClose] = useState<boolean>(() => {
    const storedClose = window.localStorage.getItem("auth:close");
    return storedClose ? JSON.parse(storedClose) : false;
  });

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = window.localStorage.getItem("auth:user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { data, makeRequest, loading } = useApi(() =>
    httpClient.get("/users/userLogin")
  );

  const setToken = (token: string | null, user?: User | null) => {
    setTokenState(token);

    if (token) {
      window.localStorage.setItem("auth:token", token);
      if (user) {
        setUser(user);
        window.localStorage.setItem("auth:user", JSON.stringify(user));
      }
    } else {
      window.localStorage.removeItem("auth:token");
      window.localStorage.removeItem("auth:user");
      setUser(null);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("auth:close", JSON.stringify(close));
  }, [close]);

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }

    makeRequest().catch(() => {
      setToken(null);
    });
  }, [token]);

  useEffect(() => {
    if (data) {
      setUser(data as User);
      window.localStorage.setItem("auth:user", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    if (!user) {
      const storedUser = window.localStorage.getItem("auth:user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loading,
        setToken,
        setUser,
        setClose,
        close,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => useContext(AuthContext);
