// ------------------------------------------------------------- new bamboo game
var canvas = document.querySelector('.game-canvas')
var game = new Bamboo.game(70, canvas);

// ------------------------------------------------------------------ add states

game.addState(gameState);
game.addState(inputState);
game.addState(loadState);

// ----------------------------------------------- start the game from loadState

game.start('loadState');

// -------------------------------------------------------------------------- ui

var previousState = document.querySelector('.ui-previous-state');
var nextState = document.querySelector('.ui-next-state');

previousState.onclick = function (e) {
    e.preventDefault();
    game.previousState();
};

nextState.onclick = function (e) {
    e.preventDefault();
    game.nextState();
};