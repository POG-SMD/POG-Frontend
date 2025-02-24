import { VizualizeCalendar } from "@/components/common/Calendar";
import { ReservationForm } from "@/components/common/ReservationForm/ReservationForm";
import { mainLayoutContext } from "@/layouts/MainLayout";
import { ReservationType } from "@/types/reservationType";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useGetMaterialOptions } from "../Equipments/hooks/useApi";
import { useGetReservations } from "../Admin/hooks/useApi";

export const CollectData = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();
  const getMaterialOptions = useGetMaterialOptions();
  const getReservations = useGetReservations();

  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setHead({ title: "Vamos começar escolhendo um dia." });
    getReservations.makeRequest();
    getMaterialOptions.makeRequest();
  }, []);

  return (
    <div>
      <VizualizeCalendar
        hasDetails={false}
        setDate={setDate}
        reservations={getReservations?.data || []}
        leftContent={
          <ReservationForm
            date={date}
            className="my-auto"
            successMessage="Sucesso ao reservar espaço"
            header={<p className="">Coleta de dados</p>}
            optionList={getMaterialOptions?.data || []}
            type={ReservationType.DATA_COLLECT}
          />
        }
      />
    </div>
  );
};
