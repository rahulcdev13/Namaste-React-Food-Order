import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../commonFiles/Header";
import { Provider } from "react-redux";
import appStore from "../reduxToolkit/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header components with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Assertion
  //   const loginButton = screen.getByRole("Button",{name:"Login"}); // if you want pass multiple possibility
  const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

test("Should render Header components with Cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Assertion
  const cartItem = screen.getByText("Cart (0 items)");
  expect(cartItem).toBeInTheDocument();
});

test("Should render Header components with Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Assertion
  // if you want only check 'Cart' text is there or not you can check using regex
  const cartName = screen.getByText(/Cart/);
  expect(cartName).toBeInTheDocument();
});

test("Should change Login to Logout on Click in Header Components", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Assertion for login logout button check
  const loginButton = screen.getByText("Login");
  fireEvent.click(loginButton);
  const logoutButton = screen.getByText("Logout");
  expect(logoutButton).toBeInTheDocument();
});
