import { cn } from "@/libs";
import { Outlet, useLocation } from "react-router-dom";

export const LoginLayout = () => {
  const location = useLocation();

  return (
    <div className="font-sans">
      <main
        className={cn("flex min-h-screen bg-base_secondary-100", {
          "flex-row-reverse": location.pathname.includes("register"),
        })}
      >
        <section className="w-2/3 bg-gray-500 sm:flex hidden justify-center items-center relative">
          <div className="block bg-black/30 absolute top-0 left-0 w-full h-full"></div>
          <img src='/images/bg-login.jpg' alt="" className="w-full h-full bg-gray-500" />
        </section>
        <Outlet />
      </main>
    </div>
  );
};
