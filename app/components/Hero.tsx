"use client";

import WaveCanvas from "@/app/components/WaveCanvas";

export default function Hero() {
  return (
    <div id="home" className="w-full bg-[#f5f5f5]">

      {/* SECTION 1: TOP - DARK */}
      <section className="bg-black text-white w-full pb-8" style={{ paddingTop: "clamp(80px, 15vw, 90px)" }}>
        <div style={{ padding: "0 clamp(1.2rem, 4vw, 3rem)" }} className="w-full text-left">
          {/* Heading */}
          <h1
            className="font-serif font-black leading-[0.9] m-0 anim-fade-up anim-delay-100 uppercase"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)", letterSpacing: "-0.02em" }}
          >
            BEYOND<br />DESIGN
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[clamp(1rem,1.5vw,1.2rem)] font-bold italic opacity-90 font-serif anim-fade-up anim-delay-200">
            you imagine
          </p>
        </div>

        {/* WAVE DIVIDER IN NORMAL FLOW */}
        <div className="w-full relative z-10 anim-fade-up anim-delay-400 mt-12 mb-[-1px]">
          <div style={{ height: "clamp(60px, 8vw, 100px)" }}>
            <WaveCanvas />
          </div>
          <span
            className="absolute font-sans text-[0.65rem] font-black tracking-[0.25em] text-white opacity-95 uppercase whitespace-nowrap"
            style={{ right: "clamp(1.2rem, 4vw, 3rem)", top: "50%", transform: "translateY(-50%)" }}
          >
            we build
          </span>
        </div>
      </section>

      {/* SECTION 2: BOTTOM - LIGHT */}
      <section className="bg-[#f5f5f5] text-black w-full relative pt-16 pb-24">
        {/* Orange glow blob */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "0",
            left: "clamp(1.2rem, 4vw, 3rem)",
            width: "clamp(140px, 28vw, 300px)",
            height: "clamp(55px, 10vw, 110px)",
            background: "radial-gradient(ellipse, rgba(255,100,40,0.3) 0%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />

        <div style={{ padding: "0 clamp(1.2rem, 4vw, 3rem)" }} className="w-full flex flex-col md:items-end items-start text-left md:text-right relative z-10">
          <div>
            {/* Heading */}
            <h2
              className="font-serif font-black leading-[0.88] m-0 anim-fade-up anim-delay-500 uppercase"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)", letterSpacing: "-0.02em" }}
            >
              INDULGING<br />EXPERIENCE
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-[clamp(0.85rem,1.4vw,1.1rem)] font-semibold opacity-90 font-sans anim-fade-up anim-delay-700 max-w-[80%] md:max-w-none text-black">
              we don&apos;t just build websites, we build{" "}
              <strong className="text-[#FF4D1C] font-black">scalable</strong>{" "}
              experiences
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
