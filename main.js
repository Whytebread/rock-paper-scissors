// RPS logic

function getComputerChoice() {
    let choice = Math.random() * 3
        if (choice <= 1) {
            choice = "rock"
        } else if (choice <= 2) {
            choice = "paper"
        } else {
            choice = "scissors"
        }
}

function getHumanChoice() {

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