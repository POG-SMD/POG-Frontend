import { getEndpoint } from "@/endpoints";
import { useApi } from "@/hooks/useApi";
import { httpClient } from "@/utils/httpClient";

export interface ReservationResponseProps {
  userId: number;
  type: number;

  materials: string[];
  dateStart: string;
  dateEnd: string;
  purpose: string;
  startTime: string;
  endTime: string;
}

export const useCreateReservation = () => {
  return useApi<ReservationResponseProps>((values) => {
    const { method, route } = getEndpoint("createReservation");
    return httpClient[method](route, { ...values });
  });
};
