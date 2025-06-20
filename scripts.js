function getComputerChoice() {
    const rand = Math.random()
    if (rand < .34) {
        return "rock";
    } else if (rand < .67) {
        return "paper";
    } else if (rand < 1) {
        return "scissors";
    }
}




function playRound(humanChoice, computerChoice) {
    const roundResult = document.querySelector(".round-result");
    const runningScore = document.querySelector(".running-score");
    if (humanChoice === computerChoice) {
        roundResult.textContent = `both you and the bot played ${humanChoice}! the round was a tie!`;
        runningScore.textContent = `running score: ${humanScore} - ${computerScore}`;
        return -1;
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            roundResult.textContent = `you lose -> ${computerChoice} beats ${humanChoice} :(`;
            runningScore.textContent = `running score: ${humanScore} - ${computerScore}`;
            return 0;
        } else if (computerChoice === "scissors") {
            roundResult.textContent = `you win! ${humanChoice} beats ${computerChoice}!!!`;
            runningScore.textContent = `running score: ${humanScore} - ${computerScore}`;
            return 1;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            roundResult.textContent =`you lose -> ${computerChoice} beats ${humanChoice} :(`;
            runningScore.textContent = `running score: ${humanScore} - ${computerScore}`;
            return 0;
        } else if (computerChoice === "paper") {            
            roundResult.textContent = `you win! ${humanChoice} beats ${computerChoice}!!!`;
            runningScore.textContent = `running score: ${humanScore} - ${computerScore}`;
            return 1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            roundResult.textContent = `you lose -> ${computerChoice} beats ${humanChoice} :(`;
            runningScore.textContent = `running score: ${humanScore} - ${computerScore}`;
            return 0;
        } else if (computerChoice === "rock") {
            roundResult.textContent = `you win! ${humanChoice} beats ${computerChoice}!!!`;
            runningScore.textContent = `running score: ${humanScore} - ${computerScore}`;
            return 1;
        }
    }

    
}


let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("div");

let humanChoice;
container.addEventListener("click", (event) => {
    let target = event.target;
    let humanChoice;
    console.log(target);
        
    if (target.classList.contains("rock")) {
        humanChoice = "rock";
    } else if (target.classList.contains("paper")) {
        humanChoice = "paper";
    } else if (target.classList.contains("scissors")) {
        humanChoice = "scissors";
    }

    if (humanScore < 5 && computerScore < 5) {
        computerChoice = getComputerChoice()
        let result = playRound(humanChoice, computerChoice);
        if (result === 0) {
            computerScore++;
        } else if (result === 1) {
            humanScore++;
        } else {
            humanScore++;
            computerScore++;
        }
    } else {

        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorsBtn = document.querySelector(".scissors");

        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();

        console.log("test");

        const verdict = document.querySelector(".verdict")
        const roundResult = document.querySelector(".round-result");
        roundResult.textContent = "";


        if (humanScore > computerScore) {
            verdict.textContent = `you won ${humanScore} - ${computerScore}!!!`;
        } else if (computerScore > humanScore) {
            verdict.textContent = `you lost ${humanScore} - ${computerScore} :(`;
        } else {
            verdict.textContent = "it was a tie :/";
        }  

        const resetGameBtn = document.createElement("button");
        resetGameBtn.textContent = "reset game!";
        container.appendChild(resetGameBtn);

        resetGameBtn.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            
            const runningScoreReset = document.querySelector(".running-score");
            const roundResultReset = document.querySelector(".roundResultReset");
            roundResultReset.textContent = "game reset!";
            runningScoreReset.textContent = "running-score: 0 - 0";
            verdict.textContent = '';

            resetGameBtn.remove();

            const childrenOfContainer = container.children;

            container.insertBefore(rockBtn, childrenOfContainer[0]);
            container.insertBefore(paperBtn, childrenOfContainer[1]);
            container.insertBefore(scissorsBtn, childrenOfContainer[2]);


        })
    }
});

