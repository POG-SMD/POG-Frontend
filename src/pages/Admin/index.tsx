import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { TableAdmin } from "./components/TableAdmin";
import { useGetReservations, useGetUsers } from "./hooks/useApi";
import { UserDetails } from "./components/UserDetails";
import { UserCreateModal } from "./components/UserCreateModal";
import { Loading } from "@/components/common/Loading";
import { ReservationDetails } from "./components/ReservationDetails";

export const Admin = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  const getUsers = useGetUsers();
  const getReservations = useGetReservations();

  const [id, setId] = useState<string | number>(0);
  const [openUser, setOpenUser] = useState<boolean>(false);
  const [openCreateUser, setOpenCreateUser] = useState<boolean>(false);
  const [openReservation, setOpenReservation] = useState<boolean>(false);

  useEffect(() => {
    setHead({ title: "Seja bem vindo a tela de administrador!" });

    getUsers.makeRequest();
    getReservations.makeRequest()
  }, []);

  if (!getUsers?.data) return <div className="w-full h-[50vh] flex justify-center items-center"><Loading size='xl' /></div>;

  return (
    <>
      <UserCreateModal refresh={() => getUsers.makeRequest()} open={openCreateUser} setOpen={setOpenCreateUser} />
      <UserDetails id={id} setOpen={setOpenUser} open={openUser} />
      <ReservationDetails id={id} setOpen={setOpenReservation} open={openReservation} />
      <div className="w-full flex md:flex-row flex-col px-3 sm:px-10 gap-10">
        <TableAdmin
          setId={setId}
          setOpen={setOpenUser}
          setOpenCreate={setOpenCreateUser}
          data={getUsers?.data}
          title="Usuários"
          refresh={() => getUsers.makeRequest()}
          />
        <TableAdmin
          setId={setId}
          setOpen={setOpenReservation}
          data={getReservations?.data}
          title="Reservas"
          refresh={() => getReservations.makeRequest()}
          reservation
        />
      </div>
    </>
  );
};
