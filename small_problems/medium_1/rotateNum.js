function rotateRightmostDigits(number, fromEnd) {
  let string = String(number);
  let firstPart = string.slice(0, string.length - fromEnd);
  let lastPart = string.slice(string.length - fromEnd);
  let result = firstPart + rotateString(lastPart);

  console.log(Number(result));
}

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917