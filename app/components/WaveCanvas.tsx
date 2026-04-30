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
      ctx.filter = "blur(20px)";
      ctx.strokeStyle = "rgba(255, 100, 40, 0.5)";
      ctx.lineWidth = 10;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 4) {
        const y =
          H / 2 +
          Math.sin((x / W) * Math.PI * 2.5 + offsetRef.current * 0.015) * H * 0.28 +
          Math.sin((x / W) * Math.PI * 4.5 + offsetRef.current * 0.02) * H * 0.14 +
          Math.sin((x / W) * Math.PI * 11 + offsetRef.current * 0.025) * H * 0.04;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Sharp layer - Multiple abstract lines
      const numLines = 15;
      ctx.strokeStyle = "rgba(255, 77, 28, 0.4)";
      ctx.lineWidth = 1.2;
      ctx.shadowColor = "rgba(255, 77, 28, 0.3)";
      ctx.shadowBlur = 4;
      
      for (let i = 0; i < numLines; i++) {
        const phaseShift1 = i * 0.19;
        const phaseShift2 = i * -0.11;
        const ampMod = 1 + Math.sin(i) * 0.15;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 2) {
          const y =
            H / 2 +
            Math.sin((x / W) * Math.PI * 2.5 + offsetRef.current * 0.015 + phaseShift1) * H * 0.28 * ampMod +
            Math.sin((x / W) * Math.PI * 4.5 + offsetRef.current * 0.02 + phaseShift2) * H * 0.14 +
            Math.sin((x / W) * Math.PI * 11 + offsetRef.current * 0.025 + phaseShift1 * 1.5) * H * 0.04;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
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
