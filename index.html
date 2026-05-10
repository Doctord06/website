const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const copyIp = document.querySelector("#copyIp");
const year = document.querySelector("#year");
const streamStatus = document.querySelector("#streamStatus");
const streamText = document.querySelector("#streamText");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

copyIp.addEventListener("click", async () => {
  const ip = "play.drcelestial.net";

  try {
    await navigator.clipboard.writeText(ip);
    copyIp.textContent = "Copied!";
    setTimeout(() => (copyIp.textContent = "Copy IP"), 1400);
  } catch {
    copyIp.textContent = ip;
  }
});

/*
  Later, you can replace this fake status with a real API route.

  Example:
  fetch("https://bot.drcelestial.net/status")
    .then(res => res.json())
    .then(data => updateStreamStatus(data.live));
*/

function updateStreamStatus(isLive) {
  if (isLive) {
    streamStatus.textContent = "â LIVE NOW";
    streamStatus.classList.add("online");
    streamText.textContent = "DrCelestial is currently live. Jump into the stream.";
  } else {
    streamStatus.textContent = "â Offline";
    streamStatus.classList.remove("online");
    streamText.textContent = "Currently offline. Follow on Twitch to catch the next stream.";
  }
}

updateStreamStatus(false);