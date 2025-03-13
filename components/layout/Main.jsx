import React from "react";
import Header from "./Header";
import Image from "next/image";
import Sidebar from "./Sidebar";

// This is a base level component that give a plain board for any page which contains header and sidebar elements
const Main = ({ children }) => {
  return (
    <main className={`antialiased bg-gray-950 min-h-screen text-white`}>
      <div className="radial-bg"></div>
      <div className="relative z-10 flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <div className="px-5 py-6 pb-10 min-h-screen">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
