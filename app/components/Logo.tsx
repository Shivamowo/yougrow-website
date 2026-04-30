import Image from "next/image";

// Logo — server component, no interactivity needed
export default function Logo({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  // --- CHANGE DIMENSIONS HERE ---
  // Modify these pixel values to make the logo larger or smaller
  const logoWidths = {
    sm: 100, // Width for small logo
    md: 130, // Default width used in the Navbar
    lg: 140  // Width for large logo
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/img-sources/yougrow-1.png"
        alt="You Grow Agency Logo"
        width={logoWidths[size]}
        height={logoWidths[size] * 0.5} // Next.js requires a height, but `height: auto` below ensures it scales correctly
        style={{
          width: `${logoWidths[size]}px`,
          height: "auto", // This preserves the original aspect ratio of your image
          objectFit: "contain",
        }}
        priority // Ensures the logo loads immediately
      />
    </div>
  );
}
