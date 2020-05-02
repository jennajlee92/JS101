/*
input string
output array of words from string + length of word
empty strings or no arguments should return an empty array
*/

function wordLengths(string) {
  if (string === '' || string === undefined) {
    return console.log([]);
  } else {
    return console.log(string.split(' ').map(word => {
      let length = String(word.length);
      return word + ' ' + length;
    }));
  }
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []