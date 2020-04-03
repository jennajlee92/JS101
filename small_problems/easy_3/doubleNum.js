/* A function that returns the number provided as an argument
multiplied by two, unless the argument is a double number;
return double numbers as-is.
*/

function twice(number) {
  let trueOrFalse = [];
  let numArray = String(number).split("");

  if (numArray.length % 2 === 0) {
    for (let ind = 0; ind < Math.floor(numArray.length / 2); ind += 1) {
      trueOrFalse.push(numArray[ind] === numArray[Math.floor((numArray.length / 2) + ind)]);
    }
  }

  if (trueOrFalse.length > 0 && !trueOrFalse.includes(false)) {
    return number;
  }

  return number * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676