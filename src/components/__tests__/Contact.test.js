import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

import "@testing-library/jest-dom";

describe("Contact Us Page Test", () => {
  beforeAll(() => {
    console.log("before all");
  });

  beforeEach(() => {
    console.log("before each test ase");
  });

  // no difference betweem it and test
  it("Shoud load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Shoud load Buttin inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Shoud load input name inside Contact component", () => {
    render(<Contact />);

    const inputText = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputText).toBeInTheDocument();
  });

  test("Should load 2 input boxes", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox"); // textbox is input

    console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
  });
});
