'use strict';

// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'Правильно';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 13;

// const eventHenler = function () {
//   console.log(document.querySelector('.number-input').value);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Game screen
document.querySelector('.question').textContent = '???';

// Best score
let highscore = 0;

// Game points
let score = 20;

// Game functionality
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  // Game end
  if (score > 1) {
    // No input
    if (!guessingNumber) {
      document.querySelector('.guess-message').textContent = 'Введите число!';
      document.querySelector('body').style = 'rgb(0, 0, 0)';

      // Play won
    } else if (guessingNumber === secretNumber) {
      document.querySelector('.guess-message').textContent = 'Правильно!';
      document.querySelector('.question').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
      document.querySelector('.question').style.width = '50rem';

      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
        highscore = score;
      }

      // Too high
    } else if (guessingNumber > secretNumber) {
      document.querySelector('.guess-message').textContent = 'Сильшком много!';
      document.querySelector('body').style = 'rgb(0, 0, 0)';
      score--;
      document.querySelector('.score').textContent = score;

      // Too low
    } else if (guessingNumber < secretNumber) {
      document.querySelector('.guess-message').textContent = 'Сильшком мало!';
      document.querySelector('body').style = 'rgb(0, 0, 0)';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.guess-message').textContent = 'Game over!';
    document.querySelector('.score').textContent = 0;
  }
});

// Reset function
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.number-input').value = '';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.highscore').textContent = '0';
});
