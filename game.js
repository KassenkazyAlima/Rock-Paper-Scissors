let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    while (!['rock', 'paper', 'scissors'].includes(humanChoice)) {
        humanChoice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let resultMessage = `You chose ${humanChoice}, Computer chose ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultMessage += `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage += `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
    }
    document.getElementById("result").textContent = resultMessage;
    document.getElementById("score").textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        let finalMessage = (humanScore === 5) ? "Congratulations! You won the game!" : "Sorry! The computer won the game!";
        
        // Display final result
        document.getElementById("winner").textContent = finalMessage;

        humanScore = 0;
        computerScore = 0;

        document.getElementById("score").textContent = `Score - You: 0, Computer: 0`;
        document.getElementById("result").textContent = '';
    } else {
        document.getElementById("winner").textContent = '';
    }
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    if (humanScore < 5 && computerScore < 5) {
        setTimeout(playGame, 500);  
    }
}


playGame();
