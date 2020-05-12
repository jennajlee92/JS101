function fibonacci(nth) {
  let obj = {
    1 : 1,
    2 : 1
  };

  if (nth === 1 || nth === 2) {
    return obj[nth];
  } else if (obj[nth]) {
    return obj[nth];
  } else {
    obj[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return obj[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765