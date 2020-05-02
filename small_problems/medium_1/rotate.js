/*
input array
output array with first element added to end of array (don't mutate original)
if the input is not an array, return undefined
if the input is empty array, return empty array
*/

function rotateArray(array) {
  if (typeof array !== 'object') {
    return console.log(undefined);
  } else if (array.length === 0) {
    return console.log([]);
  } else {
    return console.log(array.slice(1).concat(array[0]));
  }
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]