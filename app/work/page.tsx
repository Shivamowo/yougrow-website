import type { Metadata } from "next";
import Image from "next/image";
import { WORK_ITEMS } from "@/app/lib/data";
import ProjectButton from "@/app/components/ProjectButton";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore YouGrow's portfolio — branding, AI development, UI/UX, and fullstack engineering projects.",
};

export default function WorkPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
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
          padding: "4rem clamp(1.2rem, 5vw, 5rem) 6rem",
          background: "var(--bg)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, max(400px, calc(50% - 2rem))), 1fr))",
            gap: "2.5rem"
          }}
        >
          {WORK_ITEMS.map((item, i) => (
            <article
              key={item.id}
              id={item.id}
              className={`anim-fade-up anim-delay-${(i % 4) * 100 + 300}`}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  background: "#1a1a1a",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Black Footer Bar */}
              <div
                style={{
                  background: "#080808",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderTop: "none"
                }}
              >
                <span className="font-sans" style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 300, letterSpacing: "0.02em" }}>
                  {item.title}
                </span>
                <span style={{ color: "#fff", fontSize: ".6rem" }}>
                  →
                </span>
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
        <ProjectButton text="START YOUR PROJECT" />
      </div>
    </>
  );
}
