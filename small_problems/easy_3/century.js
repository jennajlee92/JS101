/*
year must be > 0
1 to 100 1st
101 to 200 2nd
201 to 300 3rd
301 to 400 4th
401 to 500 5th
501 to 600 6th
601 to 700 7th
701 to 800 8th
801 to 900 9th
901 to 1000 10th
1001 to 1100 11th
1101 to 1200 12th
...
1901 to 2000 20th
2001 to 2100 21st
*/

function century(year) {
  let centuryNum = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNum -= 1;
  }

  console.log(String(centuryNum) + ending(centuryNum));
}

function ending(number) {
  if ((number % 100 === 11) || (number % 100 === 12) || (number % 100 === 13)) {
    return 'th';
  }

  let lastDigit = number % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"