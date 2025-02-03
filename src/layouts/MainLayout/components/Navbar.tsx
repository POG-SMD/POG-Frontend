import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { navbarData } from "../mock.data";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/libs";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-secondary shadow-sm shadow-[#00000060] w-full fixed top-0">
      <nav className="w-full px-10 flex h-20">
        <ul className="flex items-center w-full">
          <img
            src="images\logo.svg"
            alt="celula eucariota"
            className="w-16 h-16 lg:mr-5 lg:ml-0 mx-auto"
          />
          <li className="absolute right-4 lg:hidden block">
            <Sheet>
              <SheetTrigger>
                <Icon icon="uis:bars" fontSize={32} />
              </SheetTrigger>
              <SheetContent className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex justify-start items-center gap-3">
                    <img
                      src="images/logo.svg"
                      alt="celula eucariota"
                      className="w-16 h-16"
                    />
                    <h2 className="text-2xl">Hermes</h2>
                  </SheetTitle>
                </SheetHeader>
                <ul className="h-full flex flex-col gap-5">
                  {navbarData.map((item) => (
                    <li key={item.name}>
                      {item.dropdown ? (
                        <details className="w-full">
                          <summary
                            className={cn(
                              "cursor-pointer border-b border-gray-400 h-10 flex items-center px-10 min-w-10 text-lg text-gray-600 hover:text-gray-900 hover:bg-gray-400 duration-100",
                              {
                                "bg-gray-600 text-secondary":
                                  item.dropdown.some(
                                    (drop) =>
                                      drop.link &&
                                      location.pathname.includes(drop.link)
                                  ),
                              }
                            )}
                          >
                            {item.name}
                          </summary>
                          <ul className="pl-10">
                            {item.dropdown.map((drop) =>
                              drop.link ? (
                                <li key={drop.link}>
                                  <Link
                                    className="block py-2 pl-5 text-gray-600 hover:text-gray-900 hover:bg-gray-300 rounded-md"
                                    to={drop.link}
                                  >
                                    {drop.name}
                                  </Link>
                                </li>
                              ) : (
                                <li
                                  key={drop.name}
                                  className="font-semibold mt-2"
                                >
                                  <hr />
                                  <p className="text-center bg-gray-100 py-1">
                                    {drop.name}
                                  </p>
                                  <hr />
                                </li>
                              )
                            )}
                          </ul>
                        </details>
                      ) : (
                        <Link
                          className={cn(
                            "h-10 flex items-center px-10 min-w-10 border-b border-gray-400 text-lg text-gray-600 hover:text-gray-900 hover:bg-gray-400 duration-100",
                            {
                              "bg-gray-600 text-secondary":
                                location.pathname.includes(item.link),
                            }
                          )}
                          to={item.link}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </li>
          {navbarData.map((item) => (
            <div className="h-full hidden lg:block" key={item.name}>
              {item.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "no-underline border-l-2 h-full flex items-center px-5 min-w-10 text-lg text-gray-600 hover:text-gray-900 hover:bg-gray-400 duration-100",
                        {
                          "bg-gray-600 text-secondary": item.dropdown.some(
                            (drop) =>
                              drop.link && location.pathname.includes(drop.link)
                          ),
                        }
                      )}
                    >
                      {item.name}
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-secondary">
                    {item.dropdown.map((drop) => (
                      <>
                        {drop.link ? (
                          <Link className="w-full" to={drop.link}>
                            <DropdownMenuItem key={drop.link}>
                              {drop.name}
                            </DropdownMenuItem>
                          </Link>
                        ) : (
                          <div className="font-semibold">
                            <hr />
                            <p className="text-center bg-gray-100 py-1">
                              {drop.name}
                            </p>
                            <hr />
                          </div>
                        )}
                      </>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  className={cn(
                    "border-l-2 h-full flex items-center px-10 min-w-10 text-lg text-gray-600 hover:text-gray-900 hover:bg-gray-400 duration-100",
                    {
                      "bg-gray-600 text-secondary": location.pathname.includes(
                        item.link
                      ),
                    }
                  )}
                  to={item.link}
                >
                  <li>{item.name}</li>
                </Link>
              )}
            </div>
          ))}

          {/* <li className="text-lg text-gray-600 hover:text-gray-800 ml-auto">
            <Icon icon="ion:notifications" className="w-10 h-10" />
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
