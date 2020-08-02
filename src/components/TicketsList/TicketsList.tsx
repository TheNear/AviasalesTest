import React from "react";
import style from "./TecketsList.module.css";
import Ticket from "../Ticket/Ticket";

const TicketsList: React.FC = () => {
  return (
    <ul className={style.tickets}>
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
};

export default TicketsList;
