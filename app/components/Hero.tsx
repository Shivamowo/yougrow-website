"use client";

import WaveCanvas from "@/app/components/WaveCanvas";

export default function Hero() {
  return (
    <div id="home" className="w-full bg-[#f5f5f5]">

      {/* SECTION 1: TOP - DARK */}
      <section className="bg-black text-white w-full pb-1 sm:pb-2" style={{ paddingTop: "clamp(100px, 16vw, 80px)" }}>
        <div style={{ padding: "0 clamp(0.8rem, 3vw, 2.5rem)" }} className="w-full text-left">
          {/* Heading */}
          <h1
            className="font-serif font-black leading-[0.75] m-0 anim-fade-up anim-delay-100 uppercase"
            style={{ fontSize: "clamp(1.5rem, 7vw, 7.5rem)", letterSpacing: "-0.02em" }}
          >
            BEYOND<br />DESIGN
          </h1>

          {/* Subtitle */}
          <p className="mt-1 text-[clamp(0.7rem,0.9vw,1rem)] font-bold italic opacity-90 font-serif anim-fade-up anim-delay-200">
            you imagine
          </p>
        </div>

        {/* WAVE DIVIDER IN NORMAL FLOW */}
        <div className="w-full relative z-10 anim-fade-up anim-delay-400 mt-3 sm:mt-6 mb-0">
          <div style={{ height: "clamp(25px, 4vw, 70px)" }}>
            <WaveCanvas />
          </div>
          <span
            className="absolute font-sans text-[clamp(0.45rem,0.5vw,0.65rem)] font-black tracking-[0.2em] text-white opacity-95 uppercase whitespace-nowrap"
            style={{ right: "clamp(0.8rem, 3vw, 2.5rem)", top: "50%", transform: "translateY(-50%)" }}
          >
            we build
          </span>
        </div>
      </section>

      {/* SECTION 2: BOTTOM - LIGHT */}
      <section className="bg-[#f5f5f5] text-black w-full relative pt-4 sm:pt-8 pb-6 sm:pb-8">
        {/* Orange glow blob */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "0",
            left: "clamp(0.8rem, 3vw, 2.5rem)",
            width: "clamp(80px, 20vw, 300px)",
            height: "clamp(35px, 6vw, 110px)",
            background: "radial-gradient(ellipse, rgba(255,100,40,0.3) 0%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />

        <div style={{ padding: "0 clamp(0.8rem, 3vw, 2.5rem)" }} className="w-full flex flex-col items-end text-right relative z-10">
          <div>
            {/* Heading */}
            <h2
              className="font-serif font-black leading-[0.75] m-0 anim-fade-up anim-delay-500 uppercase"
              style={{ fontSize: "clamp(1.3rem, 6vw, 6.5rem)", letterSpacing: "-0.02em" }}
            >
              INDULGING<br />EXPERIENCE
            </h2>

            {/* Subtext */}
            <p className="mt-2 text-[clamp(0.65rem,0.85vw,0.95rem)] font-semibold opacity-90 font-sans anim-fade-up anim-delay-700 max-w-[95%] text-black">
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
