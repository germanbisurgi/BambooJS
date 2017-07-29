var loadState = new Bamboo.state('loadState');

loadState.preload = function () {
    this.loader.loadImage('clouds', 'example/assets/images/clouds.jpg');
    this.loader.loadImage('grass', 'example/assets/images/grass.jpg');
    this.loader.loadImage('mine', 'example/assets/images/mine.png');
    this.loader.loadImage('pattern', 'example/assets/images/pattern.png');
    this.loader.loadImage('rocket', 'example/assets/images/rocket.png');
    this.loader.loadImage('snow', 'example/assets/images/snow.png');
    this.loader.loadImage('stone', 'example/assets/images/stone.png');
    this.loader.loadImage('mountains', 'example/assets/images/mountains.png');
    this.loader.loadImage('player', 'example/assets/images/player.png', 32, 32);
    this.loader.loadImage('tanks', 'example/assets/images/tanks.png', 32, 32);
    this.loader.loadAudio('tic', 'example/assets/audio/tic.mp3');
    this.loader.loadAudio('laser', 'example/assets/audio/laser.mp3');
    this.loader.loadAudio('shot', 'example/assets/audio/shot.mp3');
    this.loader.loadAudio('motor', 'example/assets/audio/motor.mp3');
};

loadState.create = function () {
    this.game.switchState('gameState');
};

loadState.postRender = function () {
    this.renderer.context.fillText('load progress: ' + this.loader.loadProgress().percent + '%', 200, 30);
    this.renderer.context.fillText('last loaded:     ' + this.loader.loadProgress().lastLoaded, 200, 45);
};