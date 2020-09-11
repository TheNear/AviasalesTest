import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Common Button render", () => {
  it("Render empty button", () => {
    const button = shallow(<Button />);
    expect(button).toMatchSnapshot();
  });

  it("Render inactive success button", () => {
    const button = shallow(<Button text="SUCCESS" />);
    expect(button).toMatchSnapshot();
  });

  it("Render active reject button", () => {
    const button = shallow(<Button text="REJECT" active />);
    expect(button).toMatchSnapshot();
  });
});
