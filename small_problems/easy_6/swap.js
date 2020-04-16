let swapName = stringName => {
  let array = stringName.split(' ');
  array.unshift(array.pop());
  array[0] = array[0] + ',';
  console.log(array.join(' '));
}

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"