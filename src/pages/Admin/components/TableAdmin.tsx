import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Icon } from "@iconify/react/dist/iconify.js";
import { UserType } from "../hooks/useApi";
import { Dispatch, SetStateAction } from "react";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@/components";

export const TableAdmin = ({
  data,
  title,
  setId,
  setOpen,
  setOpenCreate,
}: {
  data: UserType[] | { id: string; name: string }[];
  title: string;
  setId: Dispatch<SetStateAction<string | number>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOpenCreate: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Table className="bg-secondary rounded-lg relative shadow shadow-[#00000060] w-full overflow-hidden">
      <Icon
        icon="lucide:plus"
        onClick={() => setOpenCreate(true)}
        className="absolute right-2.5 hover:text-primary/60 cursor-pointer duration-150 top-2.5 z-50"
        fontSize={20}
      />
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-xl">{title}</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="overflow-y-auto overflow-x-hidden max-h-[60vh] block scrollPrimary">
        {data.map((item) => (
          <TableRow
            key={item.id}
            className="cursor-pointer hover:bg-gray-100 duration-150"
            onClick={() => {
              setId(item.id);
              setOpen(true);
            }}
          >
            <TableCell className="w-full font-medium">{item.name}</TableCell>
            <TableCell className="w-fit">
              <Popover>
                <PopoverTrigger className="h-6 cursor-pointer text-primary/70" onClick={e => e.stopPropagation()}>
                  <Icon icon="tabler:dots" className="h-5" fontSize={20} />
                </PopoverTrigger>

                <PopoverContent className="w-fit">
                  <Button variant='destructive' className="w-full px-10">
                    Remover
                  </Button>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
