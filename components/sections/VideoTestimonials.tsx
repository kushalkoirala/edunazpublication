"use client";

import React, { useState } from "react";

interface TestimonialVideo {
  id: string;
  label: string;
}

const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  { id: "21822", label: "Client Experience" },
  { id: "21821", label: "Client Experience" },
  { id: "21820", label: "Client Experience" },
  { id: "21819", label: "Client Experience" },
];

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    /* BEGIN: VideoTestimonialsSection */
    <section
      className="py-24 bg-[#FAF8F5] relative overflow-hidden"
      id="testimonials"
    >
      {/* Decorative dot matrix in upper-right */}
      <div
        className="absolute top-12 right-6 sm:right-12 lg:right-20 pointer-events-none select-none opacity-50 z-0"
        aria-hidden="true"
      >
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE]/60 block"
            />
          ))}
        </div>
      </div>

      {/* Decorative subtle background wave curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M -100 450 C 300 350 600 550 950 420 C 1200 320 1380 480 1600 390"
          stroke="#A855F7"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="opacity-30"
        />
        <path
          d="M 120 780 C 450 680 820 820 1150 720 C 1350 660 1480 750 1620 700"
          stroke="#A855F7"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="opacity-25"
        />
      </svg>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow */}
          <div
            className="flex items-center justify-center gap-3 mb-3.5"
            data-reveal="up"
          >
            <span className="w-8 h-px bg-[#7B2FBE]/70" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#7B2FBE] font-semibold font-body">
              CLIENT TESTIMONIALS
            </span>
            <span className="w-8 h-px bg-[#7B2FBE]/70" />
          </div>

          {/* Heading */}
          <h2
            data-split="lines"
            className="text-3xl sm:text-4xl lg:text-[44px] text-brand-dark font-heading leading-tight mb-4"
          >
            What Our <span className="text-[#7B2FBE]">Clients</span> Say
          </h2>

          {/* Subtitle */}
          <p
            data-reveal="up"
            className="text-brand-muted font-body text-sm sm:text-base leading-relaxed font-normal"
          >
            Hear directly from our clients about their experiences working with
            us.
          </p>
        </div>

        {/* 2-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 justify-items-center">
          {TESTIMONIAL_VIDEOS.map((video, index) => {
            const isPlaying = activeVideoId === video.id;

            return (
              <div
                key={video.id}
                className="w-full max-w-[340px] sm:max-w-[370px]"
                data-reveal="up"
              >
                <div
                  className="relative w-full rounded-[24px] overflow-hidden border border-[#EBE3D6] shadow-[0_12px_36px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(123,47,190,0.12)] transition-all duration-300 bg-[#161D2F] group"
                  style={{ aspectRatio: "9/16" }}
                >
                  {isPlaying ? (
                    <>
                      {/* Viddler Iframe Player */}
                      <iframe
                        src={`https://viddler.com/embed/player?id=${video.id}&color=default`}
                        width="100%"
                        style={{
                          aspectRatio: "9/16",
                          width: "100%",
                          height: "100%",
                        }}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full rounded-[24px]"
                        title={`Client Testimonial Video ${index + 1}`}
                      />

                      {/* Optional Close/Reset Button */}
                      <button
                        onClick={() => setActiveVideoId(null)}
                        className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-all duration-200 text-xs backdrop-blur-sm shadow-md"
                        title="Close player"
                        aria-label="Close player"
                      >
                        ✕
                      </button>
                    </>
                  ) : (
                    /* Lightweight Interactive Preview Card */
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(video.id)}
                      className="w-full h-full relative flex flex-col justify-between p-6 sm:p-7 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:ring-offset-2 rounded-[24px]"
                      style={{
                        background:
                          "radial-gradient(ellipse 90% 80% at 50% 25%, rgba(123,47,190,0.45) 0%, rgba(28,36,56,0.95) 70%, #121724 100%)",
                      }}
                      aria-label={`Play Client Testimonial Video ${index + 1}`}
                    >
                      {/* Top Bar with Number Badge & Tag */}
                      <div className="flex items-center justify-between w-full relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="text-[#C084FC] font-bold text-xs tracking-wider font-body">
                            0{index + 1}
                          </span>
                          <span className="text-white/30">/</span>
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C084FC] font-body">
                            TESTIMONIAL
                          </span>
                        </div>

                        {/* Subtle decorative video badge */}
                        <div className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-[9px] uppercase tracking-wider text-white/80 font-mono font-medium">
                            VIDEO
                          </span>
                        </div>
                      </div>

                      {/* Center Play Button with Pulse & Glow */}
                      <div className="my-auto flex flex-col items-center justify-center relative z-10 py-6">
                        <div className="relative flex items-center justify-center">
                          {/* Outer Pulsing Ring */}
                          <div className="absolute inset-0 -m-3 rounded-full bg-[#7B2FBE]/30 group-hover:bg-[#7B2FBE]/50 animate-ping opacity-60" />

                          {/* Glow Shadow */}
                          <div className="absolute inset-0 rounded-full bg-[#7B2FBE] blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Play Button Disc */}
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#7B2FBE] to-[#A855F7] group-hover:from-[#6B21A8] group-hover:to-[#9333EA] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(123,47,190,0.4)] group-hover:scale-108 transition-all duration-300">
                            {/* Play Triangle Icon */}
                            <svg
                              className="w-6 h-6 sm:w-7 sm:h-7 ml-1 text-white fill-current drop-shadow-sm"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        <span className="mt-5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90 group-hover:text-white transition-colors">
                          Watch Video
                        </span>
                        <span className="text-[11px] text-white/50 font-body mt-0.5">
                          Click to play testimonial
                        </span>
                      </div>

                      {/* Bottom Footer on Card */}
                      <div className="w-full relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-white/60 text-xs">
                        <span className="font-heading tracking-wide text-white/80 text-sm">
                          Client Story 0{index + 1}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#C084FC] group-hover:text-white transition-colors">
                          <span>PLAY</span>
                          <span className="font-mono transition-transform duration-200 group-hover:translate-x-0.5">
                            →
                          </span>
                        </span>
                      </div>

                      {/* Subtle Ambient Decorative Glow at bottom */}
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#7B2FBE]/25 blur-2xl pointer-events-none rounded-full"
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    /* END: VideoTestimonialsSection */
  );
}

