import { render } from "utils/test-utils";
import { useSdk, SdkProvider } from "..";

const Wrapper = ({ children }) => {
  return <SdkProvider>{children}</SdkProvider>;
};

const DummyComponent = () => {
  const sdk = useSdk();

  return <code>{JSON.stringify(sdk)}</code>;
};

beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  jest.clearAllMocks();
});

test("should trhow an error when it's not wrapped by the provider", () => {
  expect(() => render(<DummyComponent />)).toThrow(
    new Error("useSdk must be used withing the SdkContext Provider"),
  );
});

test("should return the sdk when wrapped by the provider", () => {
  const { container } = render(<DummyComponent />, { wrapper: Wrapper });

  expect(container).not.toBeNull();
});
