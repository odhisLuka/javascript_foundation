const rockBtnElement = document.querySelector(".rock-btn");
const paperBtnElement = document.querySelector(".paper-btn");
const scissorBtnElement = document.querySelector(".scissors-btn");
const movesElement = document.querySelector(".js-move-chosen");
const resultElement = document.querySelector(".js-result");
const confirmResetBtnElement = document.querySelector(".js-reset-confirmation");

let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};
const savedScore = JSON.parse(localStorage.getItem("score"));
if (savedScore) {
  score = savedScore;
}

updateScoreElement();

let isAutoPlay = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlay) {
    intervalID = setInterval(() => {
      const playerMove = pickcomputerMove();
      makeMove(playerMove);
    }, 1000);
    isAutoPlay = true;
    document.querySelector(".auto-play-btn").innerText = "Stop Playing";
  } else {
    clearInterval(intervalID);
    isAutoPlay = false;
    document.querySelector(".auto-play-btn").innerText = "Auto Play";
  }
}
document.getElementById("auto-play-btn").addEventListener("click", autoPlay);

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    makeMove("rock");
  } else if (event.key === "p") {
    makeMove("paper");
  } else if (event.key === "s") {
    makeMove("scissors");
  } else if (event.key === "a") {
    autoPlay();
  } else if (event.key === " ") {
    showResetConfirmation();
  } else if (event.key === "Backspace") {
    hideResetConfirmation();
  }
});

function makeMove(playerMove) {
  const computerMove = pickcomputerMove();
  const resultElement = document.querySelector(".js-result");

  if (playerMove === computerMove) {
    resultElement.innerHTML = "Tie.";
    score.ties += 1;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    resultElement.innerHTML = "You win";
    score.wins += 1;
  } else {
    resultElement.innerHTML = "You lose";
    score.losses += 1;
  }
  movesElement.innerHTML = `
  You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer
  `;

  updateScoreElement();
  localStorage.setItem("score", JSON.stringify(score));
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

rockBtnElement.addEventListener("click", () => {
  makeMove("rock");
});
paperBtnElement.addEventListener("click", () => {
  makeMove("paper");
});

scissorBtnElement.addEventListener("click", () => {
  makeMove("scissors");
});

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();
  localStorage.removeItem("score");
  resultElement.innerHTML = ``;
  movesElement.innerHTML = ``;

  showResetConfirmation();
  hideResetConfirmation();
}
document
  .querySelector(".reset-score-btn")
  .addEventListener("click", showResetConfirmation);

function showResetConfirmation() {
  confirmResetBtnElement.classList.add("second-child");
  confirmResetBtnElement.innerHTML = `
      <p>Are you sure you want to reset the score?</p>
      <button class="reset-confirm-btn" id="reset-confirm-yes">Yes</button>
      <button class="reset-confirm-btn" id="reset-confirm-no">No</button>
    `;

  const resetBtnElement = document.getElementById("reset-confirm-yes");
  resetBtnElement.addEventListener("click", resetScore);

  document
    .getElementById("reset-confirm-no")
    .addEventListener("click", hideResetConfirmation);
}
const hideResetConfirmation = () => {
  confirmResetBtnElement.classList.remove("second-child");
  confirmResetBtnElement.innerHTML = "";
};

function pickcomputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  return computerMove;
}
