var TileSprite = function (pTexture, pGame) {

    "use strict";
    var self = this;
    self.game = pGame;

    var tmpCanvas = document.createElement('canvas');
    var tmpContext = tmpCanvas.getContext('2d');
    tmpCanvas.width = pTexture.width * 2;
    tmpCanvas.height = pTexture.height * 2;
    tmpContext.drawImage(pTexture.image, 0, 0, pTexture.width * 0.5, pTexture.height * 0.5);
    tmpContext.drawImage(pTexture.image, pTexture.width * 0.5, 0, pTexture.width * 0.5, pTexture.height * 0.5);
    tmpContext.drawImage(pTexture.image, 0, pTexture.height * 0.5, pTexture.width * 0.5, pTexture.height * 0.5);
    tmpContext.drawImage(pTexture.image, pTexture.width * 0.5, pTexture.height * 0.5, pTexture.width * 0.5, pTexture.height * 0.5);
    pTexture.image = tmpCanvas;
    pTexture.width  *= 0.5;
    pTexture.height *= 0.5;

    self.texture = pTexture;

    self.scroll = function (pDirection, pVelocity) {
        if (pDirection ==='left') {
            self.texture.x += self.game.currentState.time.toPPS(pVelocity);
            if (self.texture.x + self.texture.width >= self.texture.width * 2) {
                self.texture.x = 0;
            }
        }
        if (pDirection ==='right') {
            self.texture.x -= self.game.currentState.time.toPPS(pVelocity);
            if (self.texture.x <= 0) {
                self.texture.x = self.texture.width;
            }
        }
        if (pDirection ==='up') {
            self.texture.y += self.game.currentState.time.toPPS(pVelocity);
            if (self.texture.y + self.texture.height >= self.texture.height * 2) {
                self.texture.y = 0;
            }
        }
        if (pDirection ==='down') {
            self.texture.y -= self.game.currentState.time.toPPS(pVelocity);
            if (self.texture.y <= 0) {
                self.texture.y = self.texture.height;
            }
        }
    };

};