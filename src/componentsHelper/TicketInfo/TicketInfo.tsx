import React from "react";
import style from "./TicketInfo.module.css";

interface ITicketInfo {
  title: string;
  text?: string;
}

const TicketInfo: React.FC<ITicketInfo> = ({ title, text }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.text}>{text || `- / -`}</div>
    </div>
  );
};

export default TicketInfo;
