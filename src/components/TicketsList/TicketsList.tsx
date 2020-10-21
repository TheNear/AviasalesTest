import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./TecketsList.module.css";
import { Loader } from "../../componentsHelper/Loader/Loader";
import { Error } from "../../componentsHelper/Error/Error";
import { Ticket } from "../Ticket/Ticket";
import { ITicketItem } from "../../types/tickets";
import { RootState } from "../../types/redux";
import { getTickets } from "../../redux/tickets/action";

const TicketsList: React.FC = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.list);
  const isFetching = useSelector((state: RootState) => state.tickets.isFetchingTickets);
  const error = useSelector((state: RootState) => state.tickets.error);

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
