import { render, screen } from "utils/test-utils";
import TickerList from "..";

const tickers = [
  { value: "123.123", currency: { value: "flag-1", label: "Flag1" } },
  { value: "321.103", currency: { value: "flag-2", label: "Flag2" } },
  { value: "452.023", currency: { value: "flag-3", label: "Flag3" } },
];

const props = {
  isLoading: false,
  fallbackText: "Enter an amount to check the rates.",
  tickers,
};

test("should display a list of tickers", () => {
  render(<TickerList {...props} />);

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(tickers.length);
});

test("when no tickers are available should display a fallback text", () => {
  render(<TickerList {...props} tickers={undefined} />);

  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  expect(screen.getByText(props.fallbackText)).toBeInTheDocument();
});

test("when loading should display a spinner", () => {
  render(<TickerList {...props} tickers={[]} isLoading />);

  expect(screen.queryByRole("list")).not.toBeInTheDocument();
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);

  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
