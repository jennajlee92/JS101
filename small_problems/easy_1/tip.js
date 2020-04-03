let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill?\n'));
let tipRate = Number(rlSync.question('What is the tip percentage?\n'));

let tip = bill * (tipRate / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${total.toFixed(2)}`);
