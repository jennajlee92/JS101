function union(array1, array2) {
  let newArray = [];

  iterate(newArray, array1);
  iterate(newArray, array2);

  console.log(newArray);
}

function iterate(newArray, array) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (!newArray.includes(array[idx])) {
      newArray.push(array[idx]);
    } else {
      continue;
    }
  }
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]