var State = function (pName) {
    'use strict';
    var self = this;

    self.name = pName;
    self.initialized = false;
    self.preloaded = false;
    self.created = false;
    self.game = null;
    self.loop = null;
    self.assets = null;
    self.inputs = null;
    self.screen = null;
    self.renderer = null;

    self.init = function () {
        self.physics = new Bamboo.physics();
        self.time = new Bamboo.timeManager(self.game);
        self.entities = new Bamboo.entityManager(self.game);
        self.cameras = new Bamboo.cameraManager(self.screen);
        self.events = new Bamboo.events();
        self.initialized = true;
    };

    // ------------------------------------------------------------ core methods

    self.beforePreload = function () {};

    self.preload = function () {};

    self.loading = function () {};

    self.beforeCreate = function () {};

    self.create = function () {};

    self.afterCreate = function () {};
    
    self.update = function () {};

    self.postRender = function () {};
    
    self.shutdown = function () {};

};