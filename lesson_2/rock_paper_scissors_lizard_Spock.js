const readline = require('readline-sync');

const VALID_CHOICES = {
  r: 'rock (r)',
  p: 'paper (p)',
  s: 'scissors (s)',
  l: 'lizard (l)',
  v: 'Spock (v)'
};

const WINNING_COMBOS = {
  r: ['s', 'l'],
  p: ['r', 'v'],
  s: ['p', 'l'],
  l: ['p', 'v'],
  v: ['r', 's']
};

let playAgain = 'y';
let yourWins = 0;
let computerWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinnerUpdateScore(choice, computerChoice) {
  prompt(`You chose ${VALID_CHOICES[choice]}, and computer chose ${VALID_CHOICES[computerChoice]}`);

  if (choice === computerChoice) {
    prompt("It's a tie.");
  } else if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    yourWins += 1;
  } else {
    prompt("Computer wins!");
    computerWins += 1;
  }
}

function displayScoresMaybeDeclareChampion() {
  prompt(`You: ${yourWins} Computer: ${computerWins}`);

  if (yourWins === 5) {
    prompt("You are the grand champion!");
    wipeScores();
  } else if (computerWins === 5) {
    prompt("The computer is the grand champion!");
    wipeScores();
  }
}

function wipeScores() {
  yourWins = 0;
  computerWins = 0;
}

while (['Y', 'y', 'yes', 'Yes'].includes(playAgain)) {
  prompt(`Choose one: ${Object.values(VALID_CHOICES).join(', ')}`);
  let choice = readline.question();

  while (!Object.keys(VALID_CHOICES).includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let computerIndex = Math.floor(Math.random()
                    * Object.keys(VALID_CHOICES).length);
  let computerChoice = Object.keys(VALID_CHOICES)[computerIndex];

  displayWinnerUpdateScore(choice, computerChoice);
  displayScoresMaybeDeclareChampion();

  prompt('Play again? (y/n)');
  playAgain = readline.question();
}