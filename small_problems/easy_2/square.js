function multiply(a, b) {
  return a * b;
}

let square = num => multiply(num, num);

console.log(square(5) === 25);
console.log(square(-8) === 64);

// Generalizing to a power to the n type function

function powerToN(num, power) {
  if (power === 2) {
    return multiply(num, num);
  } else {
    return multiply(num, powerToN(num, power - 1));
  }
}

console.log(powerToN(3, 3));