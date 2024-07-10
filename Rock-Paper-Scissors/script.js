const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function updateScores() {
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(humanChoice) {
    if (computerScore === 5 || humanScore === 5) {
        return;
    }

    roundCount++;
    let computerChoice = getComputerChoice();
    let result;

    if (humanChoice === computerChoice) {
        result = 'It\'s a tie!';
        humanScore++;
        computerScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        humanScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    updateScores();
    let roundResult = `${result} You chose ${capitalize(humanChoice)}, computer chose ${capitalize(computerChoice)}`;
    document.getElementById("roundResults").innerHTML += `<p>Round ${roundCount}: ${roundResult}</p>`;

    if (computerScore === 5 || humanScore === 5) {
        displayFinalResult();
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function displayFinalResult() {
    let finalResult;
    if (humanScore > computerScore) {
        finalResult = `🎉🏆 You win the game! Your score: ${humanScore}, Computer score: ${computerScore}`;
    } else if (humanScore < computerScore) {
        finalResult = `😞 You lose the game! Your score: ${humanScore}, Computer score: ${computerScore}`;
    } else {
        finalResult = `🤝 It\'s a tie game! Your score: ${humanScore}, Computer score: ${computerScore}`;
    }

    document.getElementById("finalResult").innerHTML = finalResult;
    document.getElementById("restartButton").style.display = "block";
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.getElementById("roundResults").innerHTML = "";
    document.getElementById("finalResult").innerHTML = "";
    updateScores();
    document.getElementById("restartButton").style.display = "none";
}

document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        let humanChoice = event.target.getAttribute('data-choice');
        playRound(humanChoice);
    });
});
