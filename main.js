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

function playGame() {

    function playRound(humanChoice, computerChoice) {
        
        let roundCounter = 0;

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors!")
        humanScore++ && roundCounter++
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++ && roundCounter++
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Draw! Rock equal to rock!")
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!")
        humanScore++ && roundCounter++
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper!")
        computerScore++ && roundCounter++
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Draw! Paper equal to paper!")
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors!")
        computerScore++ && roundCounter++
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper!")
        humanScore++ && roundCounter++
    } else {
        (humanChoice == "scissors" && computerChoice == "scissors") 
        console.log("Draw! Scissors equal to scissors!")
    }
}

playRound(humanSelection, computerSelection);


}

playGame(playRound)

// Score variables

let humanScore = 0;
let computerScore = 0;