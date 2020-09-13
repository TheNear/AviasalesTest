import React from "react";
import { shallow } from "enzyme";
import { Loader } from "./Loader";

describe("Test custom Loader component", () => {
  it("Render empty Loader", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
