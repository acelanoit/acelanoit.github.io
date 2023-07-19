import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = canvas.width * 0.7495;

    const playerIdle0 = new Image();
    const playerIdle1 = new Image();
    const playerIdle2 = new Image();
    const playerIdle3 = new Image();
    const playerIdle4 = new Image();
    const playerIdle5 = new Image();
    const playerIdle6 = new Image();
    const playerIdle7 = new Image();
    const playerIdle8 = new Image();
    const playerIdle9 = new Image();

    const idleImages = [];
    idleImages.push(playerIdle0, playerIdle1, playerIdle2, playerIdle3, playerIdle4, playerIdle5, playerIdle6, playerIdle7, playerIdle8, playerIdle9);

    const spriteWidth = 1800;
    const spriteHeight = 1000;
    const scale = 0.06;
    let frame = 0;
    const imageCount = idleImages.length;
    let imagesLoaded = 0;

    const fps = 20;
    const frameInterval = 1000 / fps;
    let frameTimer = 0;

    idleImages.forEach((idleImage, index) => {
      idleImage.onload = function () {
        imagesLoaded++;
        if (imagesLoaded === imageCount) {
          animate();
        }
      };
      idleImage.src = `images/canvas-assets/Knight_03__IDLE_00${index}.png`;
    });

    function playerUpdate(deltaTime) {
      // Sprite animation:
      if (frameTimer > frameInterval) {
        frameTimer = 0;
        if (frame < 9) frame++;
        else frame = 0;
      } else frameTimer += deltaTime;
    }

    function playerDraw(ctx) {
      const player = idleImages[frame];
      ctx.drawImage(player, 762, 208, 556, 472, 0, canvas.height - spriteHeight * scale, spriteWidth * scale, spriteHeight * scale);
    }

    let lastTime = 0;

    function animate(timeStamp) {
      if (!lastTime) {
        lastTime = timeStamp; // set lastTime to current timestamp
        requestAnimationFrame(animate);
        return;
      }
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      playerUpdate(deltaTime);
      playerDraw(ctx);
      requestAnimationFrame(animate);
    }

    // The animation loop will start once all images are loaded and animate() is called from the last image's onload event.
  }, []);

  return <canvas ref={canvasRef} id="canvas1"></canvas>;
}
