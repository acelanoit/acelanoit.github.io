import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = canvas.width * 0.7495;
    const fps = 20;
    const frameInterval = 1000 / fps;
    let frameTimer = 0;

    //////////////////// Enemy ////////////////////
    const enemy = new Image();
    enemy.src = "images/canvas-assets/bug.png";
    const enemyScale = 0.28;
    let enemyFrame = 0;
    const enemyWidth = 229 * enemyScale;
    let enemyX = canvas.width * (0.5 + Math.random() * 0.3);
    let enemyY = canvas.height - 171 * enemyScale - (canvas.height * 0.25);
    let enemyDefeated = false;

    function enemyUpdate(deltaTime) {

      // Sprite animation:
      if (frameTimer > frameInterval) {
        frameTimer = 0;
        if (enemyFrame < 5) enemyFrame++;
        else enemyFrame = 0;
      } else frameTimer += deltaTime;
    }

    function enemyDraw(ctx) {
      ctx.drawImage(enemy, enemyFrame * 229, 0, 229, 171, enemyX, enemyY, enemyWidth, 171 * enemyScale);
    }

    //////////////////// Player ////////////////////
    function createImageArray(imageType, imageCount) {
      const images = [];
      for (let i = 0; i < imageCount; i++) {
        const image = new Image();
        image.src = `images/canvas-assets/Knight_03__${imageType}_00${i}.png`;
        images.push(image);
      }
      return images;
    }

    const playerIdleImages = createImageArray("IDLE", 10);
    const playerRunImages = createImageArray("RUN", 10);
    const playerAttackImages = createImageArray("ATTACK", 10);
    const spriteWidth = 1800;
    const spriteHeight = 1000;
    const playerScale = 0.05;
    let playerFrame = 0;
    let playerStance = "idle";
    let playerSpeed = 0;
    let playerX = canvas.width * 0.05;
    let playerY = canvas.height - spriteHeight * playerScale - (canvas.height * 0.25);

    function playerUpdate(deltaTime) {

      // Sprite animation:
      if (frameTimer > frameInterval) {
        frameTimer = 0;
        if (playerFrame < 9) playerFrame++;
        else playerFrame = 0;
      } else frameTimer += deltaTime;
      playerX += playerSpeed;
    }

    function playerDraw(ctx, stance) {
      let player = null;
      if (stance === "idle") player = playerIdleImages[playerFrame];
      if (stance === "run") player = playerRunImages[playerFrame];
      if (stance === "attack") player = playerAttackImages[playerFrame];
      ctx.drawImage(player, 762, 208, 556, 472, playerX, playerY, spriteWidth * playerScale, spriteHeight * playerScale);
    }

    //////////////////// Background ////////////////////
    function createBackgroundArray() {
      const backgrounds = [];
      for (let i = 0; i < 4; i++) {
        const background = new Image();
        background.src = `images/canvas-assets/background_${i}.png`;
        backgrounds.push(background);
      }
      return backgrounds;
    }

    const backgrounds = createBackgroundArray();

    //////////////////// Text ////////////////////
    const texts = ["It's debug time!", "All bugs shall fall!", "Bug slayer, at your service!", "Bug squasher extraordinaire!", "Bug exterminator on the loose!", "We battle bugs and conquer!", "No bug is safe!", "Annihilate all bugs!", "Let the bug-bashing dance begin!", "Calling all bug busters!"];
    const randomText = texts[(Math.floor(Math.random() * texts.length))];
    let textDisplayed = false;

    function drawText(text, animationTimer) {
      ctx.font = "1rem Ghotic";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width * 0.5, canvas.height * 0.47);
      if (animationTimer > 2000) textDisplayed = true;
    }

    //////////////////// Explosion ////////////////////
    const explosion = new Image();
    explosion.src = "images/canvas-assets/boom.png";
    const explosionScale = 0.3;
    let explosionFrame = 0;
    let explosionTimer = 0;
    let explosionDisplayed = false;

    function explosionUpdate() {
      explosionTimer++;

      if (explosionTimer % 10 === 0) {

        // Run this code every 10 frames to slow down the animation:
        explosionFrame++;
        if (explosionFrame > 5) explosionDisplayed = false;
      }
    }

    function explosionDraw() {
      // Calculate the position of the explosion on top of the enemy
      const explosionX = enemyX + enemyWidth * 0.5 - 100 * explosionScale; // Adjust the X coordinate for centering the explosion
      const explosionY = enemyY * 1.2 - 89 * explosionScale; // Adjust the Y coordinate for proper alignment

      ctx.drawImage(explosion, 200 * explosionFrame, 0, 200, 179, explosionX, explosionY, 200 * explosionScale, 179 * explosionScale);
    }
    ////////////////////////////////////////////////////

    const images = playerIdleImages.concat(playerRunImages, playerAttackImages, backgrounds);
    images.push(enemy);
    const imageCount = playerIdleImages.length;
    let imagesLoaded = 0;

    // Wait for all images to load before calling animate function
    images.forEach(image => {
      image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imageCount) animate();
      };
    });

    let lastTime = 0;
    let animationTimer = 0;

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

      // Draw the enemy first
      if (!enemyDefeated) {
        enemyUpdate(deltaTime);
        enemyDraw(ctx);
      }

      // Draw the explosion if it's displayed
      if (explosionDisplayed) {
        explosionUpdate();
        explosionDraw();
      }

      playerUpdate(deltaTime);
      playerDraw(ctx, playerStance);

      animationTimer += deltaTime;
      if (!textDisplayed) drawText(randomText, animationTimer);
      if (animationTimer > 3000 && playerStance === "idle" && !enemyDefeated) {
        playerFrame = 0;
        playerStance = "run";
        playerSpeed = 1;
      }
      if (playerX > enemyX - enemyWidth - enemyWidth * 0.4 && playerStance === "run") {
        playerFrame = 0;
        playerStance = "attack";
        playerSpeed = 0;
      }
      if (playerFrame > 8 && playerStance === "attack" && !explosionDisplayed) {
        explosionDisplayed = true;
        enemyDefeated = true;
        playerFrame = 0;
        playerStance = "idle";
      }

      requestAnimationFrame(animate);
    }
  }, []);

  return <canvas ref={canvasRef} id="canvas1"></canvas>;
}
