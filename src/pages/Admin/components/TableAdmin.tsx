import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  useAcceptReservation,
  useDeleteReservation,
  useDeleteUser,
  useRefusetReservation,
} from "../hooks/useApi";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Button,
  DeleteModal,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components";
import { toast } from "sonner";
import { getReservationType, ReservationType } from "@/types/reservationType";
import { getStatusColor, getStatusType, statusType } from "@/types/statusType";
import { cn } from "@/libs";

export const TableAdmin = ({
  data,
  title,
  setId,
  setOpen,
  setOpenCreate,
  refresh,
  reservation = false,
}: {
  data: any;
  title: string;
  setId: Dispatch<SetStateAction<string | number>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOpenCreate?: Dispatch<SetStateAction<boolean>>;
  refresh: () => void;
  reservation?: boolean;
}) => {
  const deleteUser = useDeleteUser();
  const deleteReservation = useDeleteReservation();

  const acceptReservation = useAcceptReservation();
  const refuseReservation = useRefusetReservation();

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | number | null>(null);

  const deleteRequest = reservation ? deleteReservation : deleteUser;

  return (
    <>
      <DeleteModal
        open={openDelete}
        setOpen={setOpenDelete}
        title="Deletar"
        description={`Você realmente deseja deletar ${reservation ? 'essa reserva' : 'esse usuário'}?`}
        loading={deleteUser.loading}
        deleteClick={() => {
          deleteRequest
            .makeRequest({ id: deleteId })
            .then(() => {
              toast.success(
                `${
                  reservation ? "Reserva" : "Usuário"
                } removido(a) com sucesso!`
              );
              refresh();
              setOpenDelete(false);
            })
            .catch((err) => {
              if (err) {
                toast.error(err.response.data.message);
                return;
              }

              toast.error(
                `Erro ao deletar ${reservation ? "reserva" : "usuário"}!`
              );
            });
        }}
      />
      <Table className="bg-secondary rounded-lg relative shadow shadow-[#00000060] w-full overflow-hidden">
        {!reservation && (
          <Icon
            icon="lucide:plus"
            onClick={() => setOpenCreate && setOpenCreate(true)}
            className="absolute right-2.5 hover:text-primary/60 cursor-pointer duration-150 top-2.5 z-50"
            fontSize={20}
          />
        )}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-xl">{title}</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="overflow-y-auto overflow-x-hidden max-h-[60vh] block scrollPrimary">
          {data?.map((item: any) => (
            <TableRow
              key={item?.id}
              className="cursor-pointer hover:bg-gray-100 duration-150 flex"
              onClick={() => {
                setId(item?.id);
                setOpen(true);
              }}
            >
              <TableCell className="font-medium w-full">
                {item?.name || item?.user?.name}
              </TableCell>
              {item?.type && (
                <TableCell className="mx-auto font-medium w-full">
                  {getReservationType(item?.type as ReservationType)}
                </TableCell>
              )}
              {item?.status && (
                <TableCell className="mx-auto w-full font-medium">
                  <span
                    className={cn(
                      "h-fit px-2 py-1 rounded-xl shadow-sm shadow-[#00000030]",
                      getStatusColor(item?.status as statusType)
                    )}
                  >
                    {getStatusType(item?.status as statusType)}
                  </span>
                </TableCell>
              )}
              <TableCell className="w-fit ml-auto">
                <Popover>
                  <PopoverTrigger
                    className="h-6 cursor-pointer text-primary/70"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon icon="tabler:dots" className="h-5" fontSize={20} />
                  </PopoverTrigger>

                  <PopoverContent
                    className="w-fit flex flex-col gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {(!reservation ||
                      ![statusType.PENDENTE].includes(item?.status)) && (
                      <Button
                        onClick={() => {
                          setDeleteId(item?.id);
                          setOpenDelete(true);
                        }}
                        variant="destructive"
                        className="w-full px-10"
                      >
                        Remover
                      </Button>
                    )}
                    {reservation &&
                      [statusType.PENDENTE].includes(item?.status) && (
                        <Button
                          onClick={() => {
                            acceptReservation
                              .makeRequest({ id: item?.id })
                              .then(() => {
                                toast.success("Reserva aceita com sucesso!");
                                refresh && refresh();
                              })
                              .catch((e) => {
                                toast.error(e.response.data.message);
                              });
                          }}
                          variant="success"
                          className="w-full px-10"
                        >
                          Aceitar
                        </Button>
                      )}
                    {reservation &&
                      [statusType.PENDENTE].includes(item?.status) && (
                        <Button
                          onClick={() => {
                            refuseReservation
                              .makeRequest({ id: item?.id })
                              .then(() => {
                                toast.success("Reserva recusada com sucesso!");
                                refresh && refresh();
                              })
                              .catch((e) => {
                                toast.error(e.response.data.message);
                              });
                          }}
                          variant="destructive"
                          className="w-full px-10"
                        >
                          Recusar
                        </Button>
                      )}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
