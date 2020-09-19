import React from "react";
import { shallow } from "enzyme";
import TicketsList from "./TicketsList";
import { ticketMock } from "../Ticket/ticketsMock";

describe("Test TicketsList component", () => {
  const ticketMockList = [ticketMock, ticketMock, ticketMock];

  it("Render empty TicketsList", () => {
    const wrapper = shallow(<TicketsList tickets={ticketMockList} />);
    expect(wrapper).toMatchSnapshot();
  });
});
