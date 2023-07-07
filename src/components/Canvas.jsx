import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = canvas.width * 0.7495;
    // You can now use the canvas and context (ctx) here

    // Example: Drawing a red rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 100, 100);
  }, []);

  return <canvas ref={canvasRef} id="canvas1"></canvas>;
}
