/*
Pseudocode:
input: array of integers between 0 and 19
output: array of integers sorted based on the English word for each number

for each number, we'll convert it to its English word
  we need to iterate through the array - map would work well here
then we'll call sort on the whole array
then we need to convert it back to numbers
*/

let englishNum = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
]

function alphabeticNumberSort(array) {
  return array.map(num => englishNum[num]).sort().map(eng => englishNum.indexOf(eng));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]