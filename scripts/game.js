let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

// New Game function:
// Reset score to 0
// Clear the playerMoves array 
// Clear the currentGame array
function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore()
    addTurn();
};

// Add Turn
// Clear the playerMoves array
// Randomly add a button ID to the currentGame array
// Call showTurns() function
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
};

// show score function
function showScore() {
    document.getElementById("score").innerText = game.score;
};

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    // Removes the class afte 400ms
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
};

// There are curly braces as we will export more than one function
module.exports = { game, newGame, showScore, addTurn, lightsOn };