var EntityManager = function (pGame) {
    'use strict';
    var self = this;
    self.game = pGame;
    
    self.pool = [];

    self.add = function(pX, pY, pWidth, pHeight) {
        var entity = new Bamboo.entity(pX, pY, pWidth, pHeight);
        self.pool.push(entity);
        return entity;
    };

    self.addImage = function(pImage, pX, pY, pWidth, pHeight) {
        var entity = new Bamboo.entity(pX, pY, pWidth, pHeight);
        var image = self.game.assets.get(pImage);
        entity.texture = {
            image: image,
            sourceX: 0,
            sourceY: 0,
            sourceWidth: image.width,
            sourceHeight: image.height
        };
        self.pool.push(entity);
        return entity;
    };
    
    self.list = function() {
        return self.pool();
    };

    self.extend = function(output) {
    output = output || {};

    for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i])  continue;

        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key))
            output[key] = arguments[i][key];
        }
    }
      return output;
    };

};