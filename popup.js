let timer;
let timerRunning = false;
let timeLeft = 1500; // 25 minutes in seconds

function updateTimerText() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer-text').textContent = formattedTime;
}

function startTimer() {
  if (!timerRunning) {
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft -= 1;
        updateTimerText();
      } else {
        clearInterval(timer);
        timerRunning = false;
        // Timer completed; you can add a notification here.
      }
    }, 1000);
    timerRunning = true;
  }
}

document.getElementById('start-button').addEventListener('click', () => {
  startTimer();
});

// Initial timer text update
updateTimerText();
