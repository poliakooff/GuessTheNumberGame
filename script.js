'use strict';

// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'Правильно';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 13;

// const eventHenler = function () {
//   console.log(document.querySelector('.number-input').value);
// };

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  if (score > 1) {
    if (!guessingNumber) {
      document.querySelector('.guess-message').textContent = 'Введите число!';
      document.querySelector('body').style = 'rgb(0, 0, 0)';
    } else if (guessingNumber === secretNumber) {
      document.querySelector('.guess-message').textContent = 'Правильно!';
      // document.querySelector('.question').textContent = secretNumber;
      document.querySelector('body').style =
        'background-color: rgb(9, 250, 21)';
      document.querySelector('.highscore').innerHTML = score;
    } else if (guessingNumber > secretNumber) {
      document.querySelector('.guess-message').textContent = 'Сильшком много!';
      document.querySelector('body').style = 'rgb(0, 0, 0)';
      score--;
      document.querySelector('.score').textContent = score;
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
