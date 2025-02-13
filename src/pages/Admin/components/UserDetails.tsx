import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components";
import { useGetUser } from "../hooks/useApi";
import { Dispatch, SetStateAction, useEffect } from "react";
import { getRoleText } from "@/types/roleType";
import { format } from "date-fns";

export const UserDetails = ({
  id,
  setOpen,
  open,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  id: string | number;
}) => {
  const getUser = useGetUser();

  useEffect(() => {
    if (!open || !id) return;

    console.log("Requisição para ID:", id);
    getUser.makeRequest({ id });
  }, [open, id]);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="min-h-96">
        <DialogHeader>
          <DialogTitle>{getUser?.data?.name}</DialogTitle>

          <ul className="w-full grid grid-cols-2 gap-5 p-10">
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Nome:</h5>
              <p className="font-medium text-primary/70 text-lg">{getUser?.data?.name ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Email:</h5>
              <p className="font-medium text-primary/70 text-lg">{getUser?.data?.email ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Tipo:</h5>
              <p className="font-medium text-primary/70 text-lg">{getRoleText(getUser?.data?.role) ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Criado em:</h5>
              <p className="font-medium text-primary/70 text-lg">
                {getUser?.data?.createdAt
                  ? format(new Date(getUser.data.createdAt), "dd/MM/yyyy")
                  : "--"}
              </p>
            </li>
          </ul>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
