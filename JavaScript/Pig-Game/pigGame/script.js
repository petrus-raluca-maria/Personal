'use strict';
// Dice roll
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

let currentScore = 0;
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
btnRoll.addEventListener('click', function () {
  // gen random roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display dices
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check case 1
  if (dice !== 1) {
    // add dice nr to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // switch player
  }
});
// // Hold score
// btnHold.addEventListener('click', function () {
//   score = score + current;
// });
// // Reset game
// btnNew.addEventListener('click', function () {
//     document.querySelector.apply('.current--1') = 0;
//     document.querySelector.apply('.current--2') = 0;
//     document.querySelector.apply('.score') = 0;
//     document.querySelector.apply('.') = 0;
// });
