import React from "react";
import { shallow } from "enzyme";
import Filter from "./Filter";

describe("Test Filter component", () => {
  it("Render empty Filter", () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper).toMatchSnapshot();
  });
});
