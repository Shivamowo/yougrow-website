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
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              paddingRight: "2rem",
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
                  color: j === 1 && i % 2 === 0 ? "#FF4D1C" : "var(--fg)",
                  opacity: j === 1 && i % 2 === 0 ? 1 : 0.9,
                  lineHeight: 1,
                }}
              >
                {word}
                {j < 2 && (
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#FF4D1C",
                      margin: "0 1.5rem",
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
