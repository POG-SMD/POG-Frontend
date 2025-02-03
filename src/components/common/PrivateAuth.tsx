import { useAuth } from '@/contexts'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateAuth = () => {
  const { token } = useAuth()

  if (!token) return <Navigate to='/sign-in' />
  return <Outlet />
}