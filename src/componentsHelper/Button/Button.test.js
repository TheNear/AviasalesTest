import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Common Button render", () => {
  it("Render empty button", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render inactive success button", () => {
    const wrapper = shallow(<Button text="SUCCESS" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render active reject button", () => {
    const wrapper = shallow(<Button text="REJECT" active />);
    expect(wrapper).toMatchSnapshot();
  });
});
