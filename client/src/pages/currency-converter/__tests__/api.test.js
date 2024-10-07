import { isNumber } from "../api";

test.each([
  { value: 23, expected: true },
  { value: 2.4567, expected: true },
  { value: "23.", expected: true },
  { value: "2.2343", expected: true },
  { value: " 2.2343", expected: true },
  { value: 0.004567, expected: true },
  { value: "foo", expected: false },
  { value: "2.23.43", expected: false },
])("should validate $value toBe $expected", ({ value, expected }) => {
  expect(isNumber(value)).toBe(expected);
});
