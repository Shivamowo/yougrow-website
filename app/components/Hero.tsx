"use client";

import WaveCanvas from "@/app/components/WaveCanvas";

export default function Hero() {
  return (
    <div id="home" className="w-full h-screen flex flex-col bg-[#f5f5f5] overflow-hidden">

      {/* SECTION 1: TOP - DARK */}
      <section className="bg-black text-white w-full h-[48vh] sm:h-[55vh] pb-4 sm:pb-6 flex flex-col " style={{ paddingTop: "clamp(70px, 10vw, 110px)" }}>
        <div style={{ padding: "0 clamp(0.8rem, 3vw, 2.5rem)" }} className="w-full text-left">
          {/* Subtitle */}
          <p className="pl-1.5 mb-[-4px] text-[clamp(1rem,1.6vw,1.4rem)] font-bold italic opacity-90 font-serif anim-fade-up anim-delay-100">
            you imagine
          </p>

          {/* Heading */}
          <h1
            className="font-serif font-black leading-[0.75] m-0 anim-fade-up anim-delay-200 uppercase"
            style={{ fontSize: "clamp(4rem, 14vw, 11rem)", letterSpacing: "-0.02em" }}
          >
            BEYOND<br />DESIGN
          </h1>
        </div>

        {/* WAVE DIVIDER IN NORMAL FLOW */}
        <div className="w-full relative z-10 anim-fade-up anim-delay-400 mb-4 sm:mb-6 mt-4">
          <div style={{ height: "clamp(45px, 6vw, 90px)" }}>
            <WaveCanvas />
          </div>
        </div>
      </section>

      {/* SECTION 2: BOTTOM - LIGHT */}
      <section className="bg-[#f5f5f5] text-black w-full relative h-[52vh] sm:h-[45vh] pt-4 sm:pt-8 pb-4 sm:pb-6 flex flex-col justify-center">
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
            {/* Subtitle */}
            <p className="pr-1.5 mb-[-8px] text-[clamp(1rem,1.6vw,1.5rem)] font-bold italic opacity-90 font-serif anim-fade-up anim-delay-400">
              we build
            </p>

            {/* Heading */}
            <h2
              className="font-serif font-black leading-[0.85] m-0 anim-fade-up anim-delay-500 uppercase"
              style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", letterSpacing: "-0.02em" }}
            >
              INDULGING<br />EXPERIENCE
            </h2>

            {/* Subtext */}
            <p className="mt-3 text-[clamp(0.9rem,1.1vw,1.05rem)] font-semibold opacity-90 font-sans anim-fade-up anim-delay-700 max-w-[95%] text-black">
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
