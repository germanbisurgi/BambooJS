var Sprite = function (pImage, pSourceWidth, pSourceHeight, pGame) {
    "use strict";
    var self = this;

    self.game = pGame;
    self.texture = {
        image: pImage,
        sourceX: 0,
        sourceY: 0,
        sourceWidth: pSourceWidth,
        sourceHeight: pSourceHeight
    };
    self.delay = 0;
    self.counter = 0;
    self.animations = [];


    self.addAnimation = function (name, sequence, velocity) {
        if (!self.getAnimation(name)) {
            self.animations.push({
                name: name,
                sequence: sequence,
                velocity: velocity
            });
        }
    };

    self.getAnimation = function (animationName) {
        var output = false;
        self.animations.forEach(function(animation) {
            if (animation.name === animationName) {
                output = animation;
            }
        });
        return output;
    };

    self.play = function (animationName) {
        var animation = self.getAnimation(animationName);
        if (animation) {
            var columns = self.texture.image.width / self.texture.sourceWidth;
            var delta = self.game.currentState.time.delta;
            self.delay += delta * self.game.currentState.time.motion;

            if (self.delay >= animation.velocity) {
                self.counter = (self.counter + 1) % animation.sequence.length;
                self.delay = 0;
            }
            self.texture.sourceY = Math.floor((animation.sequence[self.counter] + 1) / columns) * self.texture.sourceHeight;
            self.texture.sourceX = self.texture.sourceWidth * animation.sequence[self.counter]  - self.texture.image.width * self.texture.sourceY / self.texture.sourceHeight;
        }
    };

};