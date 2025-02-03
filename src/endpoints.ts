interface endpointsType {
  name: string
  route: string
  method: 'get' | 'post'
}

const endpoints: endpointsType[] = [
  { name: 'signIn', route: '/api/v1/login/login', method: 'post' },
]

export const getEndpoint = (routeName = '', routeParams: Record<string, string> = {}) => {
  const endpoint = endpoints.find(row => row.name === routeName)
  if (!endpoint) throw new Error(`Invalid endpoint name '${routeName}'.`)
  for (const paramName in routeParams) {
    endpoint.route = endpoint.route.replace(`{${paramName}}`, routeParams[paramName])
  }
  return endpoint
}