import React from "react";
import { shallow } from "enzyme";
import { Error } from "./Error";

describe("Test custom Error component", () => {
  it("Render empty Error", () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
  });
});
