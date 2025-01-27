import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navbarData } from "../mock.data";

export const Navbar = () => {
  return (
    <header>
      <nav className="w-full px-10 flex">
        <ul className="flex items-center w-full ">
          <img
            src="LA CÉLULA EUCARIOTA.jpg"
            alt="celula eucariota"
            className="w-20"
          />

          {navbarData.map((item) => (
            <>
              {item.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="border-l-2 h-full flex items-center px-5 min-w-10 text-lg text-gray-600 hover:text-gray-800">{item.name}</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdown.map((drop) => (
                      <DropdownMenuItem>{drop.name}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <li className="border-l-2 h-full flex items-center px-5 min-w-10 text-lg text-gray-600 hover:text-gray-800">
                  {item.name}
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
