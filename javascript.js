// function to randomly select computer choice
function getComputerChoice(compChoice) {
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}
var compChoice = ["Rock", "Paper", "Scissor"];

//compare playerSelection and compSelection variables
function playRound(playerSelection, compSelection) {
  if (playerSelection == "Rock" && compSelection == "Rock") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Draw");
  } else if (playerSelection == "Rock" && compSelection == "Paper") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Computer Wins");
  } else if (playerSelection == "Rock" && compSelection == "Scissor") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Player Wins");
  } else if (playerSelection == "Paper" && compSelection == "Rock") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Player Wins");
  } else if (playerSelection == "Paper" && compSelection == "Paper") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Draw");
  } else if (playerSelection == "Paper" && compSelection == "Scissor") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Computer Wins");
  } else if (playerSelection == "Scissor" && compSelection == "Rock") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Computer Wins");
  } else if (playerSelection == "Scissor" && compSelection == "Paper") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Player Wins");
  } else if (playerSelection == "Scissor" && compSelection == "Scissor") {
    console.log("Player selection " + playerSelection);
    console.log("Computer selection " + compSelection);
    console.log("Draw");
  }
}

//define playerSelection and compSelection variables
const playerSelection = prompt("Enter player choice");
const compSelection = getComputerChoice(compChoice);

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(playerSelection, compSelection);
    if ((result = "Player Wins")) {
      playerScore += 1;
    } else if ((result = "Computer Wins")) {
      compScore += 1;
    }
    console.log("round " + i + "finished");
    console.log("player score after " + i + "round" + playerScore);
    console.log("comp score after " + i + "round" + compScore);
  }
}

let playerScore = 0;
let compScore = 0;
var result = " ";

game();
