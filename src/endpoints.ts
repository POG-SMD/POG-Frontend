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
  { name: "getMaterialOptions", route: "/api/v1/material/options", method: "get" },
  { name: "deleteMaterial", route: "/api/v1/material/{id}", method: "delete" },
  
  { name: "getReservations", route: "/api/v1/reservation/all", method: "get" },
  { name: "getReservation", route: "/api/v1/reservation/{id}", method: "get" },
  { name: "createReservation", route: "/api/v1/reservation/create", method: "post" },
  { name: "deleteReservation", route: "/api/v1/reservation/{id}", method: "delete" },
  { name: "acceptReservation", route: "/api/v1/reservation/accept/{id}", method: "put" },
  { name: "refuseReservation", route: "/api/v1/reservation/refuse/{id}", method: "put" },
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