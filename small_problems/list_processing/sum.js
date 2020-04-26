/*
Pseudocode:
input: positive integer
output: sum of positive integer's digits

*/

function sum(integer) {
  return String(integer).split('').reduce((acc, curr) => acc + Number(curr), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45