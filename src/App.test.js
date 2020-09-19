import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Test App", () => {
  it("Render app", () => {
    const wrapper = shallow(<App />);
    const container = wrapper.find(".container");
    expect(container).toExist();
  });
});
