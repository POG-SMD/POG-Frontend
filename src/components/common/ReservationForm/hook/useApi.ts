import { useApi } from "@/hooks/useApi";
import { fakeRequest } from "@/utils/httpClient";

export interface useReservationResponseProps {
  hasMaterial: boolean;
  materials: string[];
  usageDate: string;
  usagePurpose: string;
  reservationSchedule: string;
  devolutionSchedule: string;
}

export const useReservationResponse = () => {
  return useApi<useReservationResponseProps>(() => {
    // const { method, route } = getEndpoint('getPlans')
    // return httpClient[method](route)
    return fakeRequest([], 2000);
  });
};
