import Image from "next/image";
import React from "react";

const SingleNotice = ({
  isWarning = false,
  isDanger = false,
  isInfo = false,
  title,
  details,
}) => {
  var imageSrc = "";
  isWarning
    ? (imageSrc = "warning-sign.png")
    : isDanger
    ? (imageSrc = "danger-sign.png")
    : (imageSrc = "info-sign.png");

  return (
    <div
      className={`w-full h-auto py-5 ${isWarning && "bg-yellow-400"} ${
        isDanger && "bg-orange-500"
      } ${
        isInfo && "bg-teal-600"
      } shadow-lg rounded-lg text-slate-200 bg-opacity-30 backdrop-blur-sm backdrop-brightness-200 backdrop-contrast-150`}
    >
      <div className="px-5 border-b border-slate-800 border-opacity-100 pb-3 flex items-center gap-4">
        <Image
          src={`/images/${imageSrc}`}
          alt={imageSrc}
          width={100}
          height={100}
          className="object-contain w-[50px]"
        />
        <div className="w-[1px] h-[40px] bg-slate-800 rounded-md bg-opacity-100"></div>
        <h1 className=" text-base font-semibold">{title}</h1>
      </div>
      <div className="pt-3 px-5 text-sm">{details}</div>
    </div>
  );
};

export default SingleNotice;
