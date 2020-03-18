// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = rlSync.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = rlSync.question();
}

prompt("What's the second number?");
let number2 = rlSync.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = rlSync.question();
}

prompt("What operation would you like to use?\n1) Addition 2) Subtraction 3) Multiplication 4) Division");
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = rlSync.question();
}

let answer;
switch (operation) {
  case '1':
    answer = Number(number1) + Number(number2);
    break;
  case '2':
    answer = Number(number1) - Number(number2);
    break;
  case '3':
    answer = Number(number1) * Number(number2);
    break;
  case '4':
    answer = Number(number1) / Number(number2);
    break;
}

console.log(`The result is: ${answer}.`);