'use strict';
// Generating a secret Number
var secretNumber = Math.trunc(Math.random() * 20) + 1;

// Counter for gueses
var counter = 20;

//const for message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// event listener for clicking on guess button
document
  .querySelector('.check')
  .addEventListener('click', function checkValue() {
    // const for guess
    const guess = Number(document.querySelector('.guess').value);
    const highScore = Number(document.querySelector('.highscore').textContent);

    // If counter is at 1, you lost the game
    if (counter < 1) {
      displayMessage('You Lost the Game');
    } else {
      // if there isn't a number enter print no number
      if (!guess) {
        displayMessage('Guess a Number');
        counter++;
      } else if (guess > 20) {
        displayMessage('Number needs to be between 1 - 20');
        counter++;
      }
      // if the guess is correct, change color, change text.
      else if (guess === secretNumber) {
        displayMessage('Correct!');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        // if the counter is a new highscore update it.
        if (counter > highScore) {
          counter--;
          document.querySelector('.highscore').textContent = counter;
        }

        // if the guess is less than secret number pring too low or too high.
      } else if (guess < secretNumber) {
        displayMessage('Too Low');
      } else displayMessage('Too high');
      counter--;
    }
    document.querySelector('.score').textContent = counter;
  });

// Logic to reset game.
document
  .querySelector('.again')
  .addEventListener('click', function checkValue() {
    counter = 20;
    document.querySelector('.score').textContent = counter;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = 'black';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
