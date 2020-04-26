/*
Pseudocode:
input: 2 arrays with lists of numbers
output: one array with products of all combinations of number pairs that exist between the two arrays, sorted in ascending numerical order

find all combinations of number pairs that exist between the two arrays
multiply all numbers pairs and put it into a new array
sort the array in ascending numerical order (a, b) => a - b

*/

function multiplyAllPairs(array1, array2) {
  let products = [];

  array1.forEach(num1 => {
    array2.forEach(num2 => {
      products.push(num1 * num2);
    });
  });
  
  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]