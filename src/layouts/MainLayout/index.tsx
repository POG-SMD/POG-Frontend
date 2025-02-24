import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useGetStatus } from "./api/useApi";
import { useAuth } from "@/contexts";
import { ReservationStatus } from "./components/ReservationStatus";
import { statusType } from "@/types/statusType";

export type HeadingProps = {
  title?: string;
};

export type mainLayoutContext = {
  setHead: Dispatch<SetStateAction<HeadingProps>>;
};

export const MainLayout = () => {
  const [head, setHead] = useState<HeadingProps>({ title: undefined });
  const { user, setClose, close } = useAuth();
  const getStatus = useGetStatus();

  useEffect(() => {
    getStatus.makeRequest({ id: user?.id });
  }, []);

  useEffect(() => {
    if (!user?.id) return;

    const fetchStatus = () => {
      getStatus.makeRequest({ id: user.id }).then((response) => {
        if ([3, 4, 5].includes(response?.data?.data?.status)) {
          clearInterval(interval);
        }
      });
    };

    const interval = setInterval(fetchStatus, 5000);

    return () => clearInterval(interval);
  }, [user?.id]);

  return (
    <div className="font-sans min-h-screen flex justify-center flex-col  bg-[url(/images/background.svg)]">
      <Navbar />
      <h1 className="w-full text-3xl text-base_primary font-bold text-center sm:text-4xl my-10 mt-32">
        {head.title ?? ""}
      </h1>
      <main className="mb-10 mt-10 2xl:mt-10">
        <Outlet context={{ setHead }} />
        {[
          statusType.PENDENTE,
          statusType.EM_RESERVA,
          statusType.RECUSADO,
        ].includes(getStatus?.data?.status) &&
          !close && (
            <ReservationStatus setClose={setClose} data={getStatus?.data} />
          )}
      </main>
    </div>
  );
};
