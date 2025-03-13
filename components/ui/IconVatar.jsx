import React from "react";

const IconVatar = ({ icon }) => {
  return (
    <div className="bg-slate-800 cursor-pointer bg-opacity-50 hover:bg-opacity-100 text-primary flex-center w-[40px] h-[40px] rounded-full border border-slate-700 text-lg">
      {icon}
    </div>
  );
};

export default IconVatar;
