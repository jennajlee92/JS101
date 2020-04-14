function halvsies(array) {
  let firstArray = [];
  let secondArray = [];
  
  if (array.length % 2 === 1) {
    for (let idx = 0; idx < (Math.floor(array.length / 2) + 1); idx += 1) {
      firstArray.push(array[idx]);
    }

    for (let idx = (Math.floor(array.length / 2) + 1); idx < array.length; idx += 1) {
      secondArray.push(array[idx]);
    }
  } else {
    for (let idx = 0; idx < (array.length / 2); idx += 1) {
      firstArray.push(array[idx]);
    }

    for (let idx = (array.length / 2); idx < array.length; idx += 1) {
      secondArray.push(array[idx]);
    }
  }

  console.log([firstArray, secondArray]);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}