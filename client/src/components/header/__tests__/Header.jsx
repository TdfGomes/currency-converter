import { render, screen } from "utils/test-utils";
import Header from "..";

const mockOnLogin = jest.fn();
const props = {
  links: ["Link 1", "Link 2"],
  onLogin: mockOnLogin,
};

test("should be able to display links", () => {
  render(<Header {...props} />);

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getAllByRole("link")).toHaveLength(props.links.length);
});

test("onLogin should be called when button is clicked", async () => {
  const { user } = render(<Header {...props} />);

  await user.click(screen.getByRole("button"));

  expect(mockOnLogin).toHaveBeenCalledTimes(1);
});
