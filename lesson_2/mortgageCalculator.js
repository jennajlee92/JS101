// Need: loan amount, Annual Percentage Rate (APR), duration

// Calculate: monthly interest rate, loan duration in months
// APR to monthly interest rate: Math.pow((1 + r), (1/12)) - 1
// Note that r = compound interest rate in decimals

// M = P * (J/(1 - ((1 + J)**(-N))))
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

console.log('Welcome to the mortgage calculator!');

function convertAprToMonthly(apr) {
  let decimalRate = parseFloat(apr) / 100;
  return Math.pow((1 + decimalRate), (1 / 12)) - 1;
}

function convertLoanToMonths(string) {
  let arrayDuration = string.split(' ');

  if (arrayDuration.length === 4) {
    let yearToMonth = Number(arrayDuration[0]) * 12;
    return yearToMonth + Number(arrayDuration[2]);
  } else if (arrayDuration[1] === 'y') {
      let yearToMonth = Number(arrayDuration[0]) * 12;
      return yearToMonth;
  } else {
    return Number(arrayDuration[0]);
  }
}

let again = 'y';

while (again === 'y') {
let readline = require('readline-sync');
let monthlyPayment;

let principal = Number(readline.question("What is the total loan amount?\nex) 2500\n"));

while ((principal <= 0) || !principal) {
  console.log("The amount must be a -number- greater than 0.");
  principal = Number(readline.question("What is the total loan amount?\nex) 2500\n"));
}

let apr = readline.question("What's the APR? ex) 5%\n");

while (!apr.includes('%')) {
  console.log("Make sure to use the correct format.");
  apr = readline.question("What's the APR? ex) 5%\n");
}

let monthlyInterest = convertAprToMonthly(apr);

let loanDuration = readline.question("What is the loan duration?\nex 1) 3 y\nex 2) 2 y 6 m\nex 3) 10 m\n");

/* Could not get this to work.
while (!((loanDuration.split(' '))[1] === 'y') ||
      !((loanDuration.split(' '))[1] === 'm')) {
  console.log("The answer must be in y or m.");
  console.log("What is the loan duration?\n
              ex 1) 3 y\nex 2) 2 y 6 m\nex 3) 10 m\n");
  loanDuration = readline.question();
}
*/

let loanDurationMonths = convertLoanToMonths(loanDuration);

monthlyPayment =
  (principal *
    (monthlyInterest /
      (1 - Math.pow((1 + monthlyInterest),(-loanDurationMonths))))).toFixed(2);

console.log(`Your monthly payment is: $${monthlyPayment}.`);

console.log('Another calculation? (y/n) ');
again = readline.question();
if (again === 'n') break;
}