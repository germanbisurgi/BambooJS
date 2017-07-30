var Screen = function () {
    'use strict';
    var self = this;

    self.width = 400;//window.innerWidth;
    self.height = 200;//window.innerHeight;
    self.grid = 12;

    self.init = function () {
        self.resize(400, 200);
        /*window.addEventListener('resize', function () {
            self.resize(window.innerWidth, window.innerHeight);
        });*/
    }

    self.resize = function (pWidth, pHeight) {
        self.width = pWidth;
        self.height = pHeight;
    };

    self.col = function (columnNumber) {
        return self.width / self.grid * columnNumber;
    }

    self.init();

};