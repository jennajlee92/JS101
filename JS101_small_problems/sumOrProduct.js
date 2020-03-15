let rlSync = require('readline-sync');

let integer = Number(rlSync.question('Please enter an integer greater than 0:\n'));
let sumOrProduct = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

let n = 1;
let answer;
if (sumOrProduct === 's') {
  for (answer = 0; n <= integer; n += 1) {
    answer += n;
  }

  console.log(`The sum of the integers between 1 and ${integer} is ${answer}.`);
} else {
  for (answer = 1; n <= integer; n += 1) {
    answer *= n;
  }

  console.log(`The product of the integers between 1 and ${integer} is ${answer}.`);
}