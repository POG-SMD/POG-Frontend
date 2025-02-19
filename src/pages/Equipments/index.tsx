import { DynamicTable } from "@/components/common/DynamicTable";
import { ReservationForm } from "@/components/common/ReservationForm/ReservationForm";
import { columns } from "./mock";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { mainLayoutContext } from "@/layouts/MainLayout";
import { MaterialCreateModal } from "./components/CreateMaterial";
import { useGetMaterials } from "./hooks/useApi";
import { getMaterialType, MaterialType } from "@/types/materialType";

export const Equipments = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();
  const getMaterials = useGetMaterials();

  const [openCreate, setOpenCreate] = useState<boolean>(false);

  useEffect(() => {
    setHead({ title: "Vamos começar escolhendo os materiais" });
    getMaterials.makeRequest();
  }, []);

  return (
    <>
      <MaterialCreateModal
        open={openCreate}
        setOpen={setOpenCreate}
        refresh={() => getMaterials.makeRequest()}
      />
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
            data={getMaterials.data?.map((material) => ({
              cells: {
                Nome: material.title,
                Quantidade: `${material.quantity || 1} unidade(s)`,
                "Data de cadastro": (
                  <p className="sm:block hidden">
                    {material.createdAt
                      ? new Date(material.createdAt).toLocaleDateString("pt-BR")
                      : "Data não disponível"}
                  </p>
                ),
                Disponibilidade: material.disponible
                  ? "Disponível"
                  : "Indisponível",
                Importancia: (
                  <p className="bg-gray-200 border border-primary w-fit px-1.5 py-0.5 rounded-2xl">
                    {getMaterialType(String(material.type) as MaterialType)}
                  </p>
                ),
              },
            }))}
            setOpenCreate={setOpenCreate}
          />
        </div>
      </section>
    </>
  );
};
