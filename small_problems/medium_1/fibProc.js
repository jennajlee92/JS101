function fibonacci(nth) {
  let f1f2 = [1, 1];

  for (let index = 3; index <= nth; index += 1) {
    f1f2 = [f1f2[1], f1f2[0] + f1f2[1]];
  }

  return console.log(f1f2[1]);
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050