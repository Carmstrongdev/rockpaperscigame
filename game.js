const choices = ["rock", "paper", "scissors"];

const choiceEmoji = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const tieScoreElement = document.getElementById("tie-score");

const playerChoiceElement = document.getElementById("player-choice");
const computerChoiceElement = document.getElementById("computer-choice");

const resultElement = document.getElementById("result");
const statusElement = document.getElementById("status");

const choiceButtons = document.querySelectorAll(".choice-button");
const resetButton = document.getElementById("reset-button");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "tie";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    }

    return "computer";
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    playerChoiceElement.textContent = choiceEmoji[playerChoice];
    computerChoiceElement.textContent = choiceEmoji[computerChoice];

    if (winner === "player") {
        playerScore++;
        resultElement.textContent = "YOU WIN!";
        statusElement.textContent = "PLAYER VICTORY";
    } else if (winner === "computer") {
        computerScore++;
        resultElement.textContent = "COMPUTER WINS!";
        statusElement.textContent = "COMPUTER VICTORY";
    } else {
        tieScore++;
        resultElement.textContent = "IT'S A TIE!";
        statusElement.textContent = "DRAW";
    }

    updateScoreboard();
}

function updateScoreboard() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    tieScoreElement.textContent = tieScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;

    playerChoiceElement.textContent = "?";
    computerChoiceElement.textContent = "?";

    resultElement.textContent = "Make your choice.";
    statusElement.textContent = "READY";

    updateScoreboard();
}

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

resetButton.addEventListener("click", resetGame);
