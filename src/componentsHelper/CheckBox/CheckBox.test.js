import React from "react";
import { shallow } from "enzyme";
import CheckBox from "./CheckBox";

const getCheckBox = (props) => shallow(<CheckBox {...props}/>);

const mockProps = {
  text: "Check Box Title",
  name: "check-box-name",
}

describe("Common Checkbox render", () => {
  it("Render empty Checkbox", () => {
    const checkbox = getCheckBox();
    expect(checkbox).toMatchSnapshot();
  });

  it("Render Checkbox with props", () => {
    const checkbox = getCheckBox(mockProps);
    expect(checkbox).toMatchSnapshot();
  });
});
