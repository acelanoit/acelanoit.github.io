import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = canvas.width * 0.7495;

    const background = new Image();
    background.src = "images/canvas-assets/background.png";

    const enemy = new Image();
    enemy.src = "images/canvas-assets/bug.png";

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

    const playerRun0 = new Image();
    const playerRun1 = new Image();
    const playerRun2 = new Image();
    const playerRun3 = new Image();
    const playerRun4 = new Image();
    const playerRun5 = new Image();
    const playerRun6 = new Image();
    const playerRun7 = new Image();
    const playerRun8 = new Image();
    const playerRun9 = new Image();

    const playerAttack0 = new Image();
    const playerAttack1 = new Image();
    const playerAttack2 = new Image();
    const playerAttack3 = new Image();
    const playerAttack4 = new Image();
    const playerAttack5 = new Image();
    const playerAttack6 = new Image();
    const playerAttack7 = new Image();
    const playerAttack8 = new Image();
    const playerAttack9 = new Image();

    const playerIdleImages = [];
    playerIdleImages.push(playerIdle0, playerIdle1, playerIdle2, playerIdle3, playerIdle4, playerIdle5, playerIdle6, playerIdle7, playerIdle8, playerIdle9);

    playerIdleImages.forEach((playerIdleImage, index) => playerIdleImage.src = `images/canvas-assets/Knight_03__IDLE_00${index}.png`);

    const playerRunImages = [];
    playerRunImages.push(playerRun0, playerRun1, playerRun2, playerRun3, playerRun4, playerRun5, playerRun6, playerRun7, playerRun8, playerRun9);

    playerRunImages.forEach((playerRunImage, index) => playerRunImage.src = `images/canvas-assets/Knight_03__RUN_00${index}.png`);

    const playerAttackImages = [];
    playerAttackImages.push(playerAttack0, playerAttack1, playerAttack2, playerAttack3, playerAttack4, playerAttack5, playerAttack6, playerAttack7, playerAttack8, playerAttack9);

    playerAttackImages.forEach((playerAttackImage, index) => playerAttackImage.src = `images/canvas-assets/Knight_03__ATTACK_00${index}.png`);

    const images = playerIdleImages.concat(playerRunImages, playerAttackImages);
    images.push(background, enemy);

    const spriteWidth = 1800;
    const spriteHeight = 1000;
    const scale = 0.05;
    let playerFrame = 0;
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

    function playerDraw(ctx) {
      const player = playerIdleImages[playerFrame];
      ctx.drawImage(player, 762, 208, 556, 472, canvas.width * 0.05, canvas.height - spriteHeight * scale - (canvas.height * 0.3), spriteWidth * scale, spriteHeight * scale);
    }

    // function enemyUpdate(deltaTime) {

    //   // Sprite animation:
    //   if (enemyFrame < 9) enemyFrame++;
    //   else enemyFrame = 0;
    // }

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
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      playerDraw(ctx);
      requestAnimationFrame(animate);
    }
  }, []);

  return <canvas ref={canvasRef} id="canvas1"></canvas>;
}
