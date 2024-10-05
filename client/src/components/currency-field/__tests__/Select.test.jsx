import { render, screen } from "utils/test-utils";
import Select from "../Select";

const mockOnChange = jest.fn();
const mockedOptions = [
  { value: "label-1", label: "Label 1" },
  { value: "label-2", label: "Label 2" },
];

const props = {
  value: "",
  name: "mocked-input",
  onChange: mockOnChange,
  options: mockedOptions,
};

test("should be able to display a given list of options", async () => {
  const { user } = render(<Select {...props} />);

  expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

  expect(screen.getByRole("combobox")).toBeInTheDocument();

  await user.click(screen.getByRole("combobox"));

  expect(screen.getByRole("listbox")).toBeInTheDocument();

  expect(screen.getAllByRole("option")).toHaveLength(props.options.length);
});

test("should be able to display the default value", async () => {
  render(<Select {...props} value="label-1" />);

  expect(screen.getByRole("combobox")).toHaveTextContent("Label 1");
});

test("should be able to display the selected value", async () => {
  const { user } = render(<Select {...props} />);

  expect(screen.getByRole("combobox")).toHaveTextContent("");

  await user.click(screen.getByRole("combobox"));

  await user.click(screen.getByRole("option", { name: /Label 2/ }));

  expect(mockOnChange).toHaveBeenCalledWith("label-2");

  expect(screen.getByRole("combobox")).toHaveTextContent(/Label 2/);
});
