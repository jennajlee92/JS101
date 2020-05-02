/*
input string
output string with staggered capitalization (this means every other character should be capitalized or lowercase)
start with capital
*/

function staggeredCase(string) {
  let newString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (idx % 2 === 0) {
      newString += string[idx].toUpperCase();
    } else {
      newString += string[idx].toLowerCase();
    }
  }

  return console.log(newString);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"