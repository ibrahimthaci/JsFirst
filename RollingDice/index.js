"use strict";

const newGame = document.querySelector(".reset");
const theDice = document.querySelector(".theDice");
const RollDice = document.querySelector(".rollDice");
const holdDice = document.querySelector(".holdDice");

let totalResult1 = document.querySelector(".Player-0-result");
let totalResult2 = document.querySelector(".Player-1-result");

let curentRes1 = document.querySelector(".Current-0");
let curentRes2 = document.querySelector(".Current-1");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

theDice.classList.add("HideDice");

RollDice.addEventListener("click", function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  theDice.classList.remove("HideDice");
  theDice.src = `./svg/dice${dice}.svg`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`.Current-${activePlayer}`).textContent =
      currentScore;
    scores[activePlayer] = currentScore;
  } else {
    document.querySelector(`.Current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
