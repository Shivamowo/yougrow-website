import type { Metadata } from "next";
import ServicesAccordion from "@/app/components/ServicesAccordion";
import ProjectButton from "@/app/components/ProjectButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "YouGrow offers fullstack development, UI/UX design, brand building, brand revamp, and AI automation services.",
};

const STATS = [
  { value: "40+", label: "Projects Delivered" },
  { value: "4×", label: "Avg. Performance Gain" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <p className="section-eyebrow anim-fade-up" style={{ marginBottom: "1.5rem" }}>
          WHAT WE DO
        </p>
        <h1
          className="font-serif anim-fade-up anim-delay-100"
          style={{
            fontSize: "clamp(3rem, 8vw, 8rem)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            margin: 0,
          }}
        >
          OUR
          <br />
          <span style={{ color: "var(--accent)" }}>SERVICES</span>
        </h1>
        <p
          className="font-sans anim-fade-up anim-delay-300"
          style={{
            marginTop: "2rem",
            fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
            color: "rgba(240,237,232,0.55)",
            maxWidth: "500px",
            lineHeight: 1.7,
          }}
        >
          From concept to code, we handle the full stack. Every service is
          designed to compound — so your investment scales with you.
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          padding: "0 clamp(1.2rem, 5vw, 5rem)",
          background: "var(--bg)",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            border: "1px solid rgba(240,237,232,0.06)",
          }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="stat-box">
              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  color: "var(--accent)",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  color: "rgba(240,237,232,0.45)",
                  marginTop: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Full accordion */}
      <ServicesAccordion showHeader={false} defaultOpen={null} />

      {/* Why us section */}
      <section
        style={{
          padding: "6rem clamp(1.2rem, 5vw, 5rem)",
          background: "var(--bg)",
        }}
      >
        <div
          className="services-why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <p className="section-eyebrow" style={{ marginBottom: "1.5rem" }}>
              WHY YOUGROW
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                margin: 0,
              }}
            >
              WE BUILD FOR
              <br />
              <span style={{ color: "var(--accent)" }}>SCALE.</span>
            </h2>
          </div>
          <div>
            <p
              className="font-sans"
              style={{
                color: "rgba(240,237,232,0.6)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              We&apos;re not a factory. We&apos;re a dedicated, senior-level team that
              treats every project like our own. Small enough to care deeply.
              Experienced enough to deliver with confidence.
            </p>
            <p
              className="font-sans"
              style={{
                color: "rgba(240,237,232,0.6)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              Every engagement comes with a dedicated lead, transparent
              timelines, and a codebase you actually own — not locked into
              proprietary platforms.
            </p>
            <div style={{ marginTop: "2.5rem" }}>
              <ProjectButton text="GET A QUOTE" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
