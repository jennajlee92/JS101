function wordSizes(sentence) {
  let wordsArray = sentence.replace(/[^a-zA-Z0-9 ]/g, '').split(' ');
  let object = {};
  let length;

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    length = wordsArray[idx].length;

    if (length === 0) {
      continue;
    } else if (object[length] >= 1) {
      object[length] += 1;
    } else {
      object[length] = 1;
    }
  }

  console.log(object);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}