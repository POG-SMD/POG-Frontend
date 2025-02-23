import { ReservationResponseProps } from "@/components/common/ReservationForm/hook/useApi";
import { getEndpoint } from "@/endpoints";
import { useApi } from "@/hooks/useApi";
import { RoleType } from "@/types/roleType";
import { httpClient } from "@/utils/httpClient";

export interface UserType {
  id: string | number;
  email: string;
  password: string;
  name: string;
  role: RoleType;
  createdAt: string;
  updatedAt: string;
}

export const useGetUsers = () => {
  return useApi<UserType[]>((values) => {
    const { method, route } = getEndpoint("getUsers");
    return httpClient[method](route, { ...values });
  });
};

export const useGetUser = () => {
  return useApi<UserType>((id) => {
    const { method, route } = getEndpoint("getUser", { ...id });
    return httpClient[method](route);
  });
};

export const useDeleteUser = () => {
  return useApi((id) => {
    const { method, route } = getEndpoint("deleteUser", { ...id });
    return httpClient[method](route);
  });
};

export const useCreateUser = () => {
  return useApi<UserType>((values) => {
    const { method, route } = getEndpoint("createUser");
    return httpClient[method](route, { ...values });
  });
};

export const useGetReservations = () => {
  return useApi<ReservationResponseProps[]>((values) => {
    const { method, route } = getEndpoint("getReservations");
    return httpClient[method](route, { ...values });
  });
};

export const useGetReservation = () => {
  return useApi<ReservationResponseProps>((id) => {
    const { method, route } = getEndpoint("getReservation", { ...id });
    return httpClient[method](route);
  });
};

export const useDeleteReservation = () => {
  return useApi((id) => {
    const { method, route } = getEndpoint("deleteReservation", { ...id });
    return httpClient[method](route);
  });
};

export const useAcceptReservation = () => {
  return useApi<ReservationResponseProps>((id) => {
    const { method, route } = getEndpoint("acceptReservation", { ...id });
    return httpClient[method](route);
  });
};

export const useRefusetReservation = () => {
  return useApi<ReservationResponseProps>((id) => {
    const { method, route } = getEndpoint("refuseReservation", { ...id });
    return httpClient[method](route);
  });
};
