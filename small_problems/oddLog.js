// Log all odd numbers from 1-99, inclusive, on separate lines

/*

function logOdd() {
  for (let n = 1; n <= 99; n += 2) {
    console.log(n);
  }
}

logOdd();

*/

let n = 1;
while (n < 100) {
  console.log(n);
  n += 2;
}

function logOddUntil(number) {
  for (let n = 1; n <= number; n += 2) {
    console.log(n);
  }
}

logOddUntil(101);