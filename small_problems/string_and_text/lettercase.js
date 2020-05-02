/*
input string
output object containing 3 props: lowercase #, uppercase #, and other characters #
*/

function letterCaseCount(string) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  string.split('').map(char => {
    if (!char.match(/[A-Za-z]/g)) {
      return obj['neither'] += 1;
    } else if (char === char.toLowerCase()) {
      return obj['lowercase'] += 1;
    } else if (char === char.toUpperCase()) {
      return obj['uppercase'] += 1;
    }
  });

  console.log(obj);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }