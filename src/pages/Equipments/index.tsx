import { DynamicTable } from "@/components/common/DynamicTable";
import { ReservationForm } from "@/components/common/ReservationForm/ReservationForm";
import { columns } from "./mock";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { mainLayoutContext } from "@/layouts/MainLayout";
import { MaterialCreateModal } from "./components/CreateMaterial";
import {
  useDeleteMaterial,
  useGetMaterialOptions,
  useGetMaterials,
} from "./hooks/useApi";
import { getMaterialType, MaterialType } from "@/types/materialType";
import { MaterialDetails } from "./components/DetailsMaterial";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  DeleteModal,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components";
import { toast } from "sonner";
import { ReservationType } from "@/types/reservationType";
import { useAuth } from "@/contexts";
import { RoleType } from "@/types/roleType";

export const Equipments = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();
  const { user } = useAuth();
  const getMaterials = useGetMaterials();
  const deleteMaterial = useDeleteMaterial();
  const getMaterialOptions = useGetMaterialOptions();

  const [id, setId] = useState<string | number>(0);
  const [deleteId, setDeleteId] = useState<string | number>(0);
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  useEffect(() => {
    setHead({ title: "Vamos começar escolhendo os materiais" });
    getMaterials.makeRequest();
    getMaterialOptions.makeRequest();
  }, []);

  return (
    <>
      <DeleteModal
        open={openDelete}
        setOpen={setOpenDelete}
        title="Deletar"
        description="Você realmente deseja deletar esse material?"
        loading={deleteMaterial.loading}
        deleteClick={() => {
          deleteMaterial
            .makeRequest({ id: deleteId })
            .then(() => {
              toast.success("Material removido com sucesso!");
              getMaterials.makeRequest();
              getMaterialOptions.makeRequest();
              setOpenDelete(false);
            })
            .catch((err) => {
              if (err) {
                toast.error(err.response.data.message);
                return;
              }

              toast.error("Erro ao deletar material!");
            });
        }}
      />
      <MaterialDetails id={id} setOpen={setOpenDetail} open={openDetail} />
      <MaterialCreateModal
        open={openCreate}
        setOpen={setOpenCreate}
        refresh={() => {
          getMaterials.makeRequest();
          getMaterialOptions.makeRequest();
        }}
      />
      <section className="flex flex-col lg:grid grid-cols-10 gap-10 px-5 lg:px-10">
        <ReservationForm
          className="my-auto col-span-4 2xl:col-span-3"
          successMessage="Sucesso ao reservar materiais"
          header={<p className="">Equipamentos</p>}
          optionList={getMaterialOptions?.data || []}
          type={ReservationType.EQUIPMENT}
          refresh={() => {
            getMaterials.makeRequest();
            getMaterialOptions.makeRequest();
          }}
          hasMaterialDefault
        />
        <div className="col-span-6 2xl:col-span-7">
          <DynamicTable
            title="Tabela de equipamentos"
            cols={columns}
            data={getMaterials.data?.map((material) => ({
              cells: {
                Nome: material.title,
                Quantidade: `${material.quantity || 0} unidade(s)`,
                Disponibilidade:
                  material.quantity > 0 ? "Disponível" : "Indisponível",
                Importancia: (
                  <p className="bg-gray-200 border border-primary w-fit px-1.5 py-0.5 rounded-2xl">
                    {getMaterialType(String(material.type) as MaterialType)}
                  </p>
                ),
                "": (
                  <>
                    {user?.role === RoleType.ADMIN && (
                      <Popover>
                        <PopoverTrigger
                          className="h-6 ml-auto cursor-pointer px-1 rounded-md flex justify-center items-center bg-base_secondary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon
                            icon="tabler:dots"
                            className="h-5 text-base_secondary-100"
                            fontSize={20}
                          />
                        </PopoverTrigger>

                        <PopoverContent
                          className="w-fit"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            onClick={() => {
                              setDeleteId(material.id);
                              setOpenDelete(true);
                            }}
                            variant="destructive"
                            className="w-full px-10"
                          >
                            Remover
                          </Button>
                        </PopoverContent>
                      </Popover>
                    )}
                  </>
                ),
              },
              onClick: () => {
                setId(material.id);
                setOpenDetail(true);
              },
            }))}
            setOpenCreate={setOpenCreate}
          />
        </div>
      </section>
    </>
  );
};
