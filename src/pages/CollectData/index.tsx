import { VizualizeCalendar } from "@/components/common/Calendar";
import { ReservationForm } from "@/components/common/ReservationForm/ReservationForm";
import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const CollectData = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  useEffect(() => {
    setHead({ title: "Vamos começar escolhendo um dia." });
  }, []);

  return (
    <div>
      <VizualizeCalendar
        hasDetails={false}
        leftContent={
          <ReservationForm
            className="my-auto"
            loading={false}
            errorMessage="Erro ao reservar materiais"
            successMessage="Sucesso ao reservar materiais"
            header={<p className="">Espaço para reuniões da célula</p>}
            optionList={[{ label: "", value: "" }]}
            setState={() => {}}
          />
        }
      />
    </div>
  );
};
