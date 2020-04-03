let rlSync = require('readline-sync');

let username = rlSync.question('What is your name? ');

if (username[username.length - 1] === '!') {
  let name = username.slice(0, -1).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${username}.`);
}