// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let rlSync = require('readline-sync');

console.log('Welcome to Calculator!');
let number1 = Number(rlSync.question('What is the first number?\n'));
let number2 = Number(rlSync.question('What is the second number?\n'));
let operation = rlSync.question('What operation should I perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n');

let answer;
switch (operation) {
  case '1':
    answer = number1 + number2;
    break;
  case '2':
    answer = number1 - number2;
    break;
  case '3':
    answer = number1 * number2;
    break;
  case '4':
    answer = number1 / number2;
}

console.log(`The result is ${answer}.`);