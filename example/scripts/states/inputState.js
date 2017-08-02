var inputState = new Bamboo.state('inputState');

inputState.create = function () {
    this.myEntity = this.entities.addImage(50, 50, 50, 50);
};

inputState.update = function () {
    this.myEntity.angle += this.time.toPPS(90);
};

inputState.postRender = function () {
    this.renderer.context.fillText('currentState:    ' + this.name, 200, 15);
    this.renderer.context.fillText('state time:      ' +  Math.floor(this.time.current / 1000), 200, 30);
};