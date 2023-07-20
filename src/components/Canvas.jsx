import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = canvas.width * 0.7495;

    const enemy = new Image();
    enemy.src = "images/canvas-assets/bug.png";

    function createBackgroundArray() {
      const backgrounds = [];
      for (let i = 0; i < 4; i++) {
        const background = new Image();
        background.src = `images/canvas-assets/background_${i}.png`;
        backgrounds.push(background);
      }
      return backgrounds;
    }

    function createImageArray(imageType, imageCount) {
      const images = [];
      for (let i = 0; i < imageCount; i++) {
        const image = new Image();
        image.src = `images/canvas-assets/Knight_03__${imageType}_00${i}.png`;
        images.push(image);
      }
      return images;
    }

    const backgrounds = createBackgroundArray();

    const playerIdleImages = createImageArray("IDLE", 10);
    const playerRunImages = createImageArray("RUN", 10);
    const playerAttackImages = createImageArray("ATTACK", 10);

    const images = playerIdleImages.concat(playerRunImages, playerAttackImages, backgrounds);
    images.push(enemy);

    const spriteWidth = 1800;
    const spriteHeight = 1000;
    const playerScale = 0.05;
    const enemyScale = 0.28;
    let playerFrame = 0;
    let enemyFrame = 0;
    const enemyX = canvas.width * (0.5 + Math.random() * 0.3);
    const imageCount = playerIdleImages.length;
    let imagesLoaded = 0;

    const fps = 20;
    const frameInterval = 1000 / fps;
    let frameTimer = 0;

    // Wait for all images to load before calling animate function
    images.forEach(image => {
      image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imageCount) animate();
      };
    });

    function playerUpdate(deltaTime) {

      // Sprite animation:
      if (frameTimer > frameInterval) {
        frameTimer = 0;
        if (playerFrame < 9) playerFrame++;
        else playerFrame = 0;
      } else frameTimer += deltaTime;
    }

    function playerDraw(ctx, stance) {
      let player = null;
      if (stance === "idle") player = playerIdleImages[playerFrame];
      if (stance === "run") player = playerRunImages[playerFrame];
      if (stance === "attack") player = playerAttackImages[playerFrame];
      ctx.drawImage(player, 762, 208, 556, 472, canvas.width * 0.05, canvas.height - spriteHeight * playerScale - (canvas.height * 0.25), spriteWidth * playerScale, spriteHeight * playerScale);
    }

    function enemyUpdate(deltaTime) {

      // Sprite animation:
      if (frameTimer > frameInterval) {
        frameTimer = 0;
        if (enemyFrame < 5) enemyFrame++;
        else enemyFrame = 0;
      } else frameTimer += deltaTime;
    }

    function enemyDraw(ctx) {
      ctx.drawImage(enemy, enemyFrame * 229, 0, 229, 171, enemyX, canvas.height - 171 * enemyScale - (canvas.height * 0.25), 229 * enemyScale, 171 * enemyScale);
    }

    const texts = ["It's debug time!", "All bugs shall fall!", "Bug slayer, at your service!", "Bug squasher extraordinaire!", "Bug exterminator on the loose!", "We battle bugs and conquer!", "No bug is safe!", "Annihilate all bugs!", "Let the bug-bashing dance begin!", "Calling all bug busters!"];
    const randomText = texts[(Math.floor(Math.random() * texts.length))];
    let textDisplayed = false;

    function drawText(text, deltatime) {
      ctx.font = "1rem Ghotic";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width * 0.5, canvas.height * 0.47);
      setTimeout(() => {
        textDisplayed = true;;
      }, (2000 + deltatime));
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
      ctx.drawImage(backgrounds[0], 0, 0, canvas.width, canvas.height);
      playerUpdate(deltaTime);
      playerDraw(ctx, "idle");
      enemyUpdate(deltaTime);
      enemyDraw(ctx);
      if (!textDisplayed) drawText(randomText, deltaTime);
      requestAnimationFrame(animate);
    }
  }, []);

  return <canvas ref={canvasRef} id="canvas1"></canvas>;
}
