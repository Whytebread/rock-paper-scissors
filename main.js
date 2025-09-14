// RPS logic

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    if (computerSelection === 1) {
        computerSelection = "rock"
    } else if (computerSelection === 2) {
        computerSelection = "paper"
    } else {
        computerSelection = "scissors"
    }
    return computerSelection;
}

function getHumanChoice() {
    let humanSelection = prompt("rock, paper or scissors?")
    if (humanSelection === "rock" || humanSelection === "Rock" || humanSelection === "ROCK") {
        humanSelection = "rock"
        return humanSelection;
    } else if (humanSelection === "paper" || humanSelection === "Paper" || humanSelection === "PAPER") {
        humanSelection = "paper"
        return humanSelection;
    } else if (humanSelection == "scissors" || humanSelection ==="Scissors" || humanSelection === "SCISSORS") {
        humanSelection = "scissors"
        return humanSelection;
    } else {
        alert("Please select rock, paper or scissors only")
        return getHumanChoice();
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let roundCounter = 0;

// Score variables

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {

        console.log(humanChoice);
        console.log(computerChoice);

        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors!")
            humanScore++
            roundCounter++
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock!")
            computerScore++
            roundCounter++
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Draw! Rock equal to rock!")
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock!")
            humanScore++
            roundCounter++
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper!")
            computerScore++
            roundCounter++
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Draw! Paper equal to paper!")
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissors!")
            computerScore++
            roundCounter++
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper!")
            humanScore++
            roundCounter++
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("Draw! Scissors equal to scissors!")
        }

        console.log(roundCounter);
        console.log(humanScore);
        console.log(computerScore);

        if (roundCounter == 5) {
            if (humanScore > computerScore) {
                console.log("Congradulations! You win!")
            } else {
                console.log("You lost! Better luck next time!")
            }
        }
    }

    playRound(humanSelection, computerSelection);


}

playGame();

