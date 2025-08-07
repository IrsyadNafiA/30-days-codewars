// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  const sum = arr.reduce((acc, curr) => acc + (curr < 0 ? 0 : curr), 0);
  return sum;
}

arr = [-7, -7, -7, -7];

console.log(positiveSum(arr));
