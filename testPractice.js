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
  subtract(num1, num2) {
    if (!num1 || !num2) return "";
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      throw new TypeError("Not a number");
    }
    return num1 - num2;
  }
  divide(num1, num2) {
    if (!num1 || !num2) return "";
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      throw new TypeError("Not a number");
    }
    return num1 / num2;
  }
  multiply(num1, num2) {
    if (!num1 || !num2) return "";
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      throw new TypeError("Not a number");
    }
    return num1 * num2;
  }
}

export function caesarCipher(str, shift) {
  const strArray = str.split("");
  const lowercaseAlphabet = [...Array(26)].map((_, i) =>
    String.fromCharCode(i + 97)
  );
  let newArray = strArray.map((element) => {
    let tester = element.toLowerCase();
    let i = lowercaseAlphabet.indexOf(tester);
    if (i !== -1) {
      let j = (i + shift) % 26;
      if (element === element.toUpperCase()) {
        element = lowercaseAlphabet[j].toUpperCase();
      } else {
        element = lowercaseAlphabet[j];
      }
    }
    return element;
  });
  const shiftedStr = newArray.join("");
  return shiftedStr;
}
