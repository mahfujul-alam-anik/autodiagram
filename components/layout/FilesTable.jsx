"use client";

import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import { saveAs } from "file-saver";
import { tableData } from "@/constant/my_files";
import {
  Button,
  Input,
  Pagination,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { PiFileCsvDuotone } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import AddTicket from "../ui/AddTicket";
import Link from "next/link";
import Image from "next/image";

const FilesTable = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Change as needed
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  // Define the table columns
  const columns = [
    {
      accessorKey: "id",
      header: "File Id",
      enableSorting: true,
    },
    {
      accessorKey: "vehicle",
      header: "Vehicle",
      enableSorting: true,
    },
    {
      accessorKey: "ecu",
      header: "ECU",
      enableSorting: true,
    },
    {
      accessorKey: "fileDescription",
      header: "File Description",
      enableSorting: true,
    },
    {
      accessorKey: "ticketStatus",
      header: "Ticket",
      enableSorting: true,
      cell: ({ row }) =>
        row.original.ticketStatus !== "" ? (
          <Link
            href={row.original.ticketStatus}
            className="w-full h-full flex-center"
            title="Open"
          >
            <Image
              src={"/images/chat.png"}
              width={23}
              height={20}
              alt="open ticket"
              className="object-contain"
            />
          </Link>
        ) : (
          <div
            className="w-full h-full flex-center cursor-pointer"
            title="New Ticket"
            onClick={() => onOpen()}
          >
            <Image
              src={"/images/ticket.png"}
              width={23}
              height={20}
              alt="new ticket"
              className="object-contain"
            />
          </div>
        ),
    },
    {
      header: "Files",
      accessorKey: "files",
      enableSorting: true,
      cell: ({ row }) => (
        <div className="flex-center gap-3">
          <Link
            href={row.original.ticketStatus}
            className="w-full h-full flex-center"
            title="Download Original File"
          >
            <Image
              src={"/images/original-file-download.png"}
              width={35}
              height={35}
              alt="Download"
              className="object-contain "
            />
          </Link>
          <Link
            href={row.original.ticketStatus}
            className="w-full h-full flex-center"
            title="Download Tuned File"
          >
            <Image
              src={"/images/tuned-file-download.png.png"}
              width={45}
              height={45}
              alt="Download"
              className="object-contain"
            />
          </Link>
        </div>
      ),
    },
    {
      accessorKey: "message",
      header: "Message",
      enableSorting: true,
    },
    {
      accessorKey: "status",
      header: "Status",
      enableSorting: true,
      cell: ({ row }) => {
        const status = row.original.status;
        const imageSrc =
          status == "Completed"
            ? "/images/file-completed.png"
            : status == "Pending"
            ? "/images/file-pending.png"
            : status == "Cancelled"
            ? "/images/file-canceled.png"
            : "/images/file-in-stage.png";

        return (
          <div className="w-full h-full flex-center" title={status}>
            <Image
              src={imageSrc}
              width={26}
              height={26}
              alt={status}
              className="object-contain"
            />
          </div>
        );
      },
    },
    {
      accessorKey: "date",
      header: "Date",
      enableSorting: true,
    },
  ];

  // defining tanstack table
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
      columnVisibility,
      pagination: { pageIndex: currentPage - 1, pageSize: rowsPerPage },
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
  });

  // download data as csv
  const exportToCSV = () => {
    const csvContent = [
      Object.keys(tableData[0]).join(","),
      ...tableData.map((row) => Object.values(row).join(",")),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "table_data.csv");
  };

  // clear search input field and back to page 1
  const onClear = React.useCallback(() => {
    setGlobalFilter("");
    setCurrentPage(1);
  }, []);

  return (
    <div className="text-slate-400">
      {/* modal to add a ticket */}
      <AddTicket isOpen={isOpen} onOpenChange={onOpenChange} fileID={""} />

      <div className="flex gap-4 mb-4 selectBox2">
        <Input
          isClearable
          placeholder="Search..."
          startContent={<FiSearch className="mr-2" />}
          value={globalFilter}
          onClear={() => onClear()}
          onChange={(e) => setGlobalFilter(e.target.value)}
          classNames={{
            input: "!text-slate-300",
            inputWrapper:
              "!bg-slate-800 text-slate-200 h-[50px] border border-slate-700",
          }}
          radius="sm"
        />
        <Select
          label="Filter by status"
          onChange={(e) => setGlobalFilter(e.target.value)}
          selectedKey={""}
          size="sm"
          classNames={{
            label: "!text-slate-400 text-xs",
            value: "text-xs !text-slate-100",
            trigger: "!bg-slate-800 border border-slate-700",
          }}
          radius="sm"
        >
          <SelectItem value="" isDisabled>
            Select status
          </SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Canceled">Canceled</SelectItem>
          <SelectItem value="On Stage">On Stage</SelectItem>
        </Select>
        <div className="w-[140px]">
          <Button
            color="primary"
            variant="solid"
            className="!bg-primary h-[46px]"
            onPress={exportToCSV}
            startContent={
              <div className="w-5 h-5">
                <PiFileCsvDuotone className="text-lg text-white" />
              </div>
            }
            size="md"
            radius="sm"
          >
            Export
          </Button>
        </div>
      </div>

      <div className="p-4 rounded-md border border-slate-800 bg-slate-800 bg-opacity-70 backdrop-blur-md backdrop-brightness-150">
        {/* Total Row Count */}
        <p className="text-sm text-slate-200 mb-4">
          Total Files: {tableData.length}
        </p>

        <div className="overflow-x-scrol">
          <table className="w-full border-collapse border border-gray-300 ">
            <thead className="">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-gray-900 bg-opacity-40">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="border border-slate-700 p-2 cursor-pointer text-xs font-semibold text-slate-300"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted()
                        ? header.column.getIsSorted() === "asc"
                          ? " ▲"
                          : " ▼"
                        : ""}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-700 hover:bg-opacity-50 text-xs text-gray-300"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="border p-2 border-slate-700">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex-between mt-4">
        <Button
          color="secondary"
          size="sm"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Pagination
          color="secondary"
          page={currentPage}
          total={table.getPageCount()}
          onChange={setCurrentPage}
        />
        <Button
          color="secondary"
          size="sm"
          onPress={() =>
            setCurrentPage((prev) =>
              prev < table.getPageCount() ? prev + 1 : prev
            )
          }
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FilesTable;
