/*
Algorithm:
make string into array of digit strings
create object with string keys and digit values
look up value in object with a for loop
*/

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let array = string.split('').map(digit => DIGITS[digit]);
  let answer = 0;
  array.forEach(digit => answer = (answer * 10) + digit);
  return answer;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true