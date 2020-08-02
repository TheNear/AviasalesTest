import React from "react";
import style from "./TecketsList.module.css";
import Ticket from "../Ticket/Ticket";

function TicketsList(): JSX.Element {
  return (
    <ul className={style.tickets}>
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
}

export default TicketsList;
