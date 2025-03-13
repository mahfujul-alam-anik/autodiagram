import React from "react";
import Main from "@/components/layout/Main";
import FilesTable from "@/components/layout/FilesTable";

export const metadata = {
  title: "All Files | Autodiagram",
};

const MyFiles = () => {
  return (
    <Main>
      <div>
        <FilesTable />
      </div>
    </Main>
  );
};

export default MyFiles;
