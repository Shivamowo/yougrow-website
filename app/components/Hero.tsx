"use client";

import WaveCanvas from "@/app/components/WaveCanvas";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Black half — BEYOND DESIGN */}
      <div
        style={{
          paddingTop: "8rem",
          paddingLeft: "clamp(1.2rem, 5vw, 5rem)",
          paddingRight: "clamp(1.2rem, 5vw, 5rem)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <h1
          className="anim-fade-up font-serif"
          style={{
            fontSize: "clamp(4.5rem, 14vw, 14rem)",
            fontWeight: 900,
            lineHeight: 0.85,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          BEYOND
          <br />
          DESIGN
        </h1>

        <p
          className="anim-fade-up anim-delay-200 font-serif"
          style={{
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
            marginTop: "1rem",
            color: "rgba(240,237,232,0.7)",
            letterSpacing: "0.02em",
          }}
        >
          you imagine
        </p>
      </div>

      {/* Wave row */}
      <div
        className="anim-fade-up anim-delay-400"
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(60px, 8vw, 100px)",
          marginTop: "0.5rem",
        }}
      >
        <WaveCanvas />
        <span
          className="font-sans"
          style={{
            position: "absolute",
            right: "clamp(1.2rem, 5vw, 5rem)",
            bottom: "50%",
            transform: "translateY(50%)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "rgba(240,237,232,0.8)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          we build
        </span>
      </div>

      {/* Light half — INDULGING EXPERIENCE */}
      <div
        style={{
          background: "linear-gradient(180deg, #e8e4df 0%, #d5d0ca 100%)",
          padding: "2rem clamp(1.2rem, 5vw, 5rem) 3.5rem",
          position: "relative",
        }}
      >
        {/* Orange bleed glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-60px",
            left: "clamp(1rem, 3vw, 3rem)",
            width: "320px",
            height: "130px",
            background: "radial-gradient(ellipse, rgba(255,100,40,0.28) 0%, transparent 70%)",
            filter: "blur(32px)",
            pointerEvents: "none",
          }}
        />

        <h2
          className="anim-fade-up anim-delay-500 font-serif"
          style={{
            fontSize: "clamp(3rem, 11vw, 11.5rem)",
            fontWeight: 900,
            lineHeight: 0.88,
            color: "#0a0a0a",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          INDULGING
          <br />
          EXPERIENCE
        </h2>

        <p
          className="anim-fade-up anim-delay-700 font-sans"
          style={{
            marginTop: "1.5rem",
            fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)",
            color: "rgba(10,10,10,0.65)",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          we don&apos;t just build websites, we build{" "}
          <strong style={{ color: "#FF4D1C", fontWeight: 700 }}>
            scalable
          </strong>{" "}
          experiences
        </p>
      </div>
    </section>
  );
}
