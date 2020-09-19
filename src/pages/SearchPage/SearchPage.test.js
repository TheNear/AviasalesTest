import React from "react";
import { shallow } from "enzyme";
import SearchPage from "./SearchPage";

describe("Test SearchPage component", () => {
  it("Render empty SearchPage", () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
