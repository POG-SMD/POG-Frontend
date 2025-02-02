import { VizualizeCalendar } from "@/components/common/Calendar";
import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  useEffect(() => {
    setHead({ title: "Selecione algum dia no calendário" });
  }, []);

  return (
    <div>
      <VizualizeCalendar />
    </div>
  );
};
