import { render, screen } from "@testing-library/react";
import Contact from "../commonFiles/Contact";
import "@testing-library/jest-dom";

// Grouping Test cases mannage in describe like below 
describe("Contact us page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load button_name inside Contact component", () => {
    render(<Contact />);

    const buttonName = screen.getByText("Submit");
    //Assertion
    expect(buttonName).toBeInTheDocument();
  });

  test("Should load input placeholder name inside Contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("enter your message");
    expect(input).toBeInTheDocument();
  });
});

// Test cases how to mannage with below code 
// For check multiple input boxes then use getAllByRole and check length also
test("Should load 3 input boxes inside Contact component", () => {
  // render something
  render(<Contact />);
  // quering something
  const inputBoxes = screen.getAllByRole("textbox");
  // console.log(inputBoxes.length); // 3
  // Assertion something
  expect(inputBoxes.length).toBe(3); // successfully run
  // expect(inputBoxes.length).not.toBe(2); // successfully run
});
