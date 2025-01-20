import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { httpClient } from '@/utils/httpClient'
import { useApi } from '@/hooks/useApi'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextData {
  token: string | null
  user: User | null
  loading: boolean
  setToken: (token: string | null) => void
}

const AuthContext = createContext<AuthContextData>({
  token: null,
  user: null,
  loading: false,
  setToken: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(window.localStorage.getItem('auth:token'))
  const [user, setUser] = useState<User | null>(null)
  const [noLoading, setNoLoading] = useState(false)
  const { data, makeRequest, loading } = useApi(() => httpClient.get('/users/userLogin'))

  const setToken = (token: string | null) => {
    setTokenState(token)
    if (token) {
      window.localStorage.setItem('auth:token', token)
      return
    }
    window.localStorage.removeItem('auth:token')
  }

  useEffect(() => {
    if (!token) {
      setUser(null)
      setToken(null)
      return
    }
    if (noLoading) {
      setNoLoading(false)
      return
    }

    makeRequest().catch(() => {
      setToken(null)
    })
  }, [token])

  useEffect(() => {
    if (!data) return
    setUser(data as User)
  }, [data])

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loading,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => useContext(AuthContext)