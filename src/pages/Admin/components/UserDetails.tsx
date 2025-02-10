import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components";
import { useGetUser } from "../hooks/useApi";
import { Dispatch, SetStateAction, useEffect } from "react";

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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
