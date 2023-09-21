// Get all button elements
const timerDisplayElement = document.getElementById("timer-display");
const startBtnElement = document.getElementById("start-btn");
const stopBtnElement = document.getElementById("stop-btn");
const resetBtnElement = document.getElementById("reset-btn");

let startTime;
let isCounting = false;
let intervaID;

// initiate the timing process

function startTimer() {
  if (!isCounting) {
    startTime = new Date().getTime();
    intervalID = setInterval(updateTimer, 1000);
    isCounting = true;
  }

  // resetting the timer

  // resetBtnElement.addEventLister("click", () => {});
}
startBtnElement.addEventListener("click", startTimer);

// calculate timing logic

function updateTimer() {
  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - startTime; // this is in milliseconds

  const hours = Math.floor(timeElapsed / 3600000);
  const minutes = Math.floor((timeElapsed % 3600000) / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);
  // const milliseconds = Math.floor(timeElapsed % 1000);

  timerDisplayElement.textContent = `${padTwoDigits(hours)}:${padTwoDigits(
    minutes
  )}:${padTwoDigits(seconds)}`;
}

function padTwoDigits(num) {
  return num.toString().padStart(2, "0");
}

// function for stopping timer

stopBtnElement.addEventListener("click", () => {
  clearInterval(intervalID);
  isCounting = false;
});

// resetting the timer

resetBtnElement.addEventListener("click", () => {
  clearInterval(intervalID);
  isCounting = false;

  timerDisplayElement.textContent = "00:00:00";
});
