// Question 1

let numbers = [1, 2, 3, 4];

while (numbers == true) {
  numbers.shift();
}

// Question 3: pass by value means passing a copy;
// pass by reference means the variable references or points to
// a value

// Question 4: shallow copy is a copy of the collection
// structure, not the elements. Deep copy is duplicating
// the elements from one onto the other

// Question 5

function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

const isColorValid = color => color === 'blue' || color === 'green';

const isColorValid = color => ['blue', 'green'].includes(color);