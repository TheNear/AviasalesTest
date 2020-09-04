import React from "react";
import TicketInfo from "../../componentsHelper/TicketInfo/TicketInfo";
import style from "./Ticket.module.css";

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
