import type { Metadata } from "next";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";
import WorkGrid from "@/app/components/WorkGrid";
import ServicesAccordion from "@/app/components/ServicesAccordion";
import CTA from "@/app/components/CTA";

export const metadata: Metadata = {
  title: "YouGrow — Award-Winning Digital Agency",
  description:
    "We build indulging digital experiences. Fullstack development, UI/UX design, brand building, and AI automation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WorkGrid limit={4} showHeader />
      <ServicesAccordion defaultOpen="ai" showHeader />
      <CTA />
    </>
  );
}
