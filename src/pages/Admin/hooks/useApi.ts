import { getEndpoint } from "@/endpoints";
import { useApi } from "@/hooks/useApi";
import { httpClient } from "@/utils/httpClient";

export interface UserType {
  id: string | number
  email: string
  password: string
  name: string
  role: string
  createdAt: string
  updatedAt: string
}

export const useGetUsers = () => {
  return useApi<UserType[]>((values) => {
    const { method, route } = getEndpoint("getUsers");
    return httpClient[method](route, { ...values });
  });
};

export const useGetUser = () => {
  return useApi<UserType>((values) => {
    const { method, route } = getEndpoint("getUser");
    return httpClient[method](route, { ...values });
  });
};

export const useDeleteUser = () => {
  return useApi<UserType>((values) => {
    const { method, route } = getEndpoint("deleteUser");
    return httpClient[method](route, { ...values });
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
