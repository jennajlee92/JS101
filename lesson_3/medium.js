// Question 1

function asciiArt(phrase = 'The Flintstones Rock!') {
  for (let index = 0; index < 10; index += 1) {
    console.log(`${' '.repeat(index)}${phrase}`);
  }
}

asciiArt();

// Question 2

let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(string) {
  let newString = '';
  let upperCaseArray = string.match(/[A-Z]/g);
  let lowerCaseArray = string.match(/[a-z]/g);

  for (let index = 0; index < string.length; index += 1) {
    if (upperCaseArray.includes(string[index])) {
      newString += string[index].toLowerCase();
    } else {
      newString += string[index].toUpperCase();
    }
  }

  return newString;
}

swapCase(munstersDescription); // `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

// Question 3

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor); // changing this line reverses the array
    }
    divisor -= 1;
  }
  console.log(factors);
}

factors(100);

// Question 4

