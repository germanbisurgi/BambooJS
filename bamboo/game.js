var Game = function (pFPS, pCanvas) {
    'use strict';
    var self = this;
    self.states = [];
    self.currentState = null;

    // -------------------------------------------------------------------- init

    self.loop = new Bamboo.loop(pFPS);
    self.assets = new Bamboo.assets();
    self.inputs = new Bamboo.inputs(pCanvas);
    self.screen = new Bamboo.screen();
    self.renderer = new Bamboo.renderer(pCanvas);

    self.init = function () {
        
        self.loop.start(function () {

            if (self.currentState) {

                // -------------------------------------------------- initialize

                if (!self.currentState.initialized) {
                    self.currentState.init();
                }
                
                // ----------------------------------------------------- preload

                if (!self.currentState.preloaded) {

                    //  before preload
                    self.currentState.beforePreload();

                    self.currentState.preloaded = true;
                    self.currentState.preload();
                    self.assets.loadAll();
                }

                // ----------------------------------------------- after preload

                self.currentState.loading();

                // ------------------------------------------------------ create

                if (!self.currentState.created &&
                    self.currentState.preloaded &&
                    !self.assets.loading) {

                    // before create
                    self.currentState.beforeCreate();

                    self.currentState.created = true;
                    self.currentState.create();

                    // after create
                    self.currentState.afterCreate();
                }

                // ------------------------------------------------------ update

                if (self.currentState.created) {
                    self.currentState.events.update();
                    self.currentState.update();
                    self.currentState.time.update(self.loop.delta);
                
                    // -------------------------------------------------- render

                    //self.renderer.clear();
                    
                    self.renderer.draw(
                        self.currentState.entities.pool,
                        self.currentState.cameras.current,
                        self.screen
                    );

                    // --------------------------------------------- post render
                    
                    self.currentState.postRender();
                    
                }
            }
        });
    };

    // ------------------------------------------------------------ core methods

    self.start = function(pStateName) {
        game.switchState(pStateName);
        self.init();
    };

    self.addState = function(pState) {
        pState.game = self;
        pState.loop = self.loop;
        pState.assets = self.assets;
        pState.inputs = self.inputs;
        pState.screen = self.screen;
        pState.renderer = self.renderer;
        self.states.push(pState);
    };

    self.switchState = function(pStateName) {
        self.states.forEach(function (state) {
            if (state.name === pStateName) {
                self.currentState = state;
            }
        });
    };

    self.nextState = function() {
        var currentIndex = self.states.indexOf(self.currentState);
        var nextIndex = (currentIndex + 1) % self.states.length;
        self.currentState = self.states[nextIndex];
    };

    self.previousState = function() {
        var currentIndex = self.states.indexOf(self.currentState);
        var previousIndex = currentIndex - 1;
        if (previousIndex < 0) {
            previousIndex = self.states.length - 1;
        }
        self.currentState = self.states[previousIndex];
    };

};