var Assets = function () {
    "use strict";
    var self = this;
    self.loading = false;
    self.downloadQueue = [];
    self.successCount = 0;
    self.errorCount = 0;
    self.lastLoaded = null;
    self.assets = [];

    self.reset = function () {
        self.downloadQueue = [];
        self.successCount = 0;
        self.errorCount = 0;
    };

    self.listAssets = function () {
        return self.assets;
    };

    self.loadAudio = function(pAudioName, pPath) {
        self.downloadQueue.push({
            type: 'audio',
            name: pAudioName,
            path: pPath
        });
    };

    self.loadImage = function(pImageName, pPath) {
        self.downloadQueue.push({
            type: 'image',
            name: pImageName,
            path: pPath
        });
    };

    self.get = function(pAssetName) {
        var output = false;
        self.assets.forEach(function (asset) {
            if (asset.name === pAssetName) {
                output = asset;
            }
        });
        return output;
    };

    self.loadAll = function () {
        if (self.downloadQueue.length > 0) {

            self.loading = true;
            self.downloadQueue.forEach(function (asset) {

                if (!self.get(asset.name)) {

                    // ------------------------------------- image and sprite sheets

                    if (asset.type === 'image') {

                        var img = new Image();

                        img.onload = function() {
                            self.lastLoaded = asset.name;
                            self.successCount++;
                            if (self.loadComplete ()) {
                                self.loading = false;
                                self.reset();
                            }
                        };

                        img.onerror = function() {
                            self.errorCount++;
                            if (self.loadComplete ()) {
                                self.loading = false;
                                self.reset();
                            }
                        };

                        img.src = asset.path;
                        var image = img;
                        image.name = asset.name;
                        self.assets.push(image);

                    }

                    if (asset.type === 'audio') {
                        var audio = new Audio();
                        audio.oncanplaythrough = function() {
                            self.lastLoaded = asset.name;
                            self.successCount++;
                            if (self.loadComplete ()) {
                                self.loading = false;
                                self.reset();
                            }
                        };
                        audio.onerror = function() {
                            self.errorCount++;
                            if (self.loadComplete ()) {
                                self.loading = false;
                                self.reset();
                            }
                        };
                        audio.src = asset.path;
                        audio.name = asset.name;
                        self.assets.push(audio);
                    }


                } else {
                    // Exception.
                    console.log('this asset already exist and will be not queued or loaded ->', asset.name);
                    self.successCount++;
                    if (self.loadComplete ()) {
                        self.loading = false;
                        self.reset();
                    }
                }

            });
        }
    };

    self.loadProgress = function () {
        var progress = Math.floor((self.successCount + self.errorCount) / self.downloadQueue.length * 100);
        if (isNaN(progress)) {
            progress = 100;
        }
        return {
            percent: progress,
            lastLoaded: self.lastLoaded
        };
    };

    self.loadComplete  = function () {
        return self.downloadQueue.length === self.successCount + self.errorCount;
    };

};