const readline = require('readline-sync');

function prompt(sentence) {
  console.log(`=> ${sentence}`);
}

prompt('What is your age? ');
let age = readline.question();

prompt('At what age would you like to retire? ');
let retireAge = readline.question();

let currentYear = new Date().getFullYear();
let workToGo = Number(retireAge - age);
let yearOfRetirement = currentYear + workToGo;

console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}.\nYou have only ${workToGo} years of work to go!`);