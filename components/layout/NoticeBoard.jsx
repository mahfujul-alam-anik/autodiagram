import { notice } from "@/constant/notice";
import React from "react";
import SingleNotice from "../ui/SingleNotice";

const NoticeBoard = () => {
  return (
    <div className="col-flex gap-4 w-[400px]">
      {notice.map((item, index) => (
        <SingleNotice {...item} key={index} />
      ))}
    </div>
  );
};

export default NoticeBoard;
