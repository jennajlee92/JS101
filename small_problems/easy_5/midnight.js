function timeOfDay(number) {
  let hoursInDay = 24;
  let minutesPerHour = 60;
  let minutesInDay = hoursInDay * minutesPerHour; // 1440

  if (number < 0) {
    number = (number % minutesInDay) + minutesInDay;
  } else {
    number = number % minutesInDay;
  }

  let hours = Math.floor(number / minutesPerHour);
  let minutes = number % minutesPerHour;

  return formatTime(hours, minutes);
}

function padZero(num) {
  if (String(num).length < 2) {
    return '0' + String(num);
  } else {
    return String(num);
  }
}

function formatTime(hours, minutes) {
  return `${padZero(hours)}:${padZero(minutes)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");