import { getEndpoint } from "@/endpoints";
import { useApi } from "@/hooks/useApi";
import { httpClient } from "@/utils/httpClient";

type MaterialType = {
  id: number;
  type: MaterialType;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  disponible: boolean;
  quantity: number;
};

export const useCreateMaterial = () => {
  return useApi<MaterialType>((values) => {
    const { method, route } = getEndpoint("createMaterial");
    return httpClient[method](route, { ...values });
  });
};
