var Events = function () {
    'use strict';
    var self = this;

    self.pool = [];
    self.emitted = [];

    self.on = function (pEventName, pEventHandler, pOnce) {
        var event = {
            name: pEventName,
            handler: pEventHandler,
            once: pOnce ? pOnce : false
        };
        self.pool.push(event);
    }

    self.off = function (pEventName) {
        self.pool.forEach(function (event) {
            if (event.name === pEventName) {
                var index = self.pool.indexOf(event);
                if (index > -1) {
                    self.pool.splice(index, 1);
                }
            }
        });
    }

    self.emit = function (pEventName) {
        self.pool.forEach(function (event) {
            if (event.name === pEventName) {
                self.emitted.push(event)
            } else {
                console.log('"', pEventName, '"', 'does not exist in the event emitter pool')
            }
        });
    }

    self.list = function () {
        return self.pool;
    }

    self.clear = function () {
        self.pool = [];
    }

    self.update = function () {
        self.emitted.forEach(function (event) {
            event.handler();
            if (event.once === true) {
                self.off(event.name);
            }
        });
        self.emitted = [];
    }

}