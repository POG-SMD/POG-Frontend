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
    <header className="shadow-sm shadow-[#00000060]">
      <nav className="w-full px-10 flex h-20">
        <ul className="flex items-center w-full ">
          <img
            src="images\logo.svg"
            alt="celula eucariota"
            className="w-20 mr-5"
          />

          {navbarData.map((item) => (
            <>
              {item.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="no-underline border-l-2 h-full flex items-center px-5 min-w-10 text-lg text-gray-600 hover:text-gray-900 hover:bg-gray-400 duration-100">
                    {item.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-secondary">
                    {item.dropdown.map((drop) => (
                      <DropdownMenuItem><Link className="w-full" to={drop.link}>{drop.name}</Link></DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <li
                  className={cn(
                    "border-l-2 h-full flex items-center px-10 min-w-10 text-lg text-gray-600 hover:text-gray-900 hover:bg-gray-400 duration-100",
                    {
                      "bg-gray-600 text-secondary": location.pathname.includes(
                        item.link
                      ),
                    }
                  )}
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )}
            </>
          ))}

          <li className="text-lg text-gray-600 hover:text-gray-800 ml-auto">
            <Icon icon="ion:notifcations" className="w-10 h-10" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
