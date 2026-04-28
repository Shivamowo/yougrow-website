import Link from "next/link";
import Logo from "@/app/components/Logo";

const SOCIALS = [
  { label: "INSTAGRAM", href: "#" },
  { label: "LINKEDIN", href: "#" },
  { label: "TWITTER / X", href: "#" },
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
      <a href="/" style={{ textDecoration: "none" }} aria-label="Beyond Design home">
        <Logo size="sm" />
      </a>

      <p
        className="font-sans"
        style={{
          fontSize: "0.68rem",
          color: "rgba(240,237,232,0.3)",
          letterSpacing: "0.1em",
          margin: 0,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} BEYOND DESIGN. ALL RIGHTS RESERVED.
      </p>

      <nav
        aria-label="Social links"
        style={{ display: "flex", gap: "1.8rem" }}
      >
        {SOCIALS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="nav-link"
            style={{ fontSize: "0.68rem" }}
            aria-label={`Follow us on ${label}`}
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
