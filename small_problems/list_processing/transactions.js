/*
Pseudocode:
input: takes two arguments, inventory item # and transactions (an array of objects)
output: returns array containing transactions (objects) for the specified inventory item
*/

function transactionsFor(itemNum, transactions) {
  return transactions.filter(obj => obj['id'] === itemNum);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function empty(array) {
  let quantity = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx].movement === 'in') {
      quantity += array[idx].quantity;
    } else {
      quantity -= array[idx].quantity;
    }
  }

  if (quantity > 0) {
    return false;
  } else {
    return true;
  }
}

function isItemAvailable(itemNum, transactions) {
  return (empty(transactionsFor(itemNum, transactions))) ? false : true;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true