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
let highscore = 0;
let score = 20;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
const changeColorBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const questionText = function (text) {
  document.querySelector('.question').textContent = text;
};
const questionBlockWidth = function (width) {
  document.querySelector('.question').style.width = width;
};
const numberInput = function (value) {
  document.querySelector('.number-input').value = value;
};
const highscoreChangeScore = function (number) {
  document.querySelector('.highscore').textContent = number;
};
const scoreText = function (text) {
  document.querySelector('.score').textContent = text;
};

// Game functionality
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  // Ending the game if the score is over
  if (score > 1) {
    // No input
    if (!guessingNumber) {
      displayGuessMessage('Введите число!');
      changeColorBody('rgb(0, 0, 0)');

      // Play won
    } else if (guessingNumber === secretNumber) {
      displayGuessMessage('Правильно!');
      questionText(secretNumber);
      questionBlockWidth('50rem');
      changeColorBody('rgb(9, 250, 21)');

      // The best result gets better if it is better.
      if (score > highscore) {
        highscoreChangeScore(score);
        highscore = score;
      }

      // Number from input is wrong
    } else if (guessingNumber !== secretNumber) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Сильшком много!' : 'Сильшком мало!'
      );

      score--;
      scoreText(score);
      document.querySelector('body').style = 'rgb(0, 0, 0)';
    }
  } else {
    displayGuessMessage('Game over!');
    scoreText(0);
  }
});

// Reset function
const againButton = document.querySelector('.again');

const reset = againButton.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  changeColorBody('rgb(0, 0, 0)');
  questionText('???');
  questionBlockWidth('25rem');
  numberInput('');
  displayGuessMessage('Начни угадывать!');
  scoreText(score);
});
