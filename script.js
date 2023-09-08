// Each key will contain a value of the move that defeats it

const moves = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
}

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

    if (moves[playerSelection] === computerSelection) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (moves[computerSelection] === playerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return "It's a Draw!";
    }
}

// Create a game function that plays multiple rounds
function game() {
    

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please type a move (rock, paper, scissors)");
        let computerSelection = getComputerChoice(moves);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();