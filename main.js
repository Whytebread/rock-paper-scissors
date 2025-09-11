// RPS logic

function getComputerChoice() {
    let computerSelection = Math.random() * 3
        if (computerSelection <= 1) {
            computerSelection = "rock"
        } else if (computerSelection <= 2) {
            computerSelection = "paper"
        } else {
            computerSelection = "scissors"
        }
}

function getHumanChoice() {
    let humanSelection = prompt("rock, paper, or scissors?")
        if (humanSelection = "rock" || "Rock" || "ROCK") {
           return humanSelection = "rock"
        } else if (humanSelection = "paper" || "Paper" || "PAPER") {
           return humanSelection = "paper"
        } else if (humanSelection = "scissors" || "Scissors" || "SCISSORS") {
           return humanSelection = "scissors"
        } else {
            return prompt("Please select rock, paper, or scissors");
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {

}

playRound(humanSelection, computerSelection);

function playGame() {
    
}

// Score variables

let humanScore = 0;
let computerScore = 0;