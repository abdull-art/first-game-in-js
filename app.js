// -------------->🎮 GAME 🎮<----------------
// -----------ROCK, PAPER, SCISSOR------------

/*
🟢 Done: System picks a value
🟢 Done: User picks a value
🟢 Done: Values get compared
🟢 Done: Result will calculate on the basis of value
*/

let buttons = document.querySelectorAll(".bx");
let pcChoice;
let userValue;

window.onload = () => {
  document.getElementById("rock").addEventListener("click", playGame);
  document.getElementById("scissor").addEventListener("click", playGame);
  document.getElementById("paper").addEventListener("click", playGame);
  document.getElementById("reset-game").addEventListener("click", restartGame);
};

const playGame = () => {
  pcChoice = systemValue();
  result();
};

buttons.forEach((button) => {
  button.onclick = () => {
    userValue = button.value;
  };
});

const systemValue = () => {
  let choice = Math.floor((Math.random() * 3) + 1);
  if (choice === 1) {
    return `rock`;
  } else if (choice === 2) {
    return `scissor`;
  } else return `paper`;
};

const result = () => {
  if (
    (userValue === "rock" && pcChoice === "paper") ||
    (userValue === "scissor" && pcChoice === "rock") ||
    (userValue === "paper" && pcChoice === "scissor")
  ) {
    document.getElementById(
      "display-result"
    ).innerText = `You loose: (System selected ${pcChoice})`;
  } else if (
    (userValue === "rock" && pcChoice === "rock") ||
    (userValue === "scissor" && pcChoice === "scissor") ||
    (userValue === "paper" && pcChoice === "paper")
  ) {
    document.getElementById(
      "display-result"
    ).innerText = `It's a Draw: (System also selected ${pcChoice})`;
  } else
    document.getElementById(
      "display-result"
    ).innerText = `You Win: (System selected ${pcChoice})`;
};

const restartGame = () => {
  document.getElementById("display-result").innerText = "";
};
