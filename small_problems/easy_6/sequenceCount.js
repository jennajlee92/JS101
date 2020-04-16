let sequence = (count, startNum) => {
  let result = [];

  for (let idx = startNum; result.length < count; idx += startNum) {
    result.push(idx);
  }

  console.log(result);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []