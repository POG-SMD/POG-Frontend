import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components";
import { useGetMaterial } from "../hooks/useApi";
import { Dispatch, SetStateAction, useEffect } from "react";
import { getMaterialType, MaterialType } from "@/types/materialType";

export const MaterialDetails = ({
  id,
  setOpen,
  open,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  id: string | number;
}) => {
  const getMaterial = useGetMaterial();

  useEffect(() => {
    if (!open || !id) return;

    console.log("Requisição para ID:", id);
    getMaterial.makeRequest({ id });
  }, [open, id]);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="min-h-96">
        <DialogHeader>
          <DialogTitle>{getMaterial?.data?.title}</DialogTitle>

          <ul className="w-full grid grid-cols-2 gap-5 p-10">
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Nome:</h5>
              <p className="font-medium text-primary/70 text-lg">
                {getMaterial?.data?.title ?? "--"}
              </p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Tipo:</h5>
              <p className="font-medium text-primary/70 text-lg">
                {getMaterialType(
                  String(getMaterial?.data?.type) as MaterialType
                ) ?? "--"}
              </p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">
                Quantidade:
              </h5>
              <p className="font-medium text-primary/70 text-lg">
                {getMaterial?.data?.quantity ?? "--"}
              </p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">
                Descrição:
              </h5>
              <p className="font-medium text-primary/70 text-lg">
                {getMaterial?.data?.description ?? "--"}
              </p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">
                Disponível:
              </h5>
              <p className="font-medium text-primary/70 text-lg">
                {getMaterial?.data?.quantity > 0 ? 'Sim' : 'Não'}
              </p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">
                Criado em:
              </h5>
              <p className="font-medium text-primary/70 text-lg">
                {new Date(getMaterial?.data?.createdAt).toLocaleDateString(
                  "pt-BR"
                ) ?? "--"}
              </p>
            </li>
          </ul>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
