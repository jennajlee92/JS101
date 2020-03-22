const DIGITS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

function integerToString(number) {
  let string = '';

  do {
    string = DIGITS[number % 10] + string;
    number = Math.floor(number / 10);
  } while (number > 0);

  return string;
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

function signedIntegerToString(number) {
  if (number < 0) {
    return '-' + integerToString(-number);
  } else if (number === 0) {
    return '0';
  } else {
    return '+' + integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");