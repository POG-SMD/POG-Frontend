import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { TableAdmin } from "./components/TableAdmin";

export const Admin = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  useEffect(() => {
    setHead({ title: "Seja bem vindo a tela de administrador!" });
  }, []);

  const mockData = Array.from({ length: 20 }, (_, i) => ({
    id: i + 'aaa',
    name: `Fulano${i + 1} da silva pato`,
  }));

  return (
    <div className="w-full flex md:flex-row flex-col px-3 sm:px-10 gap-10">
      <TableAdmin data={mockData} title="Usuários" />
      <TableAdmin data={mockData} title="Projetos" />
    </div>
  );
};
