// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  const strArr = str.split("");

  let reversed = [];
  for (i = strArr.length - 1; i >= 0; i--) {
    reversed.push(strArr[i]);
  }
  return reversed.join("");
}

console.log(solution("world"));
