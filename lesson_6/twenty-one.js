/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/

const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function prompt(string) {
  console.log(`=> ${string}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex += 1) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex += 1) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
  case 'PLAYER_BUSTED':
    prompt('You busted! Dealer wins!');
    break;
  case 'DEALER_BUSTED':
    prompt('Dealer busted! You win!');
    break;
  case 'PLAYER':
    prompt('You win!');
    break;
  case 'DEALER':
    prompt('Dealer wins!');
    break;
  case 'TIE':
    prompt("It's a tie!");
  }
}

function playAgain() {
  let answer;
  console.log('------------------');
  while (true) {
    prompt("Do you want to play again? (y or n)");
    answer = readline.question().toLowerCase();
    if (['y', 'n'].includes(answer)) return answer.toLowerCase()[0] === 'y';
    prompt("Sorry, you must enter 'y' or 'n.'");
  }
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

prompt('Welcome to the Game of Twenty-One!');

while (true) {

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  prompt(`Dealer has ${dealerCards[0]} and Unknown.`);
  prompt(`You have ${playerCards[0]} and ${playerCards[1]}, for a total of ${total(playerCards)}.`);

  while (true) {
    let playerTurn;
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      if (['h', 's'].includes(playerTurn)) break;
      prompt("Sorry, you must enter 'h' or 's.'");
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      prompt('You chose to hit!');
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${total(playerCards)}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You chose to stay at ${total(playerCards)}`);
  }

  prompt('Dealer turn...');

  while (total(dealerCards) < 17) {
    prompt('Dealer hits!');
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total is now ${total(dealerCards)}`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}`);
  }

  console.log('==================');
  prompt(`Dealer has ${dealerCards}, for a total of ${total(dealerCards)}`);
  prompt(`Player has ${playerCards}, for a total of ${total(playerCards)}`);
  console.log('==================');

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
}