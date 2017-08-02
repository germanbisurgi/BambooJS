var Screen = function (pWidth, pHeight) {
    'use strict';
    var self = this;

    self.width = pWidth || 400;
    self.height = pHeight || 200;
    self.grid = 12;

    self.init = function () {
        //self.resize(400, 200);
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