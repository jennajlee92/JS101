function isPalindromicNumber(number) {
  console.log(String(number) === String(number).split('').reverse().join(''));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true