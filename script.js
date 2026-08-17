const year = document.querySelector("#year");
const discordLink = document.querySelector("#discordLink");

year.textContent = new Date().getFullYear();

discordLink.addEventListener("click", (event) => {
  if (discordLink.classList.contains("disabled")) {
    event.preventDefault();
  }
});