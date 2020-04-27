/*
Pseudocode:
input: string
output: array of substrings that start from the beginning of the string, ordered from shortest to longest
*/

function substringsAtStart(string) {
  let array = [];
  let indexEnd = 1;

  while (string.length > array.length) {
    array.push(string.slice(0, indexEnd));
    indexEnd += 1;
  }

  console.log(array);
}

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]