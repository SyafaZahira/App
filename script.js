const result = document.getElementById("result");
const userChoiceSpan = document.getElementById("userChoice");
const computerChoiceSpan = document.getElementById("computerChoice");
const choices = ["kertas", "gunting", "batu"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Seri!";
  }
  if ((userChoice === "kertas" && computerChoice === "batu") || (userChoice === "gunting" && computerChoice === "kertas") || (userChoice === "batu" && computerChoice === "gunting")) {
    return "Kamu Menang!";
  } else {
    return "Kamu Kalah!";
  }
}

function applyResultStyles(gameResult) {
  if (gameResult === "Kamu Menang!") {
    result.classList.add("bg-success", "border-success");
    result.classList.remove("bg-danger", "border-danger");
  } else if (gameResult === "Kamu Kalah!") {
    result.classList.add("bg-danger", "border-danger");
    result.classList.remove("bg-success", "border-success");
  } else {
    result.classList.remove("bg-success", "border-success", "bg-danger", "border-danger");
  }
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const gameResult = getResult(userChoice, computerChoice);

  userChoiceSpan.textContent = userChoice;
  computerChoiceSpan.textContent = computerChoice;
  result.textContent = gameResult;

  applyResultStyles(gameResult);
}

document.getElementById("kertas").addEventListener("click", () => playGame("kertas"));
document.getElementById("gunting").addEventListener("click", () => playGame("gunting"));
document.getElementById("batu").addEventListener("click", () => playGame("batu"));
