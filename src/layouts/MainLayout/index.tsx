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
  const { user, setClose, close } = useAuth()
  const getStatus = useGetStatus();

  useEffect(() => {
    getStatus.makeRequest({ id: user?.id })
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
    <div className="font-sans min-h-screen flex justify-center flex-col bg-slate-500">
      <Navbar />
      <h1 className="pl-3 sm:pl-10 2xl:pl-56 w-full text-3xl text-center sm:text-start sm:text-4xl font-semibold my-10 mt-32">
        {head.title ?? ""}
      </h1>
      <main className="mb-auto mt-10 2xl:mt-10">
        <Outlet context={{ setHead }} />
        {([statusType.PENDENTE, statusType.EM_RESERVA, statusType.RECUSADO].includes(getStatus?.data?.status) && !close) && <ReservationStatus setClose={setClose} data={getStatus?.data} />}
      </main>
    </div>
  );
};
