import { render, screen } from "utils/test-utils";
import Input from "../Input";

const mockOnChange = jest.fn();

const props = {
  defaultValue: "",
  value: "",
  name: "mocked-input",
  onChange: mockOnChange,
};

test("should be able to type an amount", async () => {
  const { user } = render(<Input {...props} defaultValue="123" />);

  expect(screen.getByRole("textbox")).toHaveValue("123");

  await user.clear(screen.getByRole("textbox"));

  const mockedText = "9999";

  await user.type(screen.getByRole("textbox"), mockedText);

  // the extra call comes from the clear event
  expect(mockOnChange).toHaveBeenCalledTimes(mockedText.length + 1);
});
