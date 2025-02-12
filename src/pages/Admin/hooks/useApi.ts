import { getEndpoint } from "@/endpoints";
import { useApi } from "@/hooks/useApi";
import { RoleType } from "@/types/roleType";
import { httpClient } from "@/utils/httpClient";

export interface UserType {
  id: string | number;
  email: string;
  password: string;
  name: string;
  role: RoleType;
  createdAt: string;
  updatedAt: string;
}

export const useGetUsers = () => {
  return useApi<UserType[]>((values) => {
    const { method, route } = getEndpoint("getUsers");
    return httpClient[method](route, { ...values });
  });
};

export const useGetUser = () => {
  return useApi<UserType>((id) => {
    const { method, route } = getEndpoint("getUser", { ...id });
    return httpClient[method](route);
  });
};

export const useDeleteUser = () => {
  return useApi((id) => {
    const { method, route } = getEndpoint("deleteUser", { ...id });
    return httpClient[method](route);
  });
};

export const useCreateUser = () => {
  return useApi<UserType>((values) => {
    const { method, route } = getEndpoint("createUser");
    return httpClient[method](route, { ...values });
  });
};

export const useGetProjects = () => {
  return useApi<UserType>((values) => {
    const { method, route } = getEndpoint("useGetProjects");
    return httpClient[method](route, { ...values });
  });
};
