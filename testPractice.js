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
