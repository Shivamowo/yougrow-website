"use client";

import { useState } from "react";
import ProjectButton from "@/app/components/ProjectButton";

export default function CTA() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate distance from center in pixels
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPos({ x: 0, y: 0 });
      }}
      style={{
        padding: "10rem clamp(1.2rem, 5vw, 5rem)",
        textAlign: "center",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow decoration with smooth liquid tracking */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${isHovered ? pos.x : 0}px), calc(-50% + ${isHovered ? pos.y : 0}px))`,
          width: "700px",
          height: "700px",
          background: "radial-gradient(ellipse, rgba(255,77,28,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <h2
        className="reveal font-serif"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 7rem)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          marginBottom: "3rem",
          color: "var(--fg)",
          lineHeight: 1,
          position: "relative",
        }}
      >
        READY TO EVOLVE?
      </h2>

      <ProjectButton text="START A PROJECT" className="reveal reveal-delay-2 font-sans" />
    </section>
  );
}
