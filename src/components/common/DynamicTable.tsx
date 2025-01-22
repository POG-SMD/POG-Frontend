import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/Table";
import { cn } from "@/libs";

export type DynamicTable = {
  cols: {
    title: string;
    className: string;
  }[];
  data?: Array<{
    cells: { [key: string]: React.ReactNode };
    onClick?: () => void;
    className?: string;
  }>;
  loading?: boolean;
};

export const DynamicTable = ({ cols, data, loading }: DynamicTable) => {
  return (
    <Table className="bg-slate-100">
      <TableHeader className='block w-full bg-[#EEF1F4A6] border-y border-[#BDC6D4]'>
          <TableRow className='flex'>
            {cols.map((col, index) => (
              <TableHead
                key={index}
                className={cn(
                  'h-9 content-center text-textGray font-normal mx-auto',
                  index === 0 ? 'text-start w-full' : 'text-center w-full',
                  index === cols.length - 1 && 'text-end'
                )}
              >
                {col.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

      <TableBody>
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            {/* <Loading size='xl' /> */}
          </div>
        ) : (
          <>
            {/* {(!data || data.length === 0) && <EmptyTable />} */}
            {data &&
              data.map((item, ind) => (
                <TableRow
                  onClick={item.onClick}
                  key={ind}
                  className={cn(
                    "flex w-full",
                    item.onClick && "cursor-pointer",
                    item.className
                  )}
                >
                  {cols.map((col, index) => (
                    <TableCell
                      key={index}
                      className={cn(
                        "py-5 flex ml-auto",
                        index === 0
                          ? "mx-0"
                          : "text-center",
                        index === cols.length - 1 && "text-end",
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
