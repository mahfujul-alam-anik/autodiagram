import React from "react";
import Main from "@/components/layout/Main";
import TicketsTable from "@/components/layout/TicketsTable";

export const metadata = {
  title: "All Tickets | Autodiagram",
};

const Tickets = () => {
  return (
    <Main>
      <div>
        <TicketsTable />
      </div>
    </Main>
  );
};

export default Tickets;
