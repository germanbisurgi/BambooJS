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

    self.addSprite = function(pImage, pX, pY, pWidth, pHeight, pSourceWidth, pSourceHeight) {
        var entity = new Bamboo.entity(pX, pY, pWidth, pHeight);
        var image = self.game.assets.get(pImage);
        var sprite = new Bamboo.sprite(image, pSourceWidth, pSourceHeight, self.game);
        var extended = self.extend(entity, sprite);
        
        self.pool.push(entity);
        return entity;
    };
    
    self.list = function() {
        return self.pool();
    };

    self.extend = function(objA, objB) {
        var members = objB;
        for (var member in members) {
            objA[member] = members[member];
        }
        return objA
    };

};