"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section
      style={{
        padding: "10rem clamp(1.2rem, 5vw, 5rem)",
        textAlign: "center",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "650px",
          height: "420px",
          background: "radial-gradient(ellipse, rgba(255,77,28,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
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

      <Link
        href="/contact"
        className="btn-primary reveal reveal-delay-2 font-sans"
        style={{
          fontSize: "0.85rem",
          padding: "1.1rem 3.2rem",
          letterSpacing: "0.15em",
          textDecoration: "none",
          display: "inline-flex",
          position: "relative",
        }}
        aria-label="Start a new project with Beyond Design"
      >
        START A PROJECT
      </Link>
    </section>
  );
}
