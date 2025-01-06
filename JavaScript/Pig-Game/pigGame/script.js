'use strict';
// Dice roll
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active'); // daca a activa o opreste si invers
  player1El.classList.toggle('player--active');
}
btnRoll.addEventListener('click', function () {
  if (playing) {
    // gen random roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dices
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check case 1
    if (dice !== 1) {
      // add dice nr to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});
// Hold score
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // win?
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  diceEl.classList.add('hidden');
};
// Reset game
btnNew.addEventListener('click', init);
