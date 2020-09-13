import React from "react";
import { shallow } from "enzyme";
import TicketInfo from "./TicketInfo";

describe("Test custom TicketInfo component", () => {
  it("Render empty TicketInfo", () => {
    const wrapper = shallow(<TicketInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
