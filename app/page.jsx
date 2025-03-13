import React from "react";
import Main from "@/components/layout/Main";
import VehicleCatalog from "@/components/layout/VehicleCatalog";
import Image from "next/image";
import { Select } from "@heroui/react";
import InfoCard from "@/components/ui/InfoCard";
import { fileStatus } from "@/constant/statistic";
import NoticeBoard from "@/components/layout/NoticeBoard";

const Dashboard = () => {
  return (
    <Main>
      <div>
        {/* Vehicle stage or catalog checking section */}
        <section className="pb-10">
          <VehicleCatalog />
        </section>

        <div className="flex gap-5">
          {/* dashboard info card */}
          <section className="">
            <div className="gap-3 flex flex-wrap">
              {fileStatus.map((item) => (
                <InfoCard
                  title={item.title}
                  number={item.number}
                  key={item.title}
                />
              ))}
            </div>
          </section>

          {/* notice board for dashboard */}
          <section className="">
            <NoticeBoard />
          </section>
        </div>
      </div>
    </Main>
  );
};

export default Dashboard;
