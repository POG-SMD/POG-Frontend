import { Button } from "@/components";
import { cn } from "@/libs";
import { getStatusColor, getStatusType, statusType } from "@/types/statusType";
import { toast } from "sonner";
import { useCancelReservation, useReturnReservation } from "../api/useApi";
import { Dispatch, SetStateAction } from "react";

export const ReservationStatus = ({
  data,
  setClose,
}: {
  data: { status: number; reservationId: number };
  setClose: Dispatch<SetStateAction<boolean>>
}) => {
  const cancelReservation = useCancelReservation();
  const returnReservation = useReturnReservation();
  return (
    <div className="z-[1000] fixed left-1/2 sm:translate-x-0 -translate-x-1/4 max-w-64 sm:max-w-fit items-center w-full bottom-10 sm:left-10 bg-white p-5 rounded-[10px] shadow-md shadow-[#00000060] flex sm:flex-row flex-col justify-center gap-2">
      <p className="flex gap-2 justify-center items-center">
        Status da reserva:
        <span
          className={cn(
            "h-fit px-2 py-1 rounded-xl shadow-sm shadow-[#00000030]",
            getStatusColor(data?.status as statusType)
          )}
        >
          {getStatusType(data?.status as statusType)}
        </span>
      </p>
      {[statusType.PENDENTE].includes(data?.status) && (
        <Button
          onClick={() => {
            cancelReservation
              .makeRequest({ id: data?.reservationId })
              .then(() => {
                toast.success("Reserva recusada com sucesso!");
                setClose(true)
              })
              .catch((e) => {
                toast.error(e.response.data.message);
              });
          }}
          variant="destructive"
          className="sm:ml-10 px-10"
          disabled={cancelReservation.loading}
        >
          Cancelar
        </Button>
      )}
      {[statusType.EM_RESERVA].includes(data?.status) && (
        <Button
          onClick={() => {
            returnReservation
              .makeRequest({ id: data?.reservationId })
              .then(() => {
                toast.success("Reserva retornada com sucesso!");
                setClose(true)
              })
              .catch((e) => {
                toast.error(e.response.data.message);
              });
          }}
          variant="success"
          className="sm:ml-10 px-10"
          disabled={returnReservation.loading}
        >
          Finalizar
        </Button>
      )}
      {[statusType.RECUSADO].includes(data?.status) && (
        <Button onClick={() => setClose(true)} variant="destructive" className="sm:ml-10 px-10">
          Fechar
        </Button>
      )}
    </div>
  );
};
