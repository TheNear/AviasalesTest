export interface ITicketItemSegment {
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
}

export interface ITicketItem {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: ITicketItemSegment[];
}

export interface IApiResponseTickets {
  tickets: ITicketItem[];
  stop: boolean;
}

export interface IApiResonseID {
  searchId: string;
}
