import React from "react";
import style from "./TecketsList.module.css";
import { Loader } from "../../componentsHelper/Loader/Loader";
import { Error } from "../../componentsHelper/Error/Error";
import { Ticket } from "../Ticket/Ticket";
import { ITicketItem } from "../../types/tickets";

interface ITicketsList {
  tickets: ITicketItem[];
  isLoading: boolean;
  hasError: string;
  refreshTicketsList: () => void;
}

const TicketsList: React.FC<ITicketsList> = ({
  tickets,
  isLoading,
  hasError,
  refreshTicketsList,
}) => {
  return (
    <ul className={style.tickets}>
      {isLoading && <Loader />}
      {!isLoading && hasError && <Error refreshTicketsList={refreshTicketsList} />}
      {tickets.map((ticket: ITicketItem) => (
        <Ticket
          key={`${ticket.price}${ticket.segments[0].date}${ticket.carrier}`}
          ticket={ticket}
        />
      ))}
    </ul>
  );
};

export default TicketsList;
