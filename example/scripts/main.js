// ------------------------------------------------------------- new bamboo game
var canvas = document.querySelector('.game-canvas')
var game = new Bamboo.game(400, 200, 70, canvas);

// ------------------------------------------------------------------ add states

game.addState(gameState);
game.addState(inputState);
game.addState(loadState);

// ----------------------------------------------- start the game from loadState

game.start('loadState');

// ---------------------------------------------------------------------- joypad

var previousState = document.querySelector('.joypad-previous-state');
var nextState = document.querySelector('.joypad-next-state');

previousState.onclick = function (e) {
    e.preventDefault();
    game.previousState();
};

nextState.onclick = function (e) {
    e.preventDefault();
    game.nextState();
};
