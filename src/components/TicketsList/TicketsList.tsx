import React from "react";
import style from "./TecketsList.module.css";
import { Loader } from "../../componentsHelper/Loader/Loader";
import { Error } from "../../componentsHelper/Error/Error";
import { ITicketItem, Ticket } from "../Ticket/Ticket";

interface ITicketsList {
  tickets: Array<ITicketItem>;
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
  const convertPrice = (number: number): string => {
    return new Intl.NumberFormat("ru-RU").format(number);
  };

  return (
    <ul className={style.tickets}>
      {isLoading && <Loader />}
      {!isLoading && hasError && <Error refreshTicketsList={refreshTicketsList} />}
      {tickets.map((ticket: ITicketItem) => (
        <Ticket
          key={`${ticket.price}${ticket.segments[0].date}${ticket.carrier}`}
          ticket={ticket}
          convertPrice={convertPrice}
        />
      ))}
    </ul>
  );
};

export default TicketsList;
