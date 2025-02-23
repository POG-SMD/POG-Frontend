import { OptionsList } from "@/components/ui/form/Select";
import { getEndpoint } from "@/endpoints";
import { useApi } from "@/hooks/useApi";
import { httpClient } from "@/utils/httpClient";

export type MaterialType = {
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

export const useDeleteMaterial = () => {
  return useApi((id) => {
    const { method, route } = getEndpoint("deleteMaterial", { ...id });
    return httpClient[method](route);
  });
};

export const useGetMaterials = () => {
  return useApi<MaterialType[]>(() => {
    const { method, route } = getEndpoint("getMaterials");
    return httpClient[method](route);
  });
};

export const useGetMaterial = () => {
  return useApi<MaterialType>((id) => {
    const { method, route } = getEndpoint("getMaterial", { ...id });
    return httpClient[method](route);
  });
};

export const useGetMaterialOptions = () => {
  return useApi<OptionsList[]>(() => {
    const { method, route } = getEndpoint("getMaterialOptions");
    return httpClient[method](route);
  });
};
