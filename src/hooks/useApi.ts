import { AxiosResponse } from 'axios'
import { useState } from 'react'

type errorType = {
  response: AxiosResponse
}

type requesterType = (...args: object[]) => Promise<AxiosResponse>

export const useApi = <GenericData>(requester: requesterType) => {
  const [data, setData] = useState<unknown>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [statusCode, setStatusCode] = useState<number | null>(null)
  const [meta, setMeta] = useState<object | null>(null)
  const [error, setError] = useState<object | null>(null)
  const [loading, setLoading] = useState(false)

  const makeRequest = async (...args: object[]) => {
    setLoading(true)
    setError(null)

    try {
      const result = await requester(...args)
      setData(result.data.data)
      setStatus(result.data.status)
      setStatusCode(result.status)
      setMeta(result.data.meta)
      return result
    } catch (err: unknown) {
      const apiError = err as errorType
      if (!apiError.response) throw err

      setStatus(apiError.response.data.status)
      setError(apiError.response.data.data)
      setMeta(apiError.response.data.meta)
      setStatusCode(apiError.response.status)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    data: data as GenericData,
    status,
    statusCode,
    meta,
    error,
    loading,
    makeRequest: makeRequest as (...args: object[]) => Promise<AxiosResponse<{ data: GenericData }>>,
  }
}