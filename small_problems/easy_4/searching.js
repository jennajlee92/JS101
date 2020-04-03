const readline = require('readline-sync');

function prompt(string) {
  console.log(`=> ${string}`);
}

let array = [];

prompt('Enter the 1st number: ');
let first = readline.question();

prompt('Enter the 2nd number: ');
let second = readline.question();

prompt('Enter the 3rd number: ');
let third = readline.question();

prompt('Enter the 4th number: ');
let fourth = readline.question();

prompt('Enter the 5th number: ');
let fifth = readline.question();

prompt('Enter the last number: ');
let sixth = readline.question();

array.push(first, second, third, fourth, fifth);

let answer = (array.includes(sixth)) ? 'appears' : 'does not appear';

return console.log(`The number ${sixth} ${answer} in ${array.join(',')}.`);