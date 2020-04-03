function crunch(string) {
  let result = '';
  let firstChar = string.charAt(0);

  for (let i = 1; i <= string.length; i += 1) {
    if (firstChar === string.charAt(i)) {
      firstChar = string.charAt(i);
    } else {
      result += firstChar;
      firstChar = string.charAt(i);
    }
  }
  
  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""