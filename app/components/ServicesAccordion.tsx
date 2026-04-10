"use client";

import { useEffect, useState } from "react";
import { SERVICES, Service } from "@/app/lib/data";

interface AccordionItemProps {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ service, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={`accordion-item${isOpen ? " active" : ""}`}>
      <div
        className="accordion-header"
        onClick={onToggle}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`acc-body-${service.id}`}
        id={`acc-btn-${service.id}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <span className="accordion-title font-sans">{service.title}</span>
        <span className="accordion-icon" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>

      <div
        className="accordion-body"
        id={`acc-body-${service.id}`}
        role="region"
        aria-labelledby={`acc-btn-${service.id}`}
      >
        <div className="accordion-body-inner">
          <p className="font-sans">{service.body}</p>
          {service.tags && (
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.2rem", flexWrap: "wrap" }}>
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans"
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    padding: "0.3rem 0.8rem",
                    background: tag === "NEW ERA" ? "#FF4D1C" : "transparent",
                    border: tag !== "NEW ERA" ? "1px solid rgba(240,237,232,0.2)" : "none",
                    color: "#fff",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface ServicesAccordionProps {
  /** ID of the service to open by default */
  defaultOpen?: string | null;
  showHeader?: boolean;
}

export default function ServicesAccordion({
  defaultOpen = "ai",
  showHeader = true,
}: ServicesAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null);

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
      id="services"
      style={{
        padding: "8rem clamp(1.2rem, 5vw, 5rem)",
        background: "#0d0d0d",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {showHeader && (
          <h2
            className="reveal font-serif"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              fontWeight: 900,
              textAlign: "center",
              letterSpacing: "-0.02em",
              marginBottom: "4rem",
              color: "var(--fg)",
            }}
          >
            OUR SERVICES
          </h2>
        )}

        <div className="reveal reveal-delay-1">
          {SERVICES.map((svc) => (
            <AccordionItem
              key={svc.id}
              service={svc}
              isOpen={openId === svc.id}
              onToggle={() => setOpenId(openId === svc.id ? null : svc.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
