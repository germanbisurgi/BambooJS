// ------------------------------------------------------------- new bamboo game

var canvas = document.querySelector('.game-canvas');
var game = new Bamboo.game({
    width: 400,
    height: 200,
    FPS: 60,
    canvas: canvas,
    states: [loadState, gameState, physicsState],
    initialState: 'loadState'
});

game.start();

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