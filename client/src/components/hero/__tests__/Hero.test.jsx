import { render, screen } from "utils/test-utils";
import Hero from "..";

test("Should display a hero section with a given content", () => {
  render(<Hero title="This is Title" subTitle="This is subTitle" />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("This is Title");
  expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("This is subTitle");
});
