interface endpointsType {
  name: string;
  route: string;
  method: "get" | "post" | "put" | "delete";
}

const endpoints: endpointsType[] = [
  { name: "signIn", route: "/api/v1/login/login", method: "post" },
  { name: "getUsers", route: "/api/v1/login/all", method: "get" },
  { name: "getUser", route: "/api/v1/login/{id}", method: "get" },
  { name: "deleteUser", route: "/api/v1/login/{id}", method: "delete" },
  { name: "editUser", route: "/api/v1/login/{id}", method: "put" },
  { name: "createUser", route: "/api/v1/login/register", method: "post" },
  
  { name: "createMaterial", route: "/api/v1/material/create", method: "post" },
  { name: "getMaterials", route: "/api/v1/material/all", method: "get" },
  { name: "getMaterial", route: "/api/v1/material/{id}", method: "get" },
  { name: "deleteMaterial", route: "/api/v1/material/{id}", method: "delete" },

  { name: "getProjects", route: "/api/v1/login/all", method: "get" },
];

export const getEndpoint = (
  routeName = "",
  routeParams: Record<string, string> = {}
) => {
  const endpoint = endpoints.find((row) => row.name === routeName);
  if (!endpoint) throw new Error(`Invalid endpoint name '${routeName}'.`);
  let route = endpoint.route;
  for (const paramName in routeParams) {
    route = route.replace(`{${paramName}}`, routeParams[paramName]);
  }

  return { ...endpoint, route };
};