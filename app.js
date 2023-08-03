function getComputerChoice() {
  let options = ["ROCK", "PAPER", "SCISSORS"];
  const randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}

function Game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock, Paper or scissors").toUpperCase();
    let computerSelection = getComputerChoice();
    console.log("Player: " + playerSelection + " VS " +"Computer: " + computerSelection)
    console.log(playRound(playerSelection,computerSelection))
  }
}
function playRound(playerSelection,computerSelection) {
    if(playerSelection == "ROCK" && computerSelection == "PAPER") {
        return "The computer chose PAPER. You lost!";
    } else if(playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "The computer chose SCISSORS. You won!";
    } else if(playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "The computer chose ROCK. You won!";
    } else if(playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return "The computer chose SCISSORS. You lost!";
    } else if(playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return "The computer chose PAPER. You won!";
    } else if(playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return "The computer chose ROCK. You lost!";
    } else if(playerSelection == computerSelection) {
        return "It's a tie!";
    } else {
        return "Please, enter a valid option.";
    }
}

