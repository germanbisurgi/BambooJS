var Loop = function (pFPS) {
    'use strict';
    var self = this;
    
    self.FPS = pFPS || 60;
    self.delta = null;
    self.paused = false;

    // -------------------------------------------------------------------- init

    self.init = function () {
        window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  function( callback ){
                    window.setTimeout(callback, 1000 / self.FPS);
                  };
        })();
    };

    // ------------------------------------------------------------ core methods

    self.start = function(pTask) {
        var lastTime = 0;
        function tick(now) {
            if (!self.paused) {
                requestAnimFrame(tick);
                if (!lastTime) {
                    lastTime = Math.floor(now);
                }
                self.delta = now - lastTime;   
                if (self.delta >= 1000 / self.FPS) {
                    pTask();
                    lastTime = Math.floor(now);
                }
            }
        }
        requestAnimFrame(tick);
    };

    self.pause = function () {
       self.paused = true;
    };

    self.continue = function () {
       self.paused = false;
    };

    self.isPaused = function () {
        return self.paused;
    };

    self.getDelta = function () {
        return self.delta;
    };

    self.init();
    
};