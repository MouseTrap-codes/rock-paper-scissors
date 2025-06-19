function getComputerChoice() {
    if (Math.random() < .34) {
        return "rock";
    } else if (Math.random() < .67) {
        return "paper";
    } else if (Math.random() < 1) {
        return "scissors";
    }
}
