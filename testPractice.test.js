import { capitalize, reverseString } from "./testPractice";

//Capitalize testing
test("Checks uncapitalized word", () => {
  expect(capitalize("paris")).toBe("Paris");
});

test("Checks already capitalized word", () => {
  expect(capitalize("Paris")).toBe("Paris");
});

test("Checks uncapitalized sentence", () => {
  expect(capitalize("paris is a city in France")).toBe(
    "Paris is a city in France"
  );
});

test("Checks null entry", () => {
  expect(capitalize(null)).toBe("");
});

test("Checks type error", () => {
  expect(() => capitalize(1)).toThrow(TypeError);
});

//reverseString testing
test("Reverses basic string", () => {
  expect(reverseString("We are testing now")).toBe("won gnitset era eW");
});

test("Reverses long string", () => {
  expect(
    reverseString(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )
  ).toBe(
    ".murobal tse di mina tillom tnuresed aiciffo iuq apluc ni tnus ,tnediorp non tatadipuc taceacco tnis ruetpecxE .rutairap allun taiguf ue erolod mullic esse tilev etatpulov ni tiredneherper ni rolod eruri etua siuD .tauqesnoc odommoc ae xe piuqila tu isin sirobal ocmallu noitaticrexe durtson siuq ,mainev minim da mine tU .auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des ,tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL"
  );
});

test("Reverses short string", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("Checks reversing null error", () => {
  expect(() => reverseString(1)).toThrow(TypeError);
});
