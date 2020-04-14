function countOccurrences(array) {
  let occurrences = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (Object.keys(occurrences).includes(array[idx])) {
      occurrences[array[idx]] += 1;
    } else {
      occurrences[array[idx]] = 1;
    }
  }

  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2