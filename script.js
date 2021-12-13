'use strict';
// Generating a secret Number
var secretNumber = Math.trunc(Math.random() * 20) + 1;

// Counter for gueses
var counter = 20;

// event listener for clicking on guess button
document
  .querySelector('.check')
  .addEventListener('click', function checkValue() {
    // const for guess
    const guess = Number(document.querySelector('.guess').value);
    const highScore = Number(document.querySelector('.highscore').textContent);

    // If counter is at 1, you lost the game
    if (counter < 1) {
      document.querySelector('.message').textContent = 'You Lost the Game';
    } else {
      // if there isn't a number enter print no number
      if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
      }
      // if the guess is correct, change color, change text.
      else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        // if the counter is a new highscore update it.
        if (counter > highScore) {
          counter--;
          document.querySelector('.highscore').textContent = counter;
        }

        // if the guess is less than secret number pring too low.
      } else if (guess < secretNumber) {
        // added logic so you can see the difference in guesses
        if (document.querySelector('.message').textContent === 'Too Low') {
          document.querySelector('.message').textContent = 'Still Too Low';
        } else document.querySelector('.message').textContent = 'Too Low';
        counter--;
      }
      // if the guess is higher than secret number print too high
      else if (guess > secretNumber) {
        // added logic so you can see the difference in guess.
        if (document.querySelector('.message').textContent === 'Too high') {
          document.querySelector('.message').textContent = 'Still Too high';
        } else document.querySelector('.message').textContent = 'Too high';
        counter--;
      }
      document.querySelector('.score').textContent = counter;
    }
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
