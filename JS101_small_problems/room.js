let rlSync = require('readline-sync');
let area;
let areaInFeet;

let metersOrFeet = rlSync.question('Would you like to input meters or feet?\n');

if (metersOrFeet === 'meters') {
  let length = Number(rlSync.question('Enter the length of the room in meters:\n'));
  let width = Number(rlSync.question('Enter the width of the room in meters:\n'));
  area = (length * width).toFixed(2);
  areaInFeet = (area * 10.7639).toFixed(2);
} else {
  let length = Number(rlSync.question('Enter the length of the room in feet:\n'));
  let width = Number(rlSync.question('Enter the width of the room in feet:\n'));
  areaInFeet = (length * width).toFixed(2);
  area = (areaInFeet / 10.7639).toFixed(2);
}

console.log(`The area of the room is ${area} square meters (${areaInFeet} square feet).`);