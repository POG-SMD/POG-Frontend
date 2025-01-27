import { cn } from "@/libs";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="font-sans">
      <main
        className={cn("flex min-h-screen flex-col", {
          "flex-row-reverse": location.pathname.includes("register"),
        })}
      >
        <Navbar />
        <div className="bg-slate-300 mt-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
