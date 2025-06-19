function getComputerChoice() {
    if (Math.random() < .34) {
        return "rock";
    } else if (Math.random() < .67) {
        return "paper";
    } else if (Math.random() < 1) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter your play (rock, paper, or scissors):");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // make case insensitive

    if (humanChoice === computerChoice) {
        console.log(`both you and the bot played ${humanChoice}!. The round was a tie!`);
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(`you lose -> ${computerChoice} beats ${humanChoice} :(`)
        } else if (computerChoice === "scissors") {
            console.log(`you win! ${humanChoice} beats ${computerChoice}!!!`);
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log(`you lose -> ${computerChoice} beats ${humanChoice} :(`)
        } else if (computerChoice === "paper") {            
            console.log(`you win! ${humanChoice} beats ${computerChoice}!!!`);
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log(`you lose -> ${computerChoice} beats ${humanChoice} :(`)
        } else if (computerChoice === "rock") {
            console.log(`you win! ${humanChoice} beats ${computerChoice}!!!`);
        }
    }
}