import { getEndpoint } from "@/endpoints";
import { useApi } from "@/hooks/useApi";
import { httpClient } from "@/utils/httpClient";

export const useGetStatus = () => {
  return useApi<{ reservationId: number; status: number }>((id) => {
    const { method, route } = getEndpoint("getStatus", { ...id });
    return httpClient[method](route);
  });
};

export const useReturnReservation = () => {
  return useApi((id) => {
    const { method, route } = getEndpoint("returnReservation", { ...id });
    return httpClient[method](route);
  });
};

export const useCancelReservation = () => {
  return useApi((id) => {
    const { method, route } = getEndpoint("cancelReservation", { ...id });
    return httpClient[method](route);
  });
};
