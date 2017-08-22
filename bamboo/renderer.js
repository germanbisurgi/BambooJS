var Renderer = function (pCanvas) {
    'use strict';
    var self = this;

    self.canvas = pCanvas;
    self.context = self.canvas.getContext("2d");

    // ------------------------------------------------------------ core methods

    self.clear = function () {
        self.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    self.draw = function (pEntities, pCamera, pScreen) {
        canvas.width = pScreen.width;
        canvas.height = pScreen.height;
        
        self.context.save();
        // camera width and height
        pCamera.width = pScreen.width;
        pCamera.height = pScreen.height;
        // camera rotation
        self.context.translate((pCamera.width * pCamera.anchorX), (pCamera.height * pCamera.anchorY));
        self.context.rotate(self.toRadians(-pCamera.angle));
        self.context.translate(-(pCamera.width * pCamera.anchorX), -(pCamera.height * pCamera.anchorY));
        //pCamera position
        self.context.translate(-pCamera.x, -pCamera.y);
        // camera zoom.
        self.context.scale(pCamera.zoom, pCamera.zoom); 


        if (pEntities.length > 0) {
            pEntities.forEach(function (e) {
                if (e.visible) {
                    self.context.save();
                    self.context.translate(e.x + (e.width * e.anchorX), e.y + (e.height * e.anchorY));
                    self.context.rotate(self.toRadians(e.angle));
                    self.context.globalAlpha = e.opacity;

                    if (!e.texture) {
                        self.context.beginPath();
                        self.context.rect(
                            e.width  * -e.anchorX,
                            e.height * -e.anchorY,
                            e.width,
                            e.height
                        );
                        self.context.fill();
                    } else {
                        self.context.drawImage(
                            e.texture.image,
                            e.texture.x,
                            e.texture.y,
                            e.texture.width,
                            e.texture.height,
                            e.width  * -e.anchorX,
                            e.height * -e.anchorY,
                            e.width,
                            e.height
                        );
                    }

                    self.context.restore();
                }
            });
        }
        
        // camera transforms.
        self.context.restore();

    };

    self.toRadians = function (pDegrees) {
        return pDegrees * 0.0174532925199432957;
    };

};