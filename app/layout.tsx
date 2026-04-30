import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Cursor from "@/app/components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "YouGrow — Award-Winning Digital Agency",
    template: "%s | YouGrow",
  },
  description:
    "We don't just build websites, we build scalable experiences. Fullstack dev, UI/UX design, brand building, and AI automation.",
  keywords: [
    "design agency",
    "fullstack development",
    "UI/UX",
    "brand design",
    "web agency",
    "AI automation",
  ],
  openGraph: {
    siteName: "YouGrow",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body>
        {/* Global decorative radial glow */}
        <div className="bg-glow" aria-hidden="true" />
        {/* Custom cursor — client-only, hidden on touch */}
        <Cursor />
        {/* Persistent navigation */}
        <Navbar />
        {/* Page content */}
        <main>{children}</main>
        {/* Persistent footer */}
        <Footer />
      </body>
    </html>
  );
}
