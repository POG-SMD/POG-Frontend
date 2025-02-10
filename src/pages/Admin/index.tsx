import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { TableAdmin } from "./components/TableAdmin";
import { useGetUsers } from "./hooks/useApi";
import { UserDetails } from "./components/UserDetails";

export const Admin = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  const getUsers = useGetUsers();
  const [id, setId] = useState<string | number>(0);
  const [openUser, setOpenUser] = useState<boolean>(false);
  const [openProject, setOpenProject] = useState<boolean>(false);

  useEffect(() => {
    setHead({ title: "Seja bem vindo a tela de administrador!" });

    getUsers.makeRequest();
  }, []);

  const mockData = Array.from({ length: 20 }, (_, i) => ({
    id: i + "aaa",
    name: `Projeto ${i + 1}`,
  }));

  if (!getUsers?.data) return <></>;

  return (
    <>
      <UserDetails id={id} setOpen={setOpenUser} open={openUser} />
      <div className="w-full flex md:flex-row flex-col px-3 sm:px-10 gap-10">
        <TableAdmin
          setId={setId}
          setOpen={setOpenUser}
          data={getUsers?.data}
          title="Usuários"
        />
        <TableAdmin
          setId={setId}
          setOpen={setOpenProject}
          data={mockData}
          title="Projetos"
        />
      </div>
    </>
  );
};
