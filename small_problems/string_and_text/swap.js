/*
input string
output string with cases swapped
*/

function swapCase(string) {
  return string.split('').map(char => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"