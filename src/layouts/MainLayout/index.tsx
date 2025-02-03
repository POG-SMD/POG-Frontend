import { Dispatch, SetStateAction, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export type HeadingProps = {
  title?: string;
};

export type mainLayoutContext = {
  setHead: Dispatch<SetStateAction<HeadingProps>>;
};

export const MainLayout = () => {
  const [head, setHead] = useState<HeadingProps>({ title: undefined });

  return (
    <div className="font-sans min-h-screen flex justify-center flex-col bg-slate-500">
      <Navbar />
      <h1 className="pl-3 sm:pl-10 2xl:pl-56 w-full text-3xl text-center sm:text-start sm:text-4xl font-semibold my-10 mt-32">{head.title ?? ""}</h1>
      <main className="mb-auto mt-10 2xl:mt-10">
        <Outlet context={{ setHead }} />
      </main>
    </div>
  );
};
