var gameState = new Bamboo.state('gameState');

gameState.create = function () {
    this.myCamera = this.cameras.current;
    this.myRefferenceEntity = this.entities.add(0, 0, 25, 25);
    this.myImage = this.entities.addImage('stone', 50, 50, 50, 50);
    this.mySprite = this.entities.addSprite('player', 50, 50, 50, 50, 32, 32);
    this.mySprite.addAnimation('up', [37, 38, 37, 36], 100);
    this.mySprite.addAnimation('right', [25, 26, 25, 24], 100);
    this.mySprite.addAnimation('down', [1, 2, 1, 0], 100);
    this.mySprite.addAnimation('left', [13, 14, 13, 12], 100);
    //console.log(this.mySprite);
    
    this.cameras.current.lerp = 5;
};

gameState.update = function () {

    

    if (this.inputs.keyboard.arrowUp) {
        this.mySprite.y -= this.time.toPPS(180);
        this.mySprite.play('up');
    }
    if (this.inputs.keyboard.arrowRight) {
        this.mySprite.x += this.time.toPPS(180);
        this.mySprite.play('right');
    }
    if (this.inputs.keyboard.arrowDown) {
        this.mySprite.y += this.time.toPPS(180);
        this.mySprite.play('down');
    }
    if (this.inputs.keyboard.arrowLeft) {
        this.mySprite.x -= this.time.toPPS(180);
        this.mySprite.play('left');
    }
    if (this.inputs.keyboard.w) {
        this.myCamera.zoom += this.time.toPPS(1);
    }
    if (this.inputs.keyboard.d) {
        this.myCamera.angle += this.time.toPPS(100);
    }
    if (this.inputs.keyboard.s) {
        this.myCamera.zoom -= this.time.toPPS(1);
    }
    if (this.inputs.keyboard.a) {
        this.myCamera.angle -= this.time.toPPS(100);
    }

    this.myCamera.follow(this.mySprite);
};

gameState.postRender = function () {
    this.renderer.context.fillText('currentState:    ' + this.name, 200, 15);
    this.renderer.context.fillText('state time:      ' +  Math.floor(this.time.current / 1000), 200, 30);
};