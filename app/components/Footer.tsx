import Link from "next/link";
import Logo from "@/app/components/Logo";

const SOCIALS = [
  { label: "INSTAGRAM", href: "#" },
  { label: "LINKEDIN", href: "#" },
  { label: "TWITTER / X", href: "https://x.com/YouGrowwai" },
] as const;

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(240,237,232,0.06)",
        padding: "3rem clamp(1.2rem, 4vw, 3rem)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
        <a href="/" style={{ textDecoration: "none" }} aria-label="YouGrow home">
          <Logo size="sm" />
        </a>
      </div>

      <p
        className="font-sans"
        style={{
          fontSize: "0.68rem",
          color: "rgba(240, 237, 232, 0.41)",
          letterSpacing: "0.1em",
          margin: "0",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} YouGrow.AI || ALL RIGHTS RESERVED
      </p>

      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <nav
          aria-label="Social links"
          style={{ display: "flex", gap: "1rem" }}
        >
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              className="nav-link"
              style={{ fontSize: "0.7rem" }}
              aria-label={`Follow us on ${label}`}
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
