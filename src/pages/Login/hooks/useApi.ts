
import { getEndpoint } from '@/endpoints'
import { useApi } from '@/hooks/useApi'
import { httpClient } from '@/utils/httpClient'

export interface SignInResponse {
  token: string
  type: string
}

export const useSignIn = () => {
  return useApi<SignInResponse>(values => {
    const { method, route } = getEndpoint('signIn')
    return httpClient[method](route, { ...values })
  })
}