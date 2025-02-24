import React, { Dispatch, SetStateAction } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/Table";
import { cn } from "@/libs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../ui/Button";
import { RoleType } from "@/types/roleType";
import { useAuth } from "@/contexts";
import { Loading } from "./Loading";

export type DynamicTable = {
  cols: {
    title: string;
    className: string;
  }[];
  title: string;
  className?: string;
  data: Array<{
    cells: { [key: string]: React.ReactNode };
    onClick?: () => void;
    className?: string;
  }>;
  loading?: boolean;
  setOpenCreate?: Dispatch<SetStateAction<boolean>>;
};

export const DynamicTable = ({
  cols,
  data,
  loading,
  className,
  title,
  setOpenCreate,
}: DynamicTable) => {
  const { user } = useAuth();
  return (
    <Table
      className={cn(
        "bg-white w-full rounded-lg overflow-hidden max-h-screen flex flex-col justify-start",
        className
      )}
    >
      <TableHeader className="block w-full py-3">
        <div className="flex justify-between items-center px-3">
          <h2 className="text-3xl my-2 font-extrabold text-gray-600">
            {title}
          </h2>
          {user?.role === RoleType.ADMIN && (
            <Button
              className="cursor-pointer hover:bg-base_secondary/90 duration-200 rounded-md flex justify-center items-center bg-base_secondary"
              onClick={() => setOpenCreate && setOpenCreate(true)}
            >
              <Icon fontSize={20} icon="tabler:plus" />
            </Button>
          )}
        </div>
        <TableRow className="flex px-3 h-fit py-1">
          {cols.map((col, index) => (
            <TableHead
              key={index}
              className={
                (cn(
                  "h-9 content-center text-gray-600 font-bold text-start w-full sm:text-base text-xs",
                  index === cols.length - 1 && "text-start"
                ),
                col.className)
              }
            >
              {col.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody className="overflow-auto max-h-full">
        {loading ? (
          <div className="flex items-center justify-center w-full">
            <Loading size="xl" />
          </div>
        ) : (
          <>
            {data &&
              data.map((item, ind) => (
                <TableRow
                  onClick={item.onClick}
                  key={ind}
                  className={cn(
                    "flex w-full px-3",
                    item.onClick && "cursor-pointer",
                    ind % 2 === 0
                      ? "bg-base_primary-200"
                      : "bg-base_primary-100",
                    item.className
                  )}
                >
                  {cols.map((col, index) => (
                    <TableCell
                      key={index}
                      className={cn(
                        "py-5 flex ml-auto w-full sm:text-base text-xs",
                        index === 0 ? "mx-0" : "text-center",
                        index === cols.length - 1 && "text-start",
                        col.className
                      )}
                    >
                      {typeof col.title === "string"
                        ? item.cells[col.title]
                        : col.title}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};
