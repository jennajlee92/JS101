// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let rlSync = require('readline-sync');
let playAgain = 'y';
let language = 'english';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

const MESSAGES = {
  greeting: {
    english: 'Welcome to Calculator!',
    korean: '게산기에서 환영합니다'
  },
  firstNum: {
    english: "What's the first number?",
    korean: '첫 번호를 입력해주세요'
  },
  secondNum: {
    english: "What's the second number?",
    korean: '두번째 번호를 입력해주세요'
  },
  invalidNum: {
    english: "Hmm... that doesn't look like a valid number.",
    korean: '글쌔요... 번호가 아닌거같네요.'
  },
  operationQuestion: {
    english: 'What operation would you like to use?\n1) Add 2) Subtract 3) Multiply 4) Divide',
    korean: '어떤 계산을 하고싶나요?\n1) 더하기 2) 감하기 3) 곱하기 4) 나누기'
  },
  calculateAgain: {
    english: 'Would you like to perform another operation? (y/n)',
    korean: '다시하고싶나요? (y=예, n=아니요)'
  }
}

prompt(MESSAGES.greeting[language]);

do {
prompt(MESSAGES.firstNum[language]);
let number1 = rlSync.question();

while (invalidNumber(number1)) {
  prompt(MESSAGES.invalidNum[language]);
  number1 = rlSync.question();
}

prompt(MESSAGES.secondNum[language]);
let number2 = rlSync.question();

while (invalidNumber(number2)) {
  prompt(MESSAGES.invalidNum[language]);
  number2 = rlSync.question();
}

prompt(MESSAGES.operationQuestion[language]);
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

prompt(`The result is: ${answer}.`);
prompt(MESSAGES.calculateAgain[language]);
playAgain = rlSync.question();

} while (playAgain === 'y');