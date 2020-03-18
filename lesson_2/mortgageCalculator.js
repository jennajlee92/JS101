// Need: loan amount, Annual Percentage Rate (APR), duration
// Should interest rate 5% be 5 or .05?

// Calculate: monthly interest rate, loan duration in months
// Monthly interest conversion: Math.pow((1 + r), (1/12)) - 1
// Note that r = compound interest rate in decimals

// M = P * (J/(1 - ((1 + J)**(-N))))
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

let m = p * (j / (1 - Math.pow((1 + j),(-n))));