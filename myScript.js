/*GLOBAL VARIABLES*/
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

function goToPage2() {
  var container = document.querySelector(".container");
  container.classList.add("zoom");

  setTimeout(function () {
    window.location.href = "page2.html";
  }, 1000);
}

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}
function updateScore(result) {
  if (result === "Player") {
    playerScore++;
  } else if (result === "Computer") {
    computerScore++;
  }
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

/* 
ROCK CHOICE
*/
function chooseRock() {
  const playerChoice = "rock";
  const computerChoice = computerPlay();
  const result = playRound(playerChoice, computerChoice);
  updateScore(result);
  displayResult(result, playerChoice, computerChoice);
}
/*
  paper choice 
  */
function choosePaper() {
  const playerChoice = "paper";
  const computerChoice = computerPlay();
  const result = playRound(playerChoice, computerChoice);
  updateScore(result);
  displayResult(result, playerChoice, computerChoice);
}
/* 
scissors choice
*/
function chooseScissors() {
  const playerChoice = "scissors";
  const computerChoice = computerPlay();
  const result = playRound(playerChoice, computerChoice);
  updateScore(result);
  displayResult(result, playerChoice, computerChoice);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

document.getElementById("reset").addEventListener("click", resetGame);
