"use client";

const WORDS = ["DREAM", "DESIGN", "DELIVER"] as const;

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      style={{
        background: "#0f0f0f",
        borderTop: "1px solid rgba(240,237,232,0.06)",
        borderBottom: "1px solid rgba(240,237,232,0.06)",
        padding: "1.4rem 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee-track">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {WORDS.map((word, j) => (
              <span
                key={word}
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  color: j === 2 && i % 1 === 0 ? "#FF4D1C" : "var(--fg)",
                  opacity: j === 1 && i % 2 === 0 ? 1 : 0.9,
                  lineHeight: 1,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {word}
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#FF4D1C",
                    margin: "0 1.8rem",
                  }}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
