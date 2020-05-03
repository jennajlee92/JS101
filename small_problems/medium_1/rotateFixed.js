/*
input integer
output maximum rotation of integer
*/

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}

function maxRotation(integer) {
  let newNum = '';
  let transformedNum = String(integer);

  while (transformedNum.length) {
    if (transformedNum.length === 1) {
      newNum += transformedNum;
    } else {
      newNum += rotateString(transformedNum)[0];
      transformedNum = rotateString(transformedNum);
    }

    transformedNum = transformedNum.slice(1);
  }

  return Number(newNum);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845