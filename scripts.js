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