import React from "react";
import { render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";

describe("CheckBox", () => {
  it("render CheckBox component", () => {
    render(
      <CheckBox text="TextTest" name="checkbox-name" checked={false} clickHandler={() => {}} />
    );
    screen.debug();
    expect(screen.getByLabelText("TextTest")).toBeInTheDocument();
  });
});
