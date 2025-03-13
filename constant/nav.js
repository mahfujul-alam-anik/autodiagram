import { FiUpload } from "react-icons/fi";
import { LuFilePlus2 } from "react-icons/lu";
import { LuArchive } from "react-icons/lu";
import { PiInvoice } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import { LuTextSearch } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFiles } from "react-icons/bs";

export const sidebarItems = [
  {
    name: "File Service",
    sectionName: true,
  },
  {
    name: "upload file",
    href: "/upload-file",
    icon: <LuFilePlus2 />,
  },
  {
    name: "my files",
    href: "/my-files",
    icon: <BsFiles />,
  },
  {
    name: "Tickets",
    href: "/tickets",
    icon: <LuArchive />,
  },
  {
    name: "Financial",
    sectionName: true,
  },
  {
    name: "invoices",
    href: "#",
    icon: <PiInvoice />,
  },

  {
    name: "tools",
    sectionName: true,
  },
  {
    name: "vehicle stats",
    href: "#",
    icon: <FaChartBar />,
  },
  {
    name: "DTC search",
    href: "#",
    icon: <LuTextSearch />,
  },

  {
    name: "misc",
    sectionName: true,
  },
  {
    name: "Pricing",
    href: "#",
    icon: <MdOutlinePriceChange />,
  },
  {
    name: "Information",
    href: "#",
    icon: <LuInfo />,
  },

  {
    name: "settings",
    sectionName: true,
  },
  {
    name: "portal users",
    href: "#",
    icon: <FiUsers />,
  },
  {
    name: "settings",
    href: "#",
    icon: <IoSettingsOutline />,
  },

  {
    name: "logout",
    sectionName: true,
  },
  {
    name: "logout",
    href: "#",
    icon: <AiOutlineLogout />,
  },
];
