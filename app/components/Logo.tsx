// Logo — server component, no interactivity needed
export default function Logo({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const fontSizes = { sm: "0.8rem", md: "1rem", lg: "1.3rem" };

  return (
    <span
      style={{
        fontFamily: "var(--font-playfair), Georgia, serif",
        fontWeight: 700,
        fontSize: fontSizes[size],
        letterSpacing: "0.12em",
        color: "var(--fg)",
        textTransform: "uppercase" as const,
        lineHeight: 1,
      }}
    >
      Beyond{" "}
      <span style={{ color: "var(--accent)" }}>Design</span>
    </span>
  );
}
