
import { useApi } from '@/hooks/useApi'
import { fakeRequest } from '@/utils/httpClient'

export interface SignInResponse {
  token: string
  type: string
}

export const useSignIn = () => {
  return useApi<SignInResponse>(() => {
    // const { method, route } = getEndpoint('getPlans')
    // return httpClient[method](route)
    return fakeRequest([], 2000)
  })
}