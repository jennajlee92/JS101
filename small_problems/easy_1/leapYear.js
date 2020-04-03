let isLeapYear = year => {
  if (year <= 0) {
    console.log('That is an invalid year.');
  } else if (year < 1752) {
    return year % 4 === 0;
  } else if (year >= 1752) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

// Korea uses the lunar and Gregorian calendar