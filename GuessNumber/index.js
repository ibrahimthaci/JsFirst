"use strict";

let Realnumber = Math.floor(Math.random() * 20) + 1;
console.log(Realnumber);
let score = 20;
let hightscore = "";

document.querySelector(".checkButton").addEventListener("click", function () {
  let guess = parseInt(document.querySelector(".guess").value);

  //No input
  if (!guess) {
    document.querySelector("#first").textContent =
      "No number, please add number😁";

    //right guess
  } else if (guess === Realnumber) {
    document.querySelector(".buttonNumber").textContent = Realnumber;
    document.querySelector("#first").textContent = "Bravooo 😘👌";
    document.querySelector("#HeaderGuess").textContent =
      "You Guuesssed Righttt 😘👌";
    document.querySelector("body").style.background = "green";
    if (score > hightscore) hightscore = score;
    document.querySelector("#third").textContent =
      "Higher Score: " + hightscore + "🤡";
  }

  // Wrong number
  else if (guess !== Realnumber) {
    if (score > 1) {
      document.querySelector("#first").textContent =
        guess > Realnumber ? "Look for Lower Number" : "Look for Higher Number";
      score--;
      document.querySelector("#second").textContent = "Score: " + score;
    } else {
      document.querySelector("#first").textContent = "You lost the game 😕";
      document.querySelector("#HeaderGuess").textContent = "You Lost 😕";
      document.querySelector("#second").textContent =
        "Your score is " + 0 + " and number was " + Realnumber;
      document.querySelector(".buttonNumber").textContent = Realnumber;
    }
  }
});

document.querySelector(".resetBtn").addEventListener("click", function () {
  score = 20;
  hightscore = 0;
  Realnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
  document.querySelector("#HeaderGuess").textContent = "Guess My number";
  document.querySelector("#first").textContent = "Start Guessing ... 😍";
  document.querySelector("#second").textContent = "Score :" + score;
  document.querySelector("#third").textContent = "Higher Score: " + hightscore;
  document.querySelector(".buttonNumber").textContent = "";
  document.querySelector("body").style.background = "white";
  document.querySelector(".buttonNumber").textContent = "?";
});
