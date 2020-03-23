// Question 1

let advice = "Few things in life are as important as house training your pet dinosaur.";

while (advice.includes('important')) {
  advice.replace('important', 'urgent');
}

// Question 2

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Answers
numbers.slice().reverse();
numbers.slice().sort((num1, num2) => num2 - num1);

// Question 3

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);

// Question 4

let famousWords = "seven years ago...";

let firstWords = "Four score and ";
firstWords + famousWords;
firstWords.concat(famousWords);

// Question 5

let array = [1, 2, 3, 4, 5];
array.splice(2, 1);

// Question 6

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

flintstones = [].concat(...flintstones);
// OR
let newFlinstones = [];
flintstones.forEach(element => {
  newFlinstones = newFlinstones.concat(element);
});

// Question 7

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let barneyArray = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();

// Question 8

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);

// Question 9

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.match(/t/g).length;
(statement2.match(/t/g) || []).length;

// Question 10

let title = "Flintstone Family Members";
title.padStart(Math.floor((40 - title.length) / 2));