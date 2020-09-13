import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Test Header component", () => {
  it("Render empty Header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
