var Screen = function (pWidth, pHeight, pCanvas) {
    'use strict';
    var self = this;

    self.canvas = pCanvas;
    self.width = pWidth || window.innerWidth;
    self.height = pHeight || window.innerHeight;

    // ------------------------------------------------------------ core methods

    self.init = function () {
        self.resize(self.width, self.height);
        /*window.addEventListener('resize', function () {
            self.resize(window.innerWidth, window.innerHeight);
        });*/

    }

    self.resize = function (pWidth, pHeight) {
        self.width = pWidth;
        self.height = pHeight;
        self.canvas.width = pWidth;
        self.canvas.height = pHeight;
    };

    self.init();

};