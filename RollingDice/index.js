"use strict";

const newGame = document.querySelector(".reset");
const theDice = document.querySelector(".theDice");
const RollDice = document.querySelector(".rollDice");
const holdDice = document.querySelector(".holdDice");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let totalResult1 = document.querySelector(".Player-0-result");
let totalResult2 = document.querySelector(".Player-1-result");

let Player1Tittle = document.querySelector(".player1Tittle");
let Player2Tittle = document.querySelector(".player2Tittle");

let curentRes1 = document.querySelector(".Current-0");
let curentRes2 = document.querySelector(".Current-1");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.querySelector(`.Current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

theDice.classList.add("HideDice");

RollDice.addEventListener("click", function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    theDice.classList.remove("HideDice");
    theDice.src = `./svg/dice${dice}.svg`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`.Current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdDice.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.Player-${activePlayer}-result`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      document.querySelector(`.player--${activePlayer} h1`).textContent =
        "Winner player " + Number(activePlayer + 1);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("winnerClass");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener("click", function () {
  playing = true;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  Player1Tittle.textContent = "Player 1";
  Player2Tittle.textContent = "Player 2";
  totalResult1.textContent = 0;
  totalResult2.textContent = 0;
  curentRes1.textContent = 0;
  curentRes2.textContent = 0;

  theDice.classList.add("HideDice");
  player0El.classList.remove("winnerClass");
  player1El.classList.remove("winnerClass");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
});
