"use client";

import { sidebarItems } from "@/constant/nav";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BiSolidDashboard } from "react-icons/bi";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="border-r border-slate-700 w-[210px] block">
      <div className="fixed top-0 left-0 w-[180px]">
        <div className="flex-center w-full h-[78px] border-b border-slate-700">
          <Image
            src="/images/bardhi-logo.png"
            alt="user"
            width={65}
            height={65}
            className="rounded-sm cursor-pointer h-auto m-auto"
          />
        </div>
        <div className="h-[85vh] overflow-y-auto sidebar">
          <ul className="col-flex gap-1">
            <li className="text-[14px] capitalize px-2 pt-2">
              <Link
                href={`/`}
                className={`flex items-center gap-3 px-2 pl-5 py-[6px] hover:bg-[#ff6600] hover:text-black transition-all duration-300  border-2 border-[#ff6600] mt-2 mb-1 rounded-full ${
                  pathname === "/" && "bg-primary text-black"
                }`}
              >
                <span className="text-lg">
                  <BiSolidDashboard />
                </span>
                <span>{`Dashboard`}</span>
              </Link>
            </li>

            {sidebarItems.map((item, index) =>
              item.sectionName ? (
                <li
                  key={index}
                  className="text-[10px] uppercase border-t border-slate-700 text-opacity-80 px-2 py-[6px] font-semibold text-slate-400 mt-3 first:border-none"
                >
                  <p className="mt-3 mb-1">{item.name}</p>
                </li>
              ) : (
                <li key={index} className="text-[12px] capitalize">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 pl-5 py-2 hover:bg-slate-200 hover:text-black transition-all duration-300 hover:scale-x-105 ${
                      pathname === item.href ? "bg-slate-200 text-black" : ""
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
