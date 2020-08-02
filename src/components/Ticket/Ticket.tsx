import React from "react";
import TicketInfo from "../../componentsHelper/TicketInfo/TicketInfo";
import style from "./Ticket.module.css";

const Ticket: React.FC = () => {
  return (
    <li className={style.ticket}>
      <div className={style.price}>13 400 P</div>
      <img
        className={style.image}
        src="http://pics.avs.io/99/36/S7.png"
        alt="airport"
      />
      <TicketInfo />
      <TicketInfo />
      <TicketInfo />
      <TicketInfo />
      <TicketInfo />
      <TicketInfo />
    </li>
  );
};

export default Ticket;
