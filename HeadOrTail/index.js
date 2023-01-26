"use scrict";

let input = document.querySelector(".input");
let message = document.querySelector(".output");
const winner = document.querySelector(".winner");
let btn = document.querySelectorAll("button");

let coin = ["Head", "Tail"];
let score = [0, 0];
let WinnerMessage;

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", GameFunction);
}

function GameFunction(e) {
  let Human = e.target.innerText;
  let Computer = Math.floor(Math.random() * coin.length);
  let ComputerGuess = coin[Computer];
  let playerWon = 0;

  message.innerHTML = "Computer selected " + ComputerGuess + "<br>";

  if (Human === ComputerGuess) {
    WinnerMessage = "Human won ";
    score[0]++;
  } else {
    WinnerMessage = "Computer won ";
    score[1]++;
  }
  message.innerHTML +=
    "Player score is " + score[0] + " Computer score is " + score[1];

  if (Human === ComputerGuess) {
    winner.style.color = "White";
  } else {
    winner.style.color = "red";
  }
  winner.innerHTML = WinnerMessage;
}
