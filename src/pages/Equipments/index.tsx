import { DynamicTable } from "@/components/common/DynamicTable";
import { ReservationForm } from "@/components/common/ReservationForm/ReservationForm";
import { columns, mockData } from "./mock";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { mainLayoutContext } from "@/layouts/MainLayout";
import { MaterialCreateModal } from "./components/CreateMaterial";

export const Equipments = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  const [openCreate, setOpenCreate] = useState<boolean>(false)

  useEffect(() => {
    setHead({ title: "Vamos começar escolhendo os materiais" });
  }, []);

  return (
    <>
      <MaterialCreateModal open={openCreate} setOpen={setOpenCreate} refresh={() => {}} />
      <section className="flex flex-col lg:grid grid-cols-10 gap-10 px-5 lg:px-10 mb-10">
        <ReservationForm
          className="my-auto col-span-4 2xl:col-span-3"
          loading={false}
          errorMessage="Erro ao reservar materiais"
          successMessage="Sucesso ao reservar materiais"
          header={<p className="">Equipamentos</p>}
          optionList={[{ label: "", value: "" }]}
          setState={() => {}}
        />
        <div className="col-span-6 2xl:col-span-7">
          <DynamicTable
            title="Tabela de equipamentos"
            cols={columns}
            data={mockData}
            setOpenCreate={setOpenCreate}
          />
        </div>
      </section>
    </>
  );
};
