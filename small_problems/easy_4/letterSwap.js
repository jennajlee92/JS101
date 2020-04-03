function swap(string) {
  let words = string.split(' ');
  let result = [];

  for (let idx = 0; idx < words.length; idx += 1) {
    let current = words[idx];
    let newWord;

    if (current.length <= 1) {
      newWord = current;
    } else {
      newWord = current[current.length - 1] + current.slice(1, -1) + current[0];
    }

    result.push(newWord);
  }

  console.log(result.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"