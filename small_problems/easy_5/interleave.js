function interleave(array1, array2) {
  let newArray = [];
  let biggerArray = (array1.length > array2.length) ? array1 : array2;

  for (let idx = 0; idx < biggerArray.length; idx += 1) {
    if (array1[idx] === undefined) {
      newArray.push(array2[idx]);
    } else if (array2[idx] === undefined) {
      newArray.push(array1[idx]);
    } else {
      newArray.push(array1[idx], array2[idx]);
    }
  }

  console.log(newArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]