import { render, screen } from "utils/test-utils";
import CurrencyLabel from "..";

test("should display a given label with an image", () => {
  render(<CurrencyLabel value={{ value: "currency-flag-1", label: "Currency Flag 1" }} />);

  expect(screen.getByAltText("img-for-currency-flag-1")).toBeInTheDocument();
  expect(screen.getByText("Currency Flag 1")).toBeInTheDocument();
});
