var State = function (pName) {
    'use strict';
    var self = this;

    self.name = pName;
    self.initialized = false;
    self.preloaded = false;
    self.created = false;
    self.game = null;
    self.loop = null;
    self.loader = null;
    self.inputs = null;
    self.screen = null;
    self.renderer = null;
    

    self.init = function () {
        self.time = new Bamboo.timeManager(self.game);
        self.entities = new Bamboo.entityManager(self.game);
        self.cameras = new Bamboo.cameraManager(self.screen);
        self.initialized = true;
    };


    // ------------------------------------------------------------ core methods

    self.preload = function () {};

    self.create = function () {};
    
    self.update = function () {};
    
    self.shutdown = function () {};

};