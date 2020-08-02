import React from "react";
import style from "./TicketInfo.module.css";

const TicketInfo: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>В пути</div>
      <div className={style.text}>10:50 - 08:00</div>
    </div>
  );
};

export default TicketInfo;
