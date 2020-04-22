// Problem 2

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
}));

// Problem 3

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
console.log(Object.keys(Object.values(obj2)[2])[0]);

// Problem 4

arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;

obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;

// Problem 5

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleAge = 0;

Object.values(munsters).forEach(name => {
  if (name.gender === 'male') {
    maleAge += name.age;
  }
});

console.log(maleAge);

// Problem 6

Object.entries(munsters).forEach(pair => {
  let name = pair[0];
  let age = pair[1]['age'];
  let gender = pair[1]['gender'];

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

// Problem 8

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(array => {
  array.join('').split('')
  .forEach(char => {
    if (('aeiou').includes(char)) {
      console.log(char);
    }
  });
});

// Problem 9

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(structure => {
  if (typeof structure[0] === 'string') {
    return structure.slice().sort();
  } else {
    return structure.slice().sort((a, b) => a - b);
  }
});

// Problem 10

arr1 = arr.map(structure => {
  if (typeof structure[0] === 'string') {
    return structure.slice().sort().reverse();
  } else {
    return structure.slice().sort((a, b) => b - a);
  }
});

console.log(arr1);

// Problem 11

arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr1 = arr.map(obj => {
  let newObj = {};
  
  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }

  return newObj;
});

console.log(arr1);
console.log(arr);

// Problem 12

arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr1 = arr.map(array => array.filter(num => num % 3 === 0));

// Problem 13

arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr1 = arr.sort((subArr1, subArr2) => subArr1.filter(num => num % 2 === 1).reduce((acc, curr) => acc + curr)
  - subArr2.filter(num => num % 2 === 1).reduce((acc, curr) => acc + curr));

// Problem 14

obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

arr1 = Object.values(obj).map(obj => {
  if (obj.type === 'fruit') {
    return obj.colors.map(color => color[0].toUpperCase() + color.slice(1));
  } else {
    return obj.size.toUpperCase();
  }
});

// Problem 15

arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr1 = arr.filter(obj => {
  return Object.values(obj).every(array => {
    return array.every(num => num % 2 === 0);
  });
});

// Problem 16

arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

obj = Object.fromEntries(arr);

console.log(obj);