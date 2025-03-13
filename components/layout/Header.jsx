import Image from "next/image";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import IconVatar from "../ui/IconVatar";
import { Tooltip, User } from "@heroui/react";

const Header = () => {
  return (
    <header className="flex-between py-4 pr-8 pl-10 w-full border-slate-700 border-b sticky top-0 left-0 z-40 backdrop-blur-lg">
      <nav>
        <Tooltip
          classNames={{
            content: "bg-slate-800 text-slate-200",
          }}
          content={
            <div className="px-1 py-2 ">
              <div className="text-small font-semibold pb-[6px] text-blue-500">
                Opening Hour - Open Now
              </div>
              <div className="text-tiny col-flex gap-[3px] text-slate-300">
                <p>Monday/Friday 8:00AM-6:30PM</p>
                <p>Saturday 8:00AM-4:00PM</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          }
        >
          <div className="bg-slate-800 cursor-pointer bg-opacity-50 hover:bg-opacity-100 text-blue-500 flex-center w-[48px] h-[45px] rounded-full border border-slate-700 text-[10px] relative font-semibold">
            {`Open`}
            <span className="bg-green-600 w-[4px] h-[4px] absolute top-[17px] right-[2px] rounded-full"></span>
          </div>
        </Tooltip>
      </nav>
      <div className="flex-center gap-3">
        <IconVatar icon={<IoNotificationsOutline />} />
        <IconVatar icon={<TiMessages />} />
        <div className="h-6 w-[2px] bg-slate-700"></div>
        <div className="flex-center gap-2">
          <User
            avatarProps={{
              src: "/images/user.jpg",
            }}
            description="Product Designer"
            name="Jane Doe"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
