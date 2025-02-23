import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components";
import { useGetReservation } from "../hooks/useApi";
import { Dispatch, SetStateAction, useEffect } from "react";
import { getRoleText } from "@/types/roleType";
import { format } from "date-fns";
import { getReservationType, ReservationType } from "@/types/reservationType";

export const ReservationDetails = ({
  id,
  setOpen,
  open,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  id: string | number;
}) => {
  const getReservation = useGetReservation();

  useEffect(() => {
    if (!open || !id) return;
    
    getReservation.makeRequest({ id });
  }, [open, id]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="min-h-96 max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Reserva</DialogTitle>

          <ul className="w-full flex flex-col items-start text-start md:grid grid-cols-2 gap-5 p-10">
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Tipo de reserva:</h5>
              <p className="font-medium text-primary/70 text-lg">{getReservationType(getReservation?.data?.type as ReservationType) ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Criado em:</h5>
              <p className="font-medium text-primary/70 text-lg">
                {getReservation?.data?.createdAt
                  ? format(new Date(getReservation.data.createdAt), "dd/MM/yyyy")
                  : "--"}
              </p>
            </li>
            <hr className="col-span-2" />
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Nome do usuário:</h5>
              <p className="font-medium text-primary/70 text-lg">{getReservation?.data?.user?.name ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Email do usuário:</h5>
              <p className="font-medium text-primary/70 text-lg">{getReservation?.data?.user?.email ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1 col-span-2">
              <h5 className="text-primary/80 font-semibold text-xl">Tipo de usuário:</h5>
              <p className="font-medium text-primary/70 text-lg">{getRoleText(getReservation?.data?.user?.role) ?? '--'}</p>
            </li>
            <hr className="col-span-2" />
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Data de início:</h5>
              <p className="font-medium text-primary/70 text-lg">{formatDate(getReservation?.data?.dateStart) ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Data de devolução:</h5>
              <p className="font-medium text-primary/70 text-lg">{formatDate(getReservation?.data?.dateEnd) ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Horario de início de uso:</h5>
              <p className="font-medium text-primary/70 text-lg">{getReservation?.data?.startTime ?? '--'}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Horário de fim de uso:</h5>
              <p className="font-medium text-primary/70 text-lg">{getReservation?.data?.dateEnd ?? '--'}</p>
            </li>
            <hr className="col-span-2" />
            <li className="flex col-span-2 flex-col gap-1">
              <h5 className="text-primary/80 font-semibold text-xl">Propósito:</h5>
              <p className="font-medium text-primary/70 text-lg">{getReservation?.data?.purpose ?? '--'}</p>
            </li>
          </ul>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
