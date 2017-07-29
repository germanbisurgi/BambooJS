var Game = function (pWidth, pHeight, pFPS, pCanvas) {
    'use strict';
    var self = this;
    self.states = [];
    self.currentState = null;

    // -------------------------------------------------------------------- init

    self.loop = new Bamboo.loop(pFPS);
    self.loader = new Bamboo.loader();
    self.inputs = new Bamboo.inputs(pCanvas);
    self.screen = new Bamboo.screen(pWidth, pHeight, pCanvas);
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
                    self.currentState.preloaded = true;
                    self.currentState.preload();
                    self.loader.loadAll();
                }

                // ------------------------------------------------------ create

                if (!self.currentState.created &&
                    self.currentState.preloaded &&
                    !self.loader.loading) {
                    self.currentState.created = true;
                    self.currentState.create();
                }

                // ------------------------------------------------------ update

                if (self.currentState.created) {
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
        pState.loader = self.loader;
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