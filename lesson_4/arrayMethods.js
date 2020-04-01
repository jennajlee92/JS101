let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let object = {};

flintstones.forEach((name, index) => {
  object[name] = index;
});

console.log(object);

// returns { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// Add up all ages from the Munster family object

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

Object.values(ages).reduce((agesSum, currNum) => agesSum + currNum);

// Find the lowest age in Munster family object

let agesArray = Object.values(ages);
let lowest = agesArray[0];
let currentNum;

for (let index = 1; index < agesArray.length; index += 1) {
  currentNum = agesArray[index];

  if (currentNum < lowest) {
    lowest = currentNum;
  }
}

console.log(lowest);

// Create an object that expresses the frequency a letter occurs in this string:

let statement = "The Flintstones Rock"; // should output { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let arrayOfLetters = statement.split('').filter(thing => thing !== ' ');
let result = {};

arrayOfLetters.forEach(letter => {
  result[letter] = result[letter] || 0;
  result[letter] += 1;
});

console.log(result);