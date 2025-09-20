// global variables
const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissors_btn = document.querySelector("#scissors");

const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const winDisplay = document.querySelector(".end-result");
const roundDisplay = document.querySelector(".round-result");

// event listenters
rock_btn.addEventListener("click", ()=> {
  humanChoice === "rock";
});

paper_btn.addEventListener("click", ()=> {
  humanChoice === "paper";
});

scissors_btn.addEventListener("click", ()=> {
  humanChoice === "scissors";
});


function playGame() {

    let roundCounter = 0;

    // Score variables
    let humanScore = 0;
    let computerScore = 0;

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

    // while (roundCounter < 5) {
        const computerSelection = getComputerChoice();
        function playRound(humanChoice, computerChoice) {

            console.log(`Human choice: ${humanChoice}`);
            console.log(`Computer choice: ${computerChoice}`);


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
                roundCounter++
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
                roundCounter++
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
                roundCounter++
            }

            console.log(`Round: ${roundCounter}`);
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);

        }

        playRound(humanSelection, computerSelection);
        if (roundCounter === 5) {
            if (humanScore > computerScore) {
                console.log("Congratulations! You win!");
            } else if (humanScore === computerScore) {
                console.log("Draw!");
            } else {
                console.log("You lose! Better luck next time!");
            }
        }

    // }
}


playGame();

