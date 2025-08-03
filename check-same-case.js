// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b) {
  const lowerCaseA = a.toLowerCase();
  const lowerCaseB = b.toLowerCase();
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();

  if (lowerCaseA === upperCaseA || lowerCaseB === upperCaseB) {
    return -1;
  } else if (
    (a === lowerCaseA && b === lowerCaseB) ||
    (a === upperCaseA && b === upperCaseB)
  ) {
    return 1;
  }

  return 0;
}

const a = "a";
const b = "b";

console.log(sameCase(a, b));
