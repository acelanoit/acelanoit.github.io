import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const uiLayerRef = useRef(null);
  const gameLayerRef = useRef(null);
  const backgroundLayerRef = useRef(null);

  useEffect(() => {
    const uiLayer = uiLayerRef.current;
    const ctxUiLayer = uiLayer.getContext("2d");
    const gameLayer = gameLayerRef.current;
    const ctxGameLayer = gameLayer.getContext("2d");
    const backgroundLayer = backgroundLayerRef.current;
    const ctxBackgroundLayer = backgroundLayer.getContext("2d");
    uiLayer.height = uiLayer.width * 0.7495;
    gameLayer.height = uiLayer.width * 0.7495;
    backgroundLayer.height = uiLayer.width * 0.7495;
    const fps = 20;
    const frameInterval = 1000 / fps;
    let frameTimer = 0;

    //////////////////// Enemy ////////////////////
    const enemy = new Image();
    enemy.src = "images/canvas-assets/bug.png";
    const enemyWidth = 64.12;
    const enemyHeight = 47.88;
    let enemyX = gameLayer.width * (0.5 + Math.random() * 0.3);
    let enemyY = gameLayer.height - enemyHeight - (gameLayer.height * 0.25);
    let enemyFrame = 0;
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
      ctx.drawImage(
        enemy,
        enemyFrame * 229,
        0,
        229,
        171,
        enemyX,
        enemyY,
        enemyWidth,
        enemyHeight
      );
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
    const playerWidth = 90;
    const playerHeight = 50;
    let playerX = gameLayer.width * 0.05;
    let playerY = gameLayer.height - playerHeight - gameLayer.height * 0.25;
    let playerFrame = 0;
    let playerStance = "idle";
    let playerSpeed = 0;

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
      ctx.drawImage(player, 742, 100, 608, 580, playerX, playerY, playerWidth, playerHeight);
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
    let randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    //////////////////// Text ////////////////////
    const texts = [
      "It's debug time!",
      "All bugs shall fall!",
      "Bug slayer, at your service!",
      "Bug squasher extraordinaire!",
      "Bug exterminator on the loose!",
      "We battle bugs and conquer!",
      "No bug is safe!",
      "Annihilate all bugs!",
      "Let the bug-bashing dance begin!",
      "Calling all bug busters!",
      "Prepare to be debugged!",
      "Bug-free zone ahead!",
      "Bugs, beware!",
      "Bug problems? Solved!",
      "No bug can escape me!",
      "The bug apocalypse is here!",
    ];
    let randomText = texts[Math.floor(Math.random() * texts.length)];
    let textDisplayed = false;

    function drawText(ctx, text, animationTimer) {
      ctx.clearRect(0, 0, uiLayer.width, uiLayer.height);
      ctx.font = "1rem Gothic";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(text, uiLayer.width * 0.5, uiLayer.height * 0.47);
      if (animationTimer > 2000) textDisplayed = true;
    }

    //////////////////// Explosion ////////////////////
    const explosion = new Image();
    explosion.src = "images/canvas-assets/boom.png";
    const explosionWidth = 80;
    const explosionHeight = 71.6;
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

    function explosionDraw(ctx) {
      // Calculate the position of the explosion on top of the enemy
      const explosionX = enemyX + enemyWidth * 0.5 - 40; // Adjust the X coordinate for centering the explosion
      const explosionY = enemyY * 1.2 - 35.6; // Adjust the Y coordinate for proper alignment

      ctx.drawImage(
        explosion,
        200 * explosionFrame,
        0,
        200,
        179,
        explosionX,
        explosionY,
        explosionWidth,
        explosionHeight
      );
    }
    ////////////////////////////////////////////////////

    const images = playerIdleImages.concat(playerRunImages, playerAttackImages, backgrounds);
    images.push(enemy);
    const imageCount = playerIdleImages.length;
    let imagesLoaded = 0;

    // Wait for all images to load before calling animate function
    images.forEach((image) => {
      image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imageCount) animate();
      };
    });

    let lastTime = 0;
    let animationTimer = 0;

    function reset() {
      ctxBackgroundLayer.clearRect(0, 0, backgroundLayer.width, backgroundLayer.height);
      enemyFrame = 0;
      enemyX = backgroundLayer.width * (0.5 + Math.random() * 0.3);
      enemyDefeated = false;
      playerFrame = 0;
      playerX = backgroundLayer.width * 0.05;
      randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      randomText = texts[Math.floor(Math.random() * texts.length)];
      textDisplayed = false;
      animationTimer = 0;
      explosionDisplayed = false;
      explosionFrame = 0;
    }

    function animate(timeStamp) {
      if (!lastTime) {
        lastTime = timeStamp; // set lastTime to current timestamp
        requestAnimationFrame(animate);
        return;
      }
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;

      ctxGameLayer.clearRect(0, 0, gameLayer.width, gameLayer.height);
      ctxBackgroundLayer.drawImage(randomBackground, 0, 0, backgroundLayer.width, backgroundLayer.height);

      // Draw the enemy first
      if (!enemyDefeated) {
        enemyUpdate(deltaTime);
        enemyDraw(ctxGameLayer);
      }

      // Draw the explosion if it's displayed
      if (explosionDisplayed) {
        explosionUpdate();
        explosionDraw(ctxGameLayer);
      }

      playerUpdate(deltaTime);
      playerDraw(ctxGameLayer, playerStance);

      animationTimer += deltaTime;
      if (!textDisplayed) drawText(ctxUiLayer, randomText, animationTimer);
      else ctxUiLayer.clearRect(0, 0, uiLayer.width, uiLayer.height);
      if (animationTimer > 3000 && playerStance === "idle" && !enemyDefeated) {
        playerFrame = 0;
        playerStance = "run";
        playerSpeed = 2;
      }
      if (playerX > enemyX - enemyWidth - enemyWidth * 0.35 && playerStance === "run") {
        playerFrame = 0;
        playerStance = "attack";
        playerSpeed = 0;
      }
      if (playerFrame > 8 && playerStance === "attack" && !explosionDisplayed) {
        explosionDisplayed = true;
        enemyDefeated = true;
        playerFrame = 0;
        playerStance = "idle";
        setTimeout(reset, 2000 + deltaTime);
      }
      requestAnimationFrame(animate);
    }
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={uiLayerRef} id="ui-layer"></canvas>
      <canvas ref={gameLayerRef} id="game-layer"></canvas>
      <canvas ref={backgroundLayerRef} id="background-layer"></canvas>
    </div>
  );
}
