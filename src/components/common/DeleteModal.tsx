import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/Dialog";

export const DeleteModal = ({
  title,
  description,
  deleteClick,
  setOpen,
  open,
  loading,
}: {
  loading: boolean;
  title: string;
  description: string;
  deleteClick: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) => {
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>

          <div>
            <Button disabled={loading} onClick={() => setOpen(false)}>Voltar</Button>
            <Button disabled={loading} onClick={deleteClick} variant='destructive'>Remover</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
