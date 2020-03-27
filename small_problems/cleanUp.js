function cleanUp(string) {
  let array = string.split('');
  let newString = '';

  for (let ind = 0; ind < array.length; ind += 1) {
    if (array[ind].match(/[a-zA-Z]/g)) {
      newString += array[ind];
    } else if (newString[newString.length - 1] !== ' ') {
      newString += ' ';
    }
  }

  return newString;
}

cleanUp("---what's my +*& line?");    // " what s my line "