import { cn } from "@/libs";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="font-sans max-h-screen overflow-hidden">
      <Navbar />
      <main
        className={cn("flex flex-col h-full")}
      >
        <Outlet />
      </main>
    </div>
  );
};
