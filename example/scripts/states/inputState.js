var inputState = new Bamboo.state('inputState');

inputState.create = function () {
    this.myEntity = this.entities.add(50, 50, 50, 50);
};

inputState.update = function () {
    this.myEntity.angle += this.time.toPPS(90);
};

inputState.shutdown = function () {};