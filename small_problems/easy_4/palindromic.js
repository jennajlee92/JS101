function isPalindrome(string) {
  let array = string.split('');

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === array[array.length - (index + 1)]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

/* A more succinct solution would be:

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

*/

function isRealPalindrome(string) {
  let newString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  console.log(newString === newString.split('').reverse().join(''));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false