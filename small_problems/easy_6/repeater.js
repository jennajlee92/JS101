function repeater(string) {
  return string.split('').map(char => char.repeat(2)).join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""