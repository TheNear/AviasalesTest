import React from "react";
import { shallow } from "enzyme";
import CheckBox from "./CheckBox";

describe("Common Checkbox render", () => {
  it("Render empty Checkbox", () => {
    const checkbox = shallow(<CheckBox />);
    console.log(checkbox.debug());
    expect(checkbox).toMatchSnapshot();
  });

  it("Render Checkbox with props", () => {
    const checkbox = shallow(<CheckBox text="Check Box Title" name="check-box-name" />);
    console.log(checkbox.debug())
    expect(checkbox).toMatchSnapshot();
  });
});
