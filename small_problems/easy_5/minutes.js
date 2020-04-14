// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

let minutesPerHour = 60;
let hoursInDay = 24;
let minutesInDay = minutesPerHour * hoursInDay;

function afterMidnight(twentyFourHourTime) {
  let [hours, minutes] = twentyFourHourTime.split(":").map(num => Number(num));
  minutes = (minutes + (hours * minutesPerHour)) % minutesInDay;
  return minutes;
}

function beforeMidnight(twentyFourHourTime) {
  let minutes = minutesInDay - afterMidnight(twentyFourHourTime);
  if (minutes === minutesInDay) {
    minutes = 0;
  }

  return minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);