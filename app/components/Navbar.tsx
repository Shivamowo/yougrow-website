"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/app/components/Logo";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "OUR WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.4rem clamp(1.2rem, 4vw, 3rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: scrolled
          ? "1px solid rgba(240,237,232,0.07)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        background: scrolled ? "rgba(10,10,10,0.8)" : "transparent",
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      {/* Logo */}
      <Link href="/" aria-label="Beyond Design — Home" style={{ textDecoration: "none" }}>
        <Logo />
      </Link>

      {/* Centre nav pill */}
      <nav
        aria-label="Main navigation"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          border: "1px solid rgba(240,237,232,0.12)",
          borderRadius: "9999px",
          padding: "0.55rem 1.8rem",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        {NAV_LINKS.map(({ label, href }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`nav-link${isActive ? " active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Book a Call CTA */}
      <Link
        href="/contact"
        className="btn-outline"
        aria-label="Book a discovery call"
        style={{ textDecoration: "none" }}
      >
        Book a call&nbsp;→
      </Link>
    </header>
  );
}
