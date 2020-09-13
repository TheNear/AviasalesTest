import React from "react";
import { shallow } from "enzyme";
import CheckBox from "./CheckBox";

describe("Common Checkbox render", () => {
  it("Render empty Checkbox", () => {
    const wrapper = shallow(<CheckBox />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render Checkbox with props", () => {
    const wrapper = shallow(<CheckBox text="Check Box Title" name="check-box-name" />);
    expect(wrapper).toMatchSnapshot();
  });
});
