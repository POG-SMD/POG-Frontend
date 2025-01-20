import axios, { AxiosResponse } from 'axios'

export const httpClient = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

httpClient.interceptors.request.use(
  async config => {
    const token = window.localStorage.getItem('auth:token')

    if (token !== null) config.headers.Authorization = `Bearer ${token}`
    config.headers.Origin = import.meta.env.API_URL

    return config
  },
  error => Promise.reject(error)
)

export const fakeRequest = (data = {}, time = 1500, meta = [], status = 'success') => {
  const response = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status,
        data: {
          meta,
          data,
        },
      })
    }, time)
  })

  return response as Promise<AxiosResponse>
}