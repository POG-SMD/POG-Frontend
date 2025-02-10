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

export const TableAdmin = ({
  data,
  title,
  setId,
  setOpen,
}: {
  data: UserType[] | { id: string; name: string }[];
  title: string;
  setId: Dispatch<SetStateAction<string | number>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Table className="bg-secondary rounded-lg shadow shadow-[#00000060] w-full overflow-hidden">
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
              <Icon icon="tabler:dots" fontSize={20} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
