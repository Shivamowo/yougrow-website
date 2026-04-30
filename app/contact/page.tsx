import type { Metadata } from "next";
import BookingForm from "@/app/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Ready to start your project? Book a discovery call with the YouGrow team — we'll respond within 24 hours.",
};

const REASONS = [
  {
    icon: "01",
    title: "No fluff, just clarity",
    body: "We respect your time. Our first call is focused on understanding your challenge, not pitching.",
  },
  {
    icon: "02",
    title: "Senior team, guaranteed",
    body: "You'll always speak to the people who build, not account managers. Direct access, always.",
  },
  {
    icon: "03",
    title: "Response in 24 hours",
    body: "We commit to responding within one business day — and we mean it.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <p className="section-eyebrow anim-fade-up" style={{ marginBottom: "1.5rem" }}>
          LET&apos;S TALK
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
          BOOK
          <br />
          A <span style={{ color: "var(--accent)" }}>CALL</span>
        </h1>
        <p
          className="font-sans anim-fade-up anim-delay-300"
          style={{
            marginTop: "2rem",
            fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
            color: "rgba(240,237,232,0.55)",
            maxWidth: "440px",
            lineHeight: 1.7,
          }}
        >
          Have a project in mind? Let&apos;s make it happen. Fill out the
          form — we&apos;ll reach out within 24 hours.
        </p>
      </div>

      {/* Main content */}
      <section
        style={{
          padding: "4rem clamp(1.2rem, 5vw, 5rem) 8rem",
          background: "var(--bg)",
        }}
      >
        <div className="contact-grid">
          {/* Left — agency reassurance */}
          <div>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                fontWeight: 700,
                marginBottom: "2.5rem",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "var(--fg)",
              }}
            >
              Why teams choose
              <br />
              <span style={{ color: "var(--accent)" }}>YouGrow</span>
            </h2>

            {REASONS.map(({ icon, title, body }) => (
              <div
                key={icon}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  className="font-serif"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                    paddingTop: "4px",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </span>
                <div>
                  <h3
                    className="font-sans"
                    style={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--fg)",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{
                      color: "rgba(240,237,232,0.5)",
                      lineHeight: 1.7,
                      fontSize: "0.88rem",
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}

            {/* Contact info */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(240,237,232,0.08)",
              }}
            >
              <p
                className="font-sans"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.35)",
                  marginBottom: "0.75rem",
                }}
              >
                Or reach us directly
              </p>
              <a
                href="mailto:hello@beyonddesign.studio"
                className="font-sans"
                style={{
                  color: "var(--fg)",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,77,28,0.4)",
                  paddingBottom: "2px",
                  transition: "border-color 0.3s ease, color 0.3s ease",
                }}
              >
                hello@beyonddesign.studio
              </a>
            </div>
          </div>

          {/* Right — booking form */}
          <div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
