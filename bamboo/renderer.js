var Renderer = function (pCanvas) {
    'use strict';
    var self = this;

    self.canvas = pCanvas;
    self.context = self.canvas.getContext("2d");
    

    // ------------------------------------------------------------ core methods

    self.clear = function () {
        self.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    self.draw = function (entities, camera, screen) {
        canvas.width = screen.width;
        canvas.height = screen.height;
        
        self.context.save();
        // camera width and height
        camera.width = screen.width;
        camera.height = screen.height;
        // camera rotation
        self.context.translate((camera.width * camera.anchorX), (camera.height * camera.anchorY));
        self.context.rotate(self.toRadians(-camera.angle));
        self.context.translate(-(camera.width * camera.anchorX), -(camera.height * camera.anchorY));
        //camera position
        self.context.translate(-camera.x, -camera.y);
        // camera zoom.
        self.context.scale(camera.zoom, camera.zoom); 


        if (entities.length > 0) {
            entities.forEach(function (e) {
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
                            e.texture,
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