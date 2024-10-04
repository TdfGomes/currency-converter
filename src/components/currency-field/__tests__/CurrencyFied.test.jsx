import { render, screen } from "utils/test-utils";
import CurrencyField from "../index";

const mockOnChangeAmount = jest.fn();
const mockCurrencyChange = jest.fn();

const props = {
  amount: "",
  currency: "",
  currencies: [
    { label: "Currency 1", value: "currency-1" },
    { label: "Currency 2", value: "currency-2" },
  ],
  onChangeAmount: mockOnChangeAmount,
  onCurrencyChange: mockCurrencyChange,
};

test("change events should be called", async () => {
  const { user } = render(<CurrencyField {...props} />);

  await user.type(screen.getByRole("textbox"), "14.00");

  await user.click(screen.getByRole("combobox"));
  await user.click(screen.getByRole("option", { name: "Currency 2" }));

  expect(mockOnChangeAmount).toHaveBeenLastCalledWith(
    expect.objectContaining({ target: expect.objectContaining({ value: expect.any(String) }) }),
  );
  expect(mockCurrencyChange).toHaveBeenCalledWith("currency-2");
});
