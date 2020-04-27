/*
Pseudocode:
input: 2D array, with fruit at index 0 and quantity of fruit in index 1
output: returns regular array with names of fruits appearing according to their quantity

access each subarray
repeat the fruit the number of times in index 1
push names of fruit into a 1 dimensional array
return that array
*/

function buyFruit(twoDArray) {
  let resultArray = [];

  twoDArray.map(subArray => {
    let newSub = [];
    let fruit = subArray[0];
    let iter = subArray[1];
    
    while (iter > 0) {
      newSub.push(fruit);
      iter -= 1;
    }

    resultArray.push(...newSub);
    return newSub;
  });
  
  return resultArray;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]