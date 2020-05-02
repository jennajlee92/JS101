/*
input string
output true if all uppercase, false if lowercase; ignore characters that are not alphabetical
*/

function isUppercase(string) {
  return string === string.toUpperCase();
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true