var EntityManager = function (pGame) {
    'use strict';
    var self = this;
    
    self.pool = [];

    self.add = function(pX, pY, pWidth, pHeight) {
        var entity = new Bamboo.entity(pX, pY, pWidth, pHeight);
        self.pool.push(entity);
        return entity;
    };
    
    self.list = function() {
        return self.pool();
    };

};