/*
change string into Array
map array into array of ascii values
reduce array by summmation
return summmation
*/

function asciiValue(string) {
  if (string === '') {
    return 0;
  } else {
    let stringArray = string.split("");
    let asciiArray = stringArray.map(char => char.charCodeAt(0));
    return asciiArray.reduce((acc, curr) => acc + curr);
  }
}

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));