/*
Pseudocode:
input: array of numbers
output: returns sum of the sums of each leading subsequence for that array

get all subsequences of array
add each subsequence together, then add those sums together
return the result
*/

function sumOfSums(array) {
  let newArray = [];
  let indexEnd = 0;

  while (indexEnd < array.length) {
    if (indexEnd === 0) {
      newArray.push(array[indexEnd]);
    } else {
      newArray.push(array[indexEnd] + newArray[indexEnd - 1]);
    }
    indexEnd += 1;
  }

  return newArray.reduce((acc, curr) => acc + curr);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35