var Screen = function (pWidth, pHeight) {
    'use strict';
    var self = this;

    self.width = pWidth || 400;
    self.height = pHeight || 200;
    self.grid = 12;

    self.resize = function (pWidth, pHeight) {
        self.width = pWidth;
        self.height = pHeight;
    };

    self.col = function (pColumns) {
        return self.width / self.grid * pColumns;
    };

};