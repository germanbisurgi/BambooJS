var Events = function () {
	'use strict';
	var self = this;

	self.pool = [];
	self.emitted = [];

	/**
     * Returns the event if exists.
     */
	self.get = function (pEventName) {
		var output = false;
		self.pool.forEach(function (event) {
			if (event.name === pEventName) {
				output = event
			}
		});
		return output;
	}

	/**
     * Returns the event listeners.
     */
	self.getListeners = function (pEvent) {
		return pEvent.listeners;
	}

	/**
     * Returns the listener of an event if it have it.
     */
	self.getListener = function (pEvent, pListener) {
		var output = false;
		pEvent.listeners.forEach(function (listener) {
			if (listener.listener === pListener) {
				output = listener;
			}
		});
		return output;
	}

	/**
     * creates an event and adds to it an event listener.
     * If the event already existe it just adds the listener to the event.
     */
	self.on = function (pEventName, pListener, pPriority, pOnce) {
		var event = self.get(pEventName);
		var listener = {
			priority: pPriority ? pPriority : 0,
			listener: pListener,
			once: pOnce ? pOnce : false
		}
		if (event) {
			event.listeners.push(listener);
		} else {
			var event = {
				name: pEventName,
				listeners: [],
			};
			event.listeners.push(listener);
			self.pool.push(event);
		}
	}

	/**
     * The same as "on" but the listener will be executed only once.
     */
	self.once = function (pEventName, pListener, pPriority) {
		self.on(pEventName, pListener, pPriority, true);
	}

	/**
     * Removes a listener of an event. If the event have no more listeners
     * the event will be removed to.
     */
	self.off = function (pEventName, pListener) {
		var event = self.get(pEventName);
		if (!event) {
			return false;
		} else {
			var listener = self.getListener(event, pListener);
			var index = event.listeners.indexOf(listener);
			if (index > -1) {
				event.listeners.splice(index, 1);
			}
		}
		if (event.listeners.length === 0) {
			var index = self.pool.indexOf(event);
			if (index > -1) {
				self.pool.splice(index, 1);
			}
		}
	}

	/**
     * Add the event to the emitted events pool. The listeners of this events
     * will be emitted when the "update" method will be called.
     */
	self.emit = function (pEventName) {
		var event = self.get(pEventName)
		if (event) {
			self.emitted.push(event)
		}
	}

	/**
     * Removes all events
     */
	self.clear = function () {
		self.pool = [];
	}

	/**
     * Call all the listeners functions of the emitted events order by priority.
     * Removes the listeners that have "once = true" after triggering 
     */
	self.update = function () {
		if (self.emitted !== []) {
			self.emitted.forEach(function (event) {
				event.listeners.sort(function(a, b) {
		            return a.priority - b.priority;
		        });
				event.listeners.forEach(function (listener) {
					listener.listener();
					window.requestAnimationFrame(function () {
						if (listener.once === true) {
							self.off(event.name, listener.listener)
						}
					});
				});
			});
			self.emitted = [];
		}
	}

}
