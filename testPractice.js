export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  const strArray = str.split("");
  strArray.reverse();
  const reversedStr = strArray.join("");
  return reversedStr;
}

export class calculator {
  constructor() {}
  add(num1, num2) {
    if (!num1 || !num2) return "";
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      throw new TypeError("Not a number");
    }
    return num1 + num2;
  }
}
