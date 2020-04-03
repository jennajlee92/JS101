function runningTotal(array) {
  let result = [];
  
  for (let index = 0; index < array.length; index += 1) {
    if (index > 0) {
      result[index] = array[index] + result[index - 1];
    } else {
      result[index] = array[index]
    }
  }

  return result;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []