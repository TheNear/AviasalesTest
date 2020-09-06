import React from "react";
import TicketInfo from "../../componentsHelper/TicketInfo/TicketInfo";
import commonStyle from "../../assets/css/common.module.css";
import style from "./Ticket.module.css";
import { stopsFormat, convertPrice, getTravelTime, getLandingTime } from "./TicketsFormat";

export interface ITicketItem {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
}

interface ITicket {
  ticket: ITicketItem;
}

const Ticket: React.FC<ITicket> = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  const {
    origin: from1,
    destination: to1,
    date: date1,
    stops: stops1,
    duration: duration1,
  } = segments[0];
  const {
    origin: from2,
    destination: to2,
    date: date2,
    stops: stops2,
    duration: duration2,
  } = segments[1];

  console.log(ticket);

  return (
    <li className={`${style.ticket} ${commonStyle.box}`}>
      <div className={style.price}>{convertPrice(price)} P</div>
      <img className={style.image} src={`http://pics.avs.io/99/36/${carrier}.png`} alt="airport" />
      <TicketInfo title={`${from1} - ${to1}`} text={getLandingTime(date1, duration1)} />
      <TicketInfo title="В пути" text={getTravelTime(duration1)} />
      <TicketInfo title={stopsFormat[stops1.length]} text={stops1.join()} />
      <TicketInfo title={`${from2} - ${to2}`} text={getLandingTime(date2, duration2)} />
      <TicketInfo title="В пути" text={getTravelTime(duration2)} />
      <TicketInfo title={stopsFormat[stops2.length]} text={stops2.join()} />
    </li>
  );
};

export { Ticket };
