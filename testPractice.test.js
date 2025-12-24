import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testPractice";

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

test("Checks reversing type error", () => {
  expect(() => reverseString(1)).toThrow(TypeError);
});

//Calculator testing
const calc = new calculator();
//addition
test("Adding two integers", () => {
  expect(calc.add(1, 2)).toBe(3);
});
test("Adding two floats", () => {
  expect(calc.add(1.4, 2.6)).toBeCloseTo(4.0);
});
test("Adding a float to an integer", () => {
  expect(calc.add(1.4, 2)).toBeCloseTo(3.4);
});
test("null entered in place of number, addition", () => {
  expect(calc.add(null, 3)).toBe("");
});
test("Adding with a NaN", () => {
  expect(() => calc.add("burgers and fries", 2)).toThrow(TypeError);
});
//subtraction
test("Subtracting two integers", () => {
  expect(calc.subtract(1, 2)).toBe(-1);
});
test("Subtracting two floats", () => {
  expect(calc.subtract(1.4, 2.6)).toBeCloseTo(-1.2);
});
test("Subtracting an integer from a float", () => {
  expect(calc.subtract(1.4, 2)).toBeCloseTo(-0.6);
});
test("null entered in place of number, subtraction", () => {
  expect(calc.subtract(null, 3)).toBe("");
});
test("Subtraction with a NaN", () => {
  expect(() => calc.subtract("burgers and fries", 2)).toThrow(TypeError);
});
//Division
test("Dividing two integers", () => {
  expect(calc.divide(1, 2)).toBe(0.5);
});
test("Dividing two floats", () => {
  expect(calc.divide(1.4, 2.6)).toBeCloseTo(0.53846);
});
test("Dividing a float by an integer", () => {
  expect(calc.divide(1.4, 2)).toBeCloseTo(0.7);
});
test("null entered in place of number, division", () => {
  expect(calc.divide(null, 3)).toBe("");
});
test("Division with a NaN", () => {
  expect(() => calc.divide("burgers and fries", 2)).toThrow(TypeError);
});
//Multiplication
test("Multiplying two integers", () => {
  expect(calc.multiply(2, 2)).toBe(4);
});
test("Multiplying two floats", () => {
  expect(calc.multiply(1.4, 2.6)).toBeCloseTo(3.64);
});
test("Multiplying a float by an integer", () => {
  expect(calc.multiply(1.4, 2)).toBeCloseTo(2.8);
});
test("null entered in place of number, multiplication", () => {
  expect(calc.multiply(null, 3)).toBe("");
});
test("Division with a NaN", () => {
  expect(() => calc.multiply("burgers and fries", 2)).toThrow(TypeError);
});

//caesarCipher testing
test("Basic test", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});
test("Wrapping test", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("Case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("Punctuation test", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
test("Empty string", () => {
  expect(caesarCipher("", 3)).toBe("");
});

//analyzeArray testing
test("Basic test analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
