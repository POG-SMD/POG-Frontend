import { getEndpoint } from "@/endpoints";
import { useApi } from "@/hooks/useApi";
import { UserType } from "@/pages/Admin/hooks/useApi";
import { MaterialType } from "@/pages/Equipments/hooks/useApi";
import { httpClient } from "@/utils/httpClient";

export interface ReservationResponseProps {
  userId: number;
  type: number;
  user: UserType;
  createdAt: string;
  materials: MaterialType[];
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
