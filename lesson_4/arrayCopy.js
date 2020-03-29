let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let copy = arr.slice();

copy.push('h');

console.log(arr);
console.log(copy);

// How to join characters in an array into one string without any delimiters

arr.join('');

// Increment all the values in the array by 1

let numbers = [1, 2, 3, 4];

for (let idx = 0; idx < numbers.length; idx += 1) {
  numbers[idx] += 1;
}

numbers[4] += 1;

console.log(numbers);

// Object reassignment

let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };

obj['pear'] = 'Fruit';
obj['broccoli'] = 'Vegetable';

console.log(obj);

// Strings are immutable

let a = 'Hello '.concat('World!');
let b = a.concat(' Duh!');

console.log(a);
console.log(b);