function multiplicativeAverage(array) {
  console.log((array.reduce((prev, curr) => prev * curr) / array.length).toFixed(3));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"