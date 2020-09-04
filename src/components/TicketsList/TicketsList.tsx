import React from "react";
import style from "./TecketsList.module.css";
import Ticket from "../Ticket/Ticket";
import Loader from "../../componentsHelper/Loader/Loader";

interface ITicketsList {
  isLoading: boolean;
}

const TicketsList: React.FC<ITicketsList> = ({ isLoading }) => {
  return (
    <ul className={style.tickets}>
      {isLoading && <Loader />}
      <Ticket />
      <Ticket />
      {/* <Ticket /> */}
    </ul>
  );
};

export default TicketsList;
