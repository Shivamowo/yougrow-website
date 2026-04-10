"use client";

import { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      offsetRef.current += 0.4;

      // Glow layer
      ctx.save();
      ctx.filter = "blur(8px)";
      ctx.strokeStyle = "rgba(255, 100, 40, 0.4)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      for (let x = 0; x <= W; x++) {
        const y =
          H / 2 +
          Math.sin((x / W) * Math.PI * 3 + offsetRef.current * 0.018) * H * 0.28 +
          Math.sin((x / W) * Math.PI * 7 + offsetRef.current * 0.025) * H * 0.12;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Sharp layer
      ctx.strokeStyle = "#FF4D1C";
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "rgba(255,77,28,0.7)";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      for (let x = 0; x <= W; x++) {
        const y =
          H / 2 +
          Math.sin((x / W) * Math.PI * 3 + offsetRef.current * 0.018) * H * 0.28 +
          Math.sin((x / W) * Math.PI * 7 + offsetRef.current * 0.025) * H * 0.12;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    />
  );
}
