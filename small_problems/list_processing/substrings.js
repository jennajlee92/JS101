/*
Pseudocode:
input: string
output: array of all substrings of a string
*/

function substringsAtStart(string) {
  let array = [];
  let indexEnd = 1;

  while (string.length > array.length) {
    array.push(string.slice(0, indexEnd));
    indexEnd += 1;
  }

  return array;
}

function substrings(string) {
  let array = [];
  let indexStart = 0;

  while (indexStart < string.length) {
    array.push(...substringsAtStart(string.slice(indexStart)));
    indexStart += 1;
  }

  console.log(array);
}

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]