function age() {
  let age;

  do {
    age = Math.floor(Math.random() * 121);
  } while (age < 20 || age > 120);

  console.log(`Teddy is ${age} years old!`);
}

age();