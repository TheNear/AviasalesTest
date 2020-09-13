import React from "react";
import { shallow } from "enzyme";
import SortControls from "./SortControls";

describe("Test SortControl component", () => {
  it("Render empty SortControls", () => {
    const wrapper = shallow(<SortControls />);
    expect(wrapper).toMatchSnapshot();
  });
});
