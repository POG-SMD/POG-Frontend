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

export const TableAdmin = ({
  data,
  title,
}: {
  data: UserType[] | { id: string; name: string }[];
  title: string;
}) => {
  return (
    <Table className="bg-secondary rounded-lgshadow shadow-[#00000060] w-full rounded-lg">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-xl">{title}</TableHead>
        </TableRow>
      </TableHeader>
      <div className="overflow-auto max-h-[60vh] rounded-lg scrollPrimary overflow-x-hidden">
        <TableBody>
          {data.map((item) => (
            <TableRow>
              <TableCell className="w-full font-medium">{item.name}</TableCell>
              <TableCell className="w-fit">
                <Icon icon="tabler:dots" fontSize={20} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </div>
    </Table>
  );
};
