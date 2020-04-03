let multisum = number => {
  let sum = 0;
  for (let firstNum = 3; firstNum <= number; firstNum += 1) {
    if (firstNum % 3 === 0 || firstNum % 5 === 0) {
      sum += firstNum;
    }
  }
  return sum;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));