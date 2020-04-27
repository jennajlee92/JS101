/*
Pseudocode:
input: string
output: array of all palindromic substrings of the string, case sensitive + single characters != palindromes

first get all substrings of a string
check each substring to see if it's a palindrome
if it is, push it to the result array
return the result array
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

  return array;
}

function palindromes(word) {
  return substrings(word).filter(substring => substring.length > 1
    && substring === substring.split('').reverse().join(''));
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]