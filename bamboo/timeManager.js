var TimeManager = function (pGame) {
    "use strict";
    var self = this;
    self.game = pGame;
    self.lastTime = 0;
    self.current = 0;
    self.delta = 0;
    self.motion = 1;
    self.paused = false;

    self.update = function (pDelta) {
        self.delta = 0;
        if (!self.paused) {
            self.lastTime = self.current;
            self.current = self.lastTime + Math.floor(pDelta) * self.motion;
            self.delta = self.current - self.lastTime;
        }
    };

    self.pauseTime = function() {
        self.paused = true;
    };

    self.continueTime = function() {
        self.paused = false;
    };

    self.toPPS = function(pVelocity) {
        return pVelocity * self.delta / 1000 * self.motion;
    };

    self.toDPS = function(pDegrees) {
        return pDegrees * self.delta / 1000 * self.motion;
    };

};