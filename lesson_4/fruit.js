let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(object) {
  let selectedFruit = {};
  let entries = Object.entries(object);

  for (let index = 0; index < entries.length; index += 1) {
    let currentFruit = entries[index][0];
    let currentCategory = entries[index][1];

    if (currentCategory === 'Fruit') {
      selectedFruit[currentFruit] = currentCategory;
    }
  }

  console.log(selectedFruit);
}

// Mutate the original numbers array
/*
function doubleNumbers(numbersArray) {
  for (let index = 0; index < numbersArray.length; index += 1) {
    numbersArray[index] = numbersArray[index] * 2;
  }
  return numbersArray;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]
*/
// Doubles the numbers at odd indices

function doubleOddIndices(array) {
  let result = [];

  for (let ind = 0; ind < array.length; ind += 1) {
    if (ind % 2 === 1) {
      result.push(array[ind] * 2);
    } else {
      result.push(array[ind]);
    }
  }

  return result;
}

console.log(doubleOddIndices([1, 4, 3, 7, 2, 6]));

// Multiply every array item by a specified number

function multiply(myNumbers, number) {
  let result = [];

  for (let ind = 0; ind < myNumbers.length; ind += 1) {
    result.push(myNumbers[ind] * number);
  }

  return result;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]