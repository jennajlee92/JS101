function doubleConsonants(string) {
  return string.split('').map(char => {
    if ("aeiou ?!.0123456789-_+=@#$%^&*()/~".includes(char)) {
      return char;
    } else {
      return char + char;
    }})
    .join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""