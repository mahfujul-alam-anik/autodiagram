import Image from "next/image";
import Link from "next/link";
import { HiOutlineTicket } from "react-icons/hi2";

// table dummy data
export const tableData = [
  {
    id: 414,
    vehicle: "BMW 1 Serie E87 2007-2011 120D 163hp",
    ecu: "Bosch EDC17CP02",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_414/bmw_bosch_edc17cp02_bench_fullbackup_410089890960111782060010270a0000_20250305125704_int_flash_Stage_1_Client_65_id_414.bin",
    tunedFile:
      "../../uploads/65/id_414/Btperformance_Stage1_Vmax_BMW_120D_163hp_EDC17CP02_SW509478.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out",
    date: "2025-03-05 14:58:47",
    status: "Completed",
  },
  {
    id: 413,
    vehicle: "AUDI Q8 2018-> 60 TFSI-E QUATTRO 462hp",
    ecu: "Other4",
    fileDescription: "Vmax - 0TokensOnly Options - 0.6Tokens",
    oriFile:
      "../../uploads/65/id_413/Audi_q8_2020_24_TC298TP_flash_Only_Options_Client_65_id_413.bin",
    tunedFile:
      "../../uploads/65/id_413/Btperformance_Vmax_Off_Audi_Q8_60TFSI_MG1CS008_SW10SW002435.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Vmax has been removed.",
    status: "Completed",
    date: "2025-03-03 13:18:04",
  },
  {
    id: 412,
    vehicle: "AUDI A6 C6 1997-2004 2.7 TDI 180hp",
    ecu: "Bosch EDC16CP34",
    fileDescription: "Stage 1 - 0.7Tokens",
    oriFile:
      "../../uploads/65/id_412/vag_bosch_edc16cp34_obd_maps_wauzzz4f38n169165_20250301110651_Stage_1_Client_65_id_412.bin",
    tunedFile:
      "../../uploads/65/id_412/Btperformance_Stage1_Audi_A6_2700TDI_180hp_SW391860.bin",
    files: "download",
    ticketStatus: "",
    message: "Stage 1 has been carried out.",
    status: "Pending",
    date: "2025-03-01 13:17:02",
  },
  {
    id: 411,
    vehicle: "VOLKSWAGEN Golf 5 2003-2008 1.9 TDI 105hp",
    ecu: "Bosch EDC16U1",
    fileDescription: "Stage 1 - 0.7Tokens",
    oriFile:
      "../../uploads/65/id_411/W_GOLF_5_1.9_BKC_MANUAL_105HP_EDC16U1__ext_flash_Stage_1_Client_65_id_411.bin",
    tunedFile:
      "../../uploads/65/id_411/Btperformance_Stage1_VW_Golf5_1900TDI_105hp_EDC16U1_SW371094.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out",
    status: "Cancelled",
    date: "2025-02-27 18:03:51",
  },
  {
    id: 413,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 4104,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 4160,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Stage 1",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 4107,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 4180,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 4190,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 41930,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 41230,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 41046,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 35410,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 41860,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 41940,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 41030,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
  {
    id: 40510,
    vehicle: "BMW 5 Serie F10/11 2010-2016 520D 184hp",
    ecu: "Bosch EDC17C50",
    fileDescription: "Stage 1 - 0.8Tokens",
    oriFile:
      "../../uploads/65/id_410/bmw_bosch_edc17c50_fxx_bench_fullbackup_4180060713409396740800101114ff00_20250220120625_int_flash_Stage_1_Client_65_id_410.bin",
    tunedFile:
      "../../uploads/65/id_410/Btperformance_Stage1_BMW_520D_184hp_EDC17C50_SW545281.bin",
    files: "download",
    ticketStatus: "New Ticket",
    message: "Stage 1 has been carried out.",
    status: "Completed",
    date: "2025-02-20 14:15:39",
  },
];
