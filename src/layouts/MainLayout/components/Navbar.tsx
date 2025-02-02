import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navbarData } from "../mock.data";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/libs";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-secondary shadow-sm shadow-[#00000060] w-full">
      <nav className="w-full px-10 flex h-20">
        <ul className="flex items-center w-full">
          <img
            src="images\logo.svg"
            alt="celula eucariota"
            className="w-16 h-16 mr-5"
          />

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
                            (drop) => location.pathname.includes(drop.link)
                          ),
                        }
                      )}
                    >
                      {item.name}
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-secondary">
                    {item.dropdown.map((drop) => (
                      <Link className="w-full" to={drop.link}>
                        <DropdownMenuItem key={drop.link}>
                          {drop.name}
                        </DropdownMenuItem>
                      </Link>
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

          <li className="text-lg text-gray-600 hover:text-gray-800 ml-auto">
            <Icon icon="ion:notifications" className="w-10 h-10" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
