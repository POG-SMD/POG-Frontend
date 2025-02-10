import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { TableAdmin } from "./components/TableAdmin";
import { useGetUsers } from "./hooks/useApi";

export const Admin = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  const getUsers = useGetUsers();

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
    <div className="w-full flex md:flex-row flex-col px-3 sm:px-10 gap-10">
      <TableAdmin data={getUsers?.data} title="Usuários" />
      <TableAdmin data={mockData} title="Projetos" />
    </div>
  );
};
