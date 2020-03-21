const readline = require('readline-sync');

const VALID_CHOICES = {
  r: 'rock (r)',
  p: 'paper (p)',
  s: 'scissors (s)',
  l: 'lizard (l)',
  S: 'Spock (S)'
};

let playAgain = 'y';
let yourWins = 0;
let computerWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayResults() {
  prompt(`You: ${yourWins} Computer: ${computerWins}`);
  if (yourWins === 5) {
    prompt("You are the grand champion!");
    yourWins = 0;
    computerWins = 0;
  } else if (computerWins === 5) {
    prompt("The computer is the grand champion!");
    yourWins = 0;
    computerWins = 0;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${VALID_CHOICES[choice]}, and computer chose ${VALID_CHOICES[computerChoice]}`);

  if ((choice === 'r' && computerChoice === 's') ||
      (choice === 'p' && computerChoice === 'r') ||
      (choice === 'p' && computerChoice === 'S') ||
      (choice === 's' && computerChoice === 'p') ||
      (choice === 's' && computerChoice === 'l') ||
      (choice === 'r' && computerChoice === 'l') ||
      (choice === 'l' && computerChoice === 'S') ||
      (choice === 'l' && computerChoice === 'p') ||
      (choice === 'S' && computerChoice === 's') ||
      (choice === 'S' && computerChoice === 'r')) {
    prompt('You win!');
    yourWins += 1;
  } else if (choice === computerChoice) {
    prompt("It's a tie.");
  } else {
    prompt("Computer wins!");
    computerWins += 1;
  }
}

while (playAgain === 'y') {
prompt(`Choose one: ${Object.values(VALID_CHOICES).join(', ')}`);
let choice = readline.question();

while (!Object.keys(VALID_CHOICES).includes(choice)) {
  prompt("That's not a valid choice.");
  choice = readline.question();
}

let computerIndex = Math.floor(Math.random()
                    * Object.keys(VALID_CHOICES).length);
let computerChoice = Object.keys(VALID_CHOICES)[computerIndex];

displayWinner(choice, computerChoice);
displayResults();

prompt('Play again? (y/n)');
playAgain = readline.question();
}