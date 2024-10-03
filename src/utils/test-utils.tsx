import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function customRender(ui: ReactElement, options?: RenderOptions) {
  const user = userEvent.setup();

  return { user, ...render(ui, { ...options }) };
}

export * from "@testing-library/react";
export { customRender as render };
