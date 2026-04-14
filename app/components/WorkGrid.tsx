"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WORK_ITEMS } from "@/app/lib/data";

interface WorkGridProps {
  /** Pass a number to show only the first N items (homepage preview) */
  limit?: number;
  /** Override section heading */
  showHeader?: boolean;
}

export default function WorkGrid({ limit, showHeader = true }: WorkGridProps) {
  const items = limit ? WORK_ITEMS.slice(0, limit) : WORK_ITEMS;

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="work"
      style={{
        padding: "8rem clamp(1.2rem, 5vw, 5rem)",
        background: "var(--bg)",
      }}
    >
      {showHeader && (
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>
              OUR WORK
            </p>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "rgba(240,237,232,0.8)",
                maxWidth: "500px",
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              &ldquo;Ideas alone don&apos;t matter.
              <br />
              Execution does — see for yourself.&rdquo;
            </p>
          </div>

          {limit && (
            <Link
              href="/work"
              className="nav-link"
              style={{
                fontSize: "0.72rem",
                alignSelf: "flex-end",
                paddingBottom: "2px",
                textDecoration: "none",
              }}
              aria-label="View full work portfolio"
            >
              VIEW ALL →
            </Link>
          )}
        </div>
      )}

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: limit ? "repeat(auto-fit, minmax(300px, 1fr))" : "repeat(auto-fit, minmax(420px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {items.map((item, i) => (
          <article
            key={item.id}
            className={`reveal reveal-delay-${(i % 4) + 1}`}
            aria-label={item.title}
          >
            <Link
              href={`/work#${item.id}`}
              style={{ display: "block", textDecoration: "none" }}
              aria-label={`View ${item.title} project`}
            >
              <div
                className="work-card"
                style={{
                  aspectRatio: "16/10",
                  background: "#1a1a1a",
                  position: "relative",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="work-card-overlay" aria-hidden="true" />

                {/* View Project hover pill */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.5)",
                    padding: "0.6rem 1.4rem",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                  className="card-view-label"
                >
                  VIEW PROJECT →
                </div>

                <div className="work-card-info">
                  <p
                    className="font-sans"
                    style={{
                      margin: 0,
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      color: "rgba(240,237,232,0.5)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.category} / {item.year}
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                      letterSpacing: "0.06em",
                      color: "var(--fg)",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
