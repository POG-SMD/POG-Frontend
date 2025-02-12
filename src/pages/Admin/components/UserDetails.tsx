import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components";
import { useGetUser } from "../hooks/useApi";
import { Dispatch, SetStateAction, useEffect } from "react";
import { getRoleText } from "@/types/roleType";

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
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{getUser?.data?.name}</DialogTitle>

          <ul>
            <li>
              <h5>Nome:</h5>
              <p>{getUser?.data?.name}</p>
            </li>
            <li>
              <h5>Email:</h5>
              <p>{getUser?.data?.email}</p>
            </li>
            <li>
              <h5>Tipo:</h5>
              <p>{getRoleText(getUser?.data?.role)}</p>
            </li>
            <li>
              <h5>Criado em:</h5>
              {/* FUNCTION */}
              <p>{getUser?.data?.createdAt}</p>
            </li>
          </ul>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
