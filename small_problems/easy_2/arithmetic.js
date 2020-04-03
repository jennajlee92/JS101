let rlSync = require('readline-sync');

let integer1 = Number(rlSync.question('Enter the first number:\n'));
let integer2 = Number(rlSync.question('Enter the second number:\n'));

console.log(`${integer1} + ${integer2} = ${integer1 + integer2}`);
console.log(`${integer1} - ${integer2} = ${integer1 - integer2}`);
console.log(`${integer1} * ${integer2} = ${integer1 * integer2}`);
console.log(`${integer1} / ${integer2} = ${integer1 / integer2}`);
console.log(`${integer1} % ${integer2} = ${integer1 % integer2}`);
console.log(`${integer1} ** ${integer2} = ${integer1 ** integer2}`);
