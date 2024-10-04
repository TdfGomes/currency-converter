import { render, screen } from "utils/test-utils";
import CurrencyList from "..";

const currencies = [
  { value: 123.123, currency: { value: "flag-1", label: "Flag1" } },
  { value: 321.103, currency: { value: "flag-2", label: "Flag2" } },
  { value: 452.023, currency: { value: "flag-3", label: "Flag3" } },
];

const props = {
  isLoading: false,
  fallbackText: "Enter an amount to check the rates.",
  currencies,
};

test("should display a list of currencies", () => {
  render(<CurrencyList {...props} />);

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(currencies.length);
});

test("when no currencies are available should display a fallback text", () => {
  render(<CurrencyList {...props} currencies={undefined} />);

  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  expect(screen.getByText(props.fallbackText)).toBeInTheDocument();
});

test("when loading should display a spinner", () => {
  render(<CurrencyList {...props} currencies={[]} isLoading />);

  expect(screen.queryByRole("list")).not.toBeInTheDocument();
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);

  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
