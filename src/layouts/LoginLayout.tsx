import { cn } from "@/libs";
import { Outlet, useLocation } from "react-router-dom";

export const LoginLayout = () => {
  const location = useLocation();

  return (
    <div className="font-sans">
      <main
        className={cn("flex min-h-screen", {
          "flex-row-reverse": location.pathname.includes("register"),
        })}
      >
        <section className="w-2/3 bg-gray-500 flex justify-center items-center">
          <img src='' alt="" className="w-2/3 bg-gray-500" />
        </section>
        <Outlet />
      </main>
    </div>
  );
};
