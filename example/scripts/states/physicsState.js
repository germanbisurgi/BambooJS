var physicsState = new Bamboo.state('physicsState');

physicsState.create = function () {
    var debugContext = document.querySelector('.physics-canvas').getContext("2d")
    this.physics.init(60, 0, 50, true, debugContext);
    this.rectangle = this.physics.addRectangle(95, 150, 5, 5, 'static');
    this.physics.addEdge(10, 160, 190, 191, 'static');
    this.physics.addEdge(190, 190, 390, 160, 'static');
    this.circle = this.physics.addCircle(100, 50, 50, 'dynamic');
    this.myEntity = this.entities.addImage('disc', 50, 50, 100, 100);

    console.log(this.physics);
    console.log(this.rectangle);
    console.log(this.circleFixture);


    
};

physicsState.afterCreate = function () {
    var loadScreen = document.querySelector('.loading');
    loadScreen.classList.remove('show');
};

physicsState.update = function () {
    this.myEntity.x = this.circle.GetPosition().x*30-this.myEntity.width/2;
    this.myEntity.y = this.circle.GetPosition().y*30-this.myEntity.height/2;
    this.myEntity.angle = this.circle.GetAngle() * 57.295779513082320876;
};

physicsState.postRender = function () {
    this.renderer.context.fillText('currentState:    ' + this.name, 200, 15);
    this.renderer.context.fillText('state time:      ' +  Math.floor(this.time.current / 1000), 200, 30);
};