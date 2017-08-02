var physicsState = new Bamboo.state('physicsState');

physicsState.create = function () {
    console.log(this.physics);
    this.myEntity = this.entities.addImage('disc', 50, 50, 100, 100);
};

physicsState.afterCreate = function () {
    var loadScreen = document.querySelector('.loading');
    loadScreen.classList.remove('show');
};

physicsState.update = function () {
};

physicsState.postRender = function () {
    this.renderer.context.fillText('currentState:    ' + this.name, 200, 15);
    this.renderer.context.fillText('state time:      ' +  Math.floor(this.time.current / 1000), 200, 30);
};