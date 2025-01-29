import { cn } from "@/libs";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="font-sans h-screen bg-slate-500">
      <Navbar />
      <main
        className={cn("flex flex-col")}
      >
        <Outlet />
      </main>
    </div>
  );
};
