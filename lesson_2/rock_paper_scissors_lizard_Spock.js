let readline = require('readline-sync');
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
  prompt(`You chose ${choice}, and computer chose ${computerChoice}`);

  if ((choice === 'rock (r)' && computerChoice === 'scissors (s)') ||
      (choice === 'paper (p)' && computerChoice === 'rock (r)') ||
      (choice === 'paper (p)' && computerChoice === 'Spock (S)') ||
      (choice === 'scissors (s)' && computerChoice === 'paper (p)') ||
      (choice === 'scissors (s)' && computerChoice === 'lizard (l)') ||
      (choice === 'rock (r)' && computerChoice === 'lizard (l)') ||
      (choice === 'lizard (l)' && computerChoice === 'Spock (S)') ||
      (choice === 'lizard (l)' && computerChoice === 'paper (p)') ||
      (choice === 'Spock (S)' && computerChoice === 'scissors (s)') ||
      (choice === 'Spock (S)' && computerChoice === 'rock (r)')) {
    prompt('You win!');
    yourWins += 1;
  } else if ((choice === 'rock (r)' && computerChoice === 'paper (p)') ||
            (choice === 'lizard (l)' && computerChoice === 'rock (r)') ||
            (choice === 'paper (p)' && computerChoice === 'scissors (s)') ||
            (choice === 'lizard (l)' && computerChoice === 'rock (r)') ||
            (choice === 'Spock (S)' && computerChoice === 'lizard (l)') ||
            (choice === 'scissors (s)' && computerChoice === 'Spock (S)') ||
            (choice === 'scissors (s)' && computerChoice === 'rock (r)') ||
            (choice === 'lizard (l)' && computerChoice === 'scissors (s)') ||
            (choice === 'paper (p)' && computerChoice === 'lizard (l)') ||
            (choice === 'Spock (S)' && computerChoice === 'paper (p)') ||
            (choice === 'rock (r)' && computerChoice === 'Spock (S)')) {
    prompt('Computer wins!');
    computerWins += 1;
  } else {
    prompt("It's a tie.");
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
let computerChoice = Object.values(VALID_CHOICES)[computerIndex];

displayWinner(VALID_CHOICES[choice], computerChoice);
displayResults();

prompt('Play again? (y/n)');
playAgain = readline.question();
}