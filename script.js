"use strict";

// selecting Elements
const labelNumber = document.querySelector(".number");
const labelMsg = document.querySelector(".message");
const labelScore = document.querySelector(".score");
const labelHighScore = document.querySelector(".highscore");

const inputGuess = document.querySelector(".guess");

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highscore = 0;

document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = +inputGuess.value;

    if (!guess) {
      labelMsg.textContent = "😢 Please, input a number";
    } else if (guess === secretNumber) {
      labelMsg.textContent = "You made it 💯";
      labelNumber.textContent = secretNumber;
      document.body.style.backgroundColor = "#60b347";
      labelNumber.style.width = "13rem";
      highscore = score > highscore ? score : highscore;
      labelHighScore.textContent = highscore;
    } else {
      labelMsg.textContent =
        guess > secretNumber ? "too High 😵" : "too low 😒";
      if (score > 1) {
        labelScore.textContent = --score;
      } else {
        labelMsg.textContent = "Game Over 💣";
        labelScore.textContent = --score;
      }
    }
  });

document
  .querySelector(".again")
  .addEventListener("click", function () {
    labelNumber.textContent = "?";
    labelNumber.style.removeProperty("width");
    document.body.style.removeProperty("background-color");
    labelMsg.textContent = "Start Guessing...";
    labelScore.textContent = 0;
    inputGuess.value = "";
    secretNumber = Math.ceil(Math.random() * 20);
    score = 20;
    labelScore.textContent = score;
  });
