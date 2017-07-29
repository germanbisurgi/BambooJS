var Entity = function (pX, pY, pWidth, pHeight, pGame) {
    "use strict";
    var self = this;

    self.x = pX;
    self.y = pY;
    self.width = pWidth;
    self.height = pHeight;
    self.anchorX = 0.5;
    self.anchorY =  0.5;
    self.angle = 0;
    self.opacity = 1.0;
    self.visible = true;

};