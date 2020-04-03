function isOdd(num) {
  if (num === 0) {
    return false;
  } else if ((num % 2 === 0) || (num % (-2) === 0)) {
    return false;
  } else {
    return true;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/* This is the cleaner solution.

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

*/