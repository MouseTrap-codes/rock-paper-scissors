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


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // make case insensitive

    if (humanChoice === computerChoice) {
        alert(`both you and the bot played ${humanChoice}! 
            the round was a tie!`);
        return -1;
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            alert(`you lose -> ${computerChoice} beats ${humanChoice} :(`)
            return 0;
        } else if (computerChoice === "scissors") {
            alert(`you win! ${humanChoice} beats ${computerChoice}!!!`);
            return 1;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            alert(`you lose -> ${computerChoice} beats ${humanChoice} :(`)
            return 0;
        } else if (computerChoice === "paper") {            
            alert(`you win! ${humanChoice} beats ${computerChoice}!!!`);
            return 1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            alert(`you lose -> ${computerChoice} beats ${humanChoice} :(`)
            return 0;
        } else if (computerChoice === "rock") {
            alert(`you win! ${humanChoice} beats ${computerChoice}!!!`);
            return 1;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 4; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);
        
        if (result === 0) {
            computerScore++;
        } else if (result === 1) {
            humanScore++;
        } 
    }

    if (humanScore > computerScore) {
        alert(`you won with a score of ${humanScore} - ${computerScore}!!!`);
    } else if (computerScore > humanScore) {
        alert(`you lost ${humanScore} - ${computerScore} :(`);
    } else {
        alert("it was a tie :/");
    }  
}

playGame();