const clockElement = document.getElementById("clock");
const statusElement = document.getElementById("rotating-status");
const messageBtn = document.getElementById("message-btn");
const messageOutput = document.getElementById("message-output");

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  clockElement.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

const statuses = [
  "Systems online",
  "Community hub ready",
  "Stream setup standing by",
  "Server connection stable",
  "Awaiting next adventure"
];

let statusIndex = 0;

function rotateStatus() {
  statusElement.textContent = statuses[statusIndex];
  statusIndex = (statusIndex + 1) % statuses.length;
}

rotateStatus();
setInterval(rotateStatus, 2500);

messageBtn.addEventListener("click", () => {
  messageOutput.textContent = "Site interaction confirmed. Everything is working.";
});