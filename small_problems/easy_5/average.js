function average(array) {
  console.log(Math.floor(array.reduce((prev, curr) => prev + curr) / array.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40