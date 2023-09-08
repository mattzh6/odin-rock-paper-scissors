const moves = {
    R: "Rock",
    P: "Paper",
    S: "Scissors"
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

console.log(getComputerChoice(moves));