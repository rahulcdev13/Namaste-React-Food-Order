import { render, screen } from "@testing-library/react";
import RestaurantCardList from "../components/RestaurantCardList";
import {MOCK_DATA} from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should render RestaurantCardList Components with props data", () => {
  render(<RestaurantCardList restdetails={MOCK_DATA} />);
  // Assertion using props get and check data
  const name = screen.getByRole("Bebe Di Rasoi - Punjabi");
  expect(name).toBeInTheDocument();
});
