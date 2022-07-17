const { game, newGame, showScore, addTurn, lightsOn, showTurns } = require("../game");

//This is the standard set up for all HTML files
// We will just change the file names per file we test
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    // Test Game Score
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    // Test currentGame() - array
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    // Test playerMoves() - array
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    // Test choices() - array
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    // Test that the choices has 4 buttons with ids button2....
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
    test("turnNumber key exists", () => {
        expect("turnNumber" in game).toBe(true);
    });
});

describe("newGame works correctly", () => {
    // we want to set up the game with fake values so we can see if the game resets them
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should be one element in the compters array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("currentGame array should clear", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});

describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    test("should add correct class to light up the button", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
    test("showTurns should update game.turnNumber", () => {
        game.turnNumber = 42;
        showTurns();
        expect(game.turnNumber).toBe(0);
    });
});