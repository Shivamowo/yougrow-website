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
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateMobile = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
      }
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "clamp(0.6rem, 1.5vw, 1.4rem) clamp(0.8rem, 3vw, 3rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "clamp(1rem, 3vw, 2rem)",
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
      <a href="/" aria-label="YouGrow — Home" style={{ textDecoration: "none", minWidth: "fit-content" }}>
        <Logo />
      </a>

      {!isMobile ? (
        <>
          <nav
            aria-label="Main navigation"
            style={{
              alignItems: "center",
              gap: "clamp(1rem, 2vw, 2rem)",
              border: "1px solid rgba(240,237,232,0.12)",
              borderRadius: "9999px",
              padding: "0.55rem clamp(1rem, 2vw, 1.8rem)",
              background: "rgba(255,255,255,0.03)",
              display: "flex",
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

          <Link
            href="/contact"
            className="btn-outline"
            aria-label="Book a discovery call"
            style={{ textDecoration: "none", fontSize: "clamp(0.72rem, 1vw, 0.78rem)", padding: "0.55rem 1.2rem", whiteSpace: "nowrap" }}
          >
            Book a call&nbsp;→
          </Link>
        </>
      ) : (
        <>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "rgba(240,237,232,0.8)",
                transition: "all 0.3s ease",
                transform: mobileMenuOpen ? "rotate(45deg) translate(8px, 8px)" : "none",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "rgba(240,237,232,0.8)",
                opacity: mobileMenuOpen ? 0 : 1,
                transition: "all 0.3s ease",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "rgba(240,237,232,0.8)",
                transition: "all 0.3s ease",
                transform: mobileMenuOpen ? "rotate(-45deg) translate(8px, -8px)" : "none",
              }}
            />
          </button>
          {mobileMenuOpen && (
            <nav
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "rgba(10,10,10,0.95)",
                backdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(240,237,232,0.07)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {NAV_LINKS.map(({ label, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobileMenu}
                    style={{
                      textDecoration: "none",
                      color: isActive ? "rgba(240,237,232,1)" : "rgba(240,237,232,0.7)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,237,232,1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "rgba(240,237,232,1)" : "rgba(240,237,232,0.7)")}
                  >
                    {label}
                  </Link>
                );
              })}
              <div style={{ height: "1px", background: "rgba(240,237,232,0.1)", margin: "0.5rem 0" }} />
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                style={{
                  textDecoration: "none",
                  color: "var(--fg)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg)")}
              >
                Book a Call →
              </Link>
            </nav>
          )}
        </>
      )}
    </header>
  );
}
