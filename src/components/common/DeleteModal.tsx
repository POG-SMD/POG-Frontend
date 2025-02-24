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
          <DialogDescription className="text-center"><div className="my-10">{description}</div></DialogDescription>

          <div className="flex ml-auto gap-5">
            <Button disabled={loading} variant='outline' onClick={() => setOpen(false)}>Voltar</Button>
            <Button disabled={loading} onClick={deleteClick} variant='destructive'>Remover</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
