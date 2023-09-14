// Each key will contain a value of the move that defeats it

const moves = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
}

let playerWins = 0;
let computerWins = 0;

function getComputerChoice(moves) {
    if (moves === null) {
        return "No move";
    }

    let count = 0;
    let chosenMoveIndex = Math.floor(Math.random() * 3);
    let chosenMove = null;

    for (move in moves) {
        if (count++ === chosenMoveIndex) {
            chosenMove = move;
        }
    }

    return chosenMove;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const results = document.querySelector(".results");

    if (moves[playerSelection] === computerSelection) {
        computerWins++;
        results.innerText = `Player wins: ${playerWins} | Computer wins: ${computerWins}\n`;
        if (computerWins >= 5) {
            results.innerText += "Computer wins!";
            computerWins = 0;
            playerWins = 0;
        }
    }
    else if (moves[computerSelection] === playerSelection) {
        playerWins++;
        results.innerText = `Player wins: ${playerWins} | Computer wins: ${computerWins}\n`;
        if (playerWins >= 5) {
            results.innerText += "Player wins!";
            computerWins = 0;
            playerWins = 0;
        }
    }
}

// Create a game function that plays multiple rounds

const playerMoves = document.querySelectorAll(".move");
playerMoves.forEach(
    (playerMove) => playerMove.addEventListener("click", 
    event => playRound(event.target.innerText, getComputerChoice(moves))));


