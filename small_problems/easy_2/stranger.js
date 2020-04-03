/* Notes

Data structures:
array contains 2+ elements of person's name
object contains 2 keys:
{ title: value, occupation: value}
output: return greeting (string)

Algorithm:
change array into string with ' ' between elements
access values of object
  convert to string with ' ' btwn elements
concat into one string greeting
return
*/

function greetings(array, object) {
  let name = array.join(' ');
  let titleOccupation = Object.values(object).join(' ');
  return `Hello, ${name}! Nice to have a ${titleOccupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.