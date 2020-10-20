import { ITicketItem } from "../../types/tickets";

const ticketMock: ITicketItem = {
  price: 18204,
  carrier: "S7",
  segments: [
    {
      origin: "HKT",
      destination: "HKT",
      date: "2020-10-13T13:46:00.000Z",
      stops: ["SHA", "DXB", "HKG"],
      duration: 1544,
    },
    {
      origin: "HKT",
      destination: "HKT",
      date: "2020-10-13T13:46:00.000Z",
      stops: ["SHA", "DXB", "HKG"],
      duration: 1944,
    },
  ],
};

export { ticketMock };
