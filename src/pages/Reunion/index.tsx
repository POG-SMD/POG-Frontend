import { VizualizeCalendar } from "@/components/common/Calendar";
import { ReservationForm } from "@/components/common/ReservationForm/ReservationForm";
import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useGetMaterialOptions } from "../Equipments/hooks/useApi";
import { ReservationType } from "@/types/reservationType";

export const Reunion = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();
  const getMaterialOptions = useGetMaterialOptions();

  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setHead({ title: "Vamos começar escolhendo um dia." });
    getMaterialOptions.makeRequest();
  }, []);

  return (
    <div>
      <VizualizeCalendar
        hasDetails={false}
        setDate={setDate}
        leftContent={
          <ReservationForm
            date={date}
            className="my-auto"
            successMessage="Sucesso ao reservar espaço"
            header={<p className="">Espaço para reuniões da célula</p>}
            optionList={getMaterialOptions?.data || []}
            type={ReservationType.REUNION}
          />
        }
      />
    </div>
  );
};
