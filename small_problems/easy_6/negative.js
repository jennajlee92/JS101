let negative = function(number) {
  if (number < 0) {
    return number;
  } else if (number === 0) {
    return -0;
  } else {
    return -number;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0