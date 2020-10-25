import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./TecketsList.module.css";
import { Loader } from "../../componentsHelper/Loader/Loader";
import { Error } from "../../componentsHelper/Error/Error";
import { Ticket } from "../Ticket/Ticket";
import { ITicketItem } from "../../types/tickets";
import { getTickets } from "../../redux/tickets/action";
import { useTickets } from "../../hooks/useTickets";

const TicketsList: React.FC = () => {
  const dispatch = useDispatch();
  const { tickets, error, isFetching } = useTickets();

  const getTicketsList = useCallback(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    getTicketsList();
  }, [getTicketsList]);

  return (
    <ul className={style.tickets}>
      {isFetching && <Loader />}
      {!isFetching && error && <Error refreshTicketsList={getTicketsList} />}
      {tickets.slice(0, 5).map((ticket: ITicketItem) => (
        <Ticket
          key={`${ticket.price}${ticket.segments[0].date}${ticket.carrier}`}
          ticket={ticket}
        />
      ))}
    </ul>
  );
};

export default TicketsList;
