var loadState = new Bamboo.state('loadState');

loadState.preload = function () {
    this.assets.loadImage('clouds', 'example/assets/images/clouds.jpg');
    this.assets.loadImage('grass', 'example/assets/images/grass.jpg');
    this.assets.loadImage('mine', 'example/assets/images/mine.png');
    this.assets.loadImage('pattern', 'example/assets/images/pattern.png');
    this.assets.loadImage('rocket', 'example/assets/images/rocket.png');
    this.assets.loadImage('snow', 'example/assets/images/snow.png');
    this.assets.loadImage('stone', 'example/assets/images/stone.png');
    this.assets.loadImage('mountains', 'example/assets/images/mountains.png');
    this.assets.loadImage('player', 'example/assets/images/player.png', 32, 32);
    this.assets.loadImage('tanks', 'example/assets/images/tanks.png', 32, 32);
    this.assets.loadAudio('tic', 'example/assets/audio/tic.mp3');
    this.assets.loadAudio('laser', 'example/assets/audio/laser.mp3');
    this.assets.loadAudio('shot', 'example/assets/audio/shot.mp3');
    this.assets.loadAudio('motor', 'example/assets/audio/motor.mp3');
};

loadState.create = function () {
    this.game.switchState('gameState');
};

loadState.postRender = function () {
    this.renderer.context.fillText('load progress: ' + this.assets.loadProgress().percent + '%', 200, 30);
    this.renderer.context.fillText('last loaded:     ' + this.assets.loadProgress().lastLoaded, 200, 45);
};