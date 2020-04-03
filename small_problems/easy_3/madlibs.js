const readline = require('readline-sync');

function prompt(question) {
  console.log(`=> ` + question);
}

prompt('Enter a noun: ');
let noun = readline.question();

prompt('Enter a verb: ');
let verb = readline.question();

prompt('Enter an adjective: ');
let adj = readline.question();

prompt('Enter an adverb: ');
let adv = readline.question();

prompt(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!\n`);
prompt(`The ${adj} ${noun} ${verb}s ${adv} over the lazy dog.\n`);
prompt(`The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);