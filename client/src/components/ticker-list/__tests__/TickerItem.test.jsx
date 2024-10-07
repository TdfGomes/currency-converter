import { render, screen } from "utils/test-utils";
import TickerItem from "../TickerItem";

test("should display the currency value for a given currency", () => {
  render(
    <TickerItem
      value={"123.234623123123"}
      currency={{ value: "currency-flag-1", label: "Currency Flag 1" }}
    />,
  );

  expect(screen.getByRole("listitem")).toHaveTextContent("123.2346");
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByText("Currency Flag 1")).toBeInTheDocument();
});
