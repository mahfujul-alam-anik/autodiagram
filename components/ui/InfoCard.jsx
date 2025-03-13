import React from "react";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";

const InfoCard = ({ title, number, bgColor, bgOpacity, textColor }) => {
  // Convert hex color to RGBA if necessary
  const getRGBAColor = (hex, opacity) => {
    if (hex.startsWith("rgb")) return hex; // If already in rgb format, return as is

    let r = 0,
      g = 0,
      b = 0;

    // Handle hex colors
    if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16);
      g = parseInt(hex.substring(3, 5), 16);
      b = parseInt(hex.substring(5, 7), 16);
    } else if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    }

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div
      className="rounded-lg w-[140px] h-[110px] px-3 py-2 flex flex-col justify-between hover:scale-[103%] transition-all duration-200 bg-slate-700 bg-opacity-20 backdrop-blur-sm backdrop-brightness-200"
      // style={{
      //   backgroundColor: getRGBAColor(bgColor, bgOpacity),
      //   color: textColor,
      // }}
    >
      <h3 className="text-base capitalize">{title}</h3>
      <div className="flex">
        <h1 className="text-3xl font-medium">{number}</h1>
        <IoFileTrayStackedOutline />
      </div>
    </div>
  );
};

export default InfoCard;
