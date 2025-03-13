import Image from "next/image";
import Link from "next/link";

// ticket create reason
export const createReason = [
  { key: "file service", label: "File Service" },
  {
    key: "evc reseller database",
    label: "EVC Reseller Database",
  },
  {
    key: "tool support",
    label: "Tool Support",
  },
  {
    key: "general questions",
    label: "General Questions",
  },
  {
    key: "sales questions",
    label: "Sales Questions",
  },
];

// Define the table columns
export const columns = [
  {
    accessorKey: "id",
    header: "Ticket Id",
    enableSorting: true,
  },
  {
    accessorKey: "ticket_subject",
    header: "Ticket Subject",
    enableSorting: true,
  },
  {
    accessorKey: "ticket_status",
    header: "Ticket Status",
    enableSorting: true,
  },
  {
    accessorKey: "open",
    header: "Open",
    enableSorting: true,
    cell: ({ row }) => (
      <Link
        href={`/${row.original.id}`}
        className="w-full h-full flex-center"
        title="Open"
      >
        <Image
          src={"/images/chat.png"}
          width={23}
          height={20}
          alt="new ticket"
          className="object-contain"
        />
      </Link>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    enableSorting: true,
  },
];

// dummy table data
export const tableData = [
  {
    id: 344,
    ticket_subject: "File Request #415",
    ticket_status: "Open",
    date: "2025-03-10 01:23:23",
  },
  {
    id: 343,
    ticket_subject: "File Request #416",
    ticket_status: "Waiting on Staff",
    date: "2025-03-08 03:06:21",
  },
  {
    id: 342,
    ticket_subject: "File Request #409",
    ticket_status: "Waiting for Customer",
    date: "2025-02-20 13:56:56",
  },
  {
    id: 340,
    ticket_subject: "File Request #390",
    ticket_status: "Closed",
    date: "2024-12-28 13:33:27",
  },
  {
    id: 339,
    ticket_subject: "File Request #361",
    ticket_status: "Closed",
    date: "2024-11-09 18:07:28",
  },
  {
    id: 338,
    ticket_subject: "File Request #371",
    ticket_status: "Closed",
    date: "2024-10-09 15:49:56",
  },
  {
    id: 329,
    ticket_subject: "File Request #337",
    ticket_status: "Closed",
    date: "2024-06-10 19:12:12",
  },
  {
    id: 328,
    ticket_subject: "File Request #331",
    ticket_status: "Closed",
    date: "2024-05-11 15:22:04",
  },
  {
    id: 327,
    ticket_subject: "File Request #328",
    ticket_status: "Closed",
    date: "2024-05-04 16:24:50",
  },
  {
    id: 326,
    ticket_subject: "File Request #327",
    ticket_status: "Closed",
    date: "2024-05-03 18:23:09",
  },
  {
    id: 325,
    ticket_subject: "File Request #321",
    ticket_status: "Closed",
    date: "2024-04-05 19:09:49",
  },
];
