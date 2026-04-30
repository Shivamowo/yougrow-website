"use client";

import Link from "next/link";
import React from "react";

interface ProjectButtonProps {
  text?: string;
  href?: string;
  className?: string;
}

export default function ProjectButton({ text = "START A PROJECT", href = "/contact", className = "font-sans" }: ProjectButtonProps) {
  return (
    <Link
      href={href}
      className={className}
      style={{
        fontSize: "0.95rem",
        fontWeight: 500,
        padding: "1rem 2rem 1rem 2.2rem",
        letterSpacing: "0.02em",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        color: "#fff",
        position: "relative",
        borderRadius: "9999px",
        background: "linear-gradient(90deg, rgba(20,20,20,0.8) 0%, rgba(255,77,28,0.3) 100%)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), inset -3px 0 15px rgba(255,77,28,0.6)",
        backdropFilter: "blur(12px)",
        transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,0.15), inset -5px 0 25px rgba(255,77,28,0.8), 0 0 30px -10px rgba(255,77,28,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,0.08), inset -3px 0 15px rgba(255,77,28,0.6)";
      }}
      aria-label="Start a new project with YouGrow"
    >
      <span>{text}</span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "transform 0.3s ease" }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
