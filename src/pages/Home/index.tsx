import { VizualizeCalendar } from "@/components/common/Calendar";
import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useGetReservations } from "../Admin/hooks/useApi";

export const Home = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();
  const getReservations = useGetReservations();

  useEffect(() => {
    setHead({ title: "Selecione algum dia no calendário" });
    getReservations.makeRequest();
  }, []);

  return (
    <div>
      <VizualizeCalendar reservations={getReservations?.data || []} />
    </div>
  );
};
