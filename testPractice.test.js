import { capitalize } from "./testPractice";

test("Checks uncapitalized word", () => {
  expect(capitalize("paris")).toBe("Paris");
});
