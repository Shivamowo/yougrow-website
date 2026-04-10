import type { Metadata } from "next";
import Image from "next/image";
import { WORK_ITEMS } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Beyond Design's portfolio — branding, AI development, UI/UX, and fullstack engineering projects.",
};

export default function WorkPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <p className="section-eyebrow anim-fade-up" style={{ marginBottom: "1.5rem" }}>
          PORTFOLIO
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
          <span style={{ color: "var(--accent)" }}>WORK</span>
        </h1>
        <p
          className="font-sans anim-fade-up anim-delay-300"
          style={{
            marginTop: "2rem",
            fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
            color: "rgba(240,237,232,0.55)",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          A curated selection of projects where ambition met execution.
          Every pixel, every line of code — intentional.
        </p>
      </div>

      {/* Full grid */}
      <section
        style={{
          padding: "4rem clamp(1.2rem, 5vw, 5rem) 8rem",
          background: "var(--bg)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {WORK_ITEMS.map((item, i) => (
            <article
              key={item.id}
              id={item.id}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1.2fr 0.8fr" : "0.8fr 1.2fr",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {/* Image — always left on even, right on odd */}
              <div
                style={{
                  order: i % 2 === 0 ? 1 : 2,
                  position: "relative",
                  aspectRatio: "16/10",
                  background: "#1a1a1a",
                  overflow: "hidden",
                }}
                className="work-card"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="work-card-overlay" aria-hidden="true" />
              </div>

              {/* Copy */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <p
                  className="section-eyebrow"
                  style={{ marginBottom: "1rem" }}
                >
                  {item.category} / {item.year}
                </p>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)",
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    margin: "0 0 1.5rem",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  className="font-sans"
                  style={{
                    color: "rgba(240,237,232,0.6)",
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                    marginBottom: "2rem",
                    maxWidth: "400px",
                  }}
                >
                  {item.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <div
        style={{
          background: "#0d0d0d",
          borderTop: "1px solid rgba(240,237,232,0.06)",
          padding: "5rem clamp(1.2rem, 5vw, 5rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(240,237,232,0.75)",
          }}
        >
          Like what you see?
        </p>
        <a href="/contact" className="btn-primary font-sans" style={{ fontSize: "0.82rem", padding: "1rem 2.5rem" }}>
          START YOUR PROJECT →
        </a>
      </div>
    </>
  );
}
