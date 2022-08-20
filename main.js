"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // If no number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";

    // When player win
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "💡 Correct Number";
    displayMessage("💡 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High" : "📉 Too Low";
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "😶‍🌫️ You Lose The Game";
      displayMessage("😶‍🌫️ You Lose The Game");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  /* 
    // Whene number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = "📈 Too High";
      displayMessage("📈 Too High");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "😶‍🌫️ You Lose The Game";
      displayMessage("😶‍🌫️ You Lose The");

      document.querySelector(".score").textContent = 0;
    }

    // Whene number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = "📉 Too Low";
      displayMessage("📉 Too Low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "😶‍🌫️ You Lose  The Game";
      displayMessage("😶‍🌫️ You Lose The");

      document.querySelector(".score").textContent = 0;
    }
    */
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
