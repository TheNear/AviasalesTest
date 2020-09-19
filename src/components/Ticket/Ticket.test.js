import React from "react";
import { shallow } from "enzyme";
import { Ticket } from "./Ticket";
import { ticketMock } from "./ticketsMock";

describe("Test Ticket component", () => {
  it("Render empty Ticket", () => {
    const wrapper = shallow(<Ticket ticket={ticketMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
