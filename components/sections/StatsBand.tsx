"use client";

import { useEffect, useRef } from "react";

export default function StatsBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      const statCounters = section.querySelectorAll<HTMLElement>(
        ".stat-num[data-target]"
      );
      const statsObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animated.current) {
              animated.current = true;
              obs.unobserve(entry.target);
              statCounters.forEach((counter) => {
                const target = parseInt(
                  counter.getAttribute("data-target") ?? "0",
                  10
                );
                const suffix = counter.getAttribute("data-suffix") ?? "";
                const duration = 1200;
                let startTime: number | null = null;

                const step = (timestamp: number) => {
                  if (!startTime) startTime = timestamp;
                  const elapsed = timestamp - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const easeProgress = 1 - Math.pow(1 - progress, 3);
                  const currentVal = Math.floor(easeProgress * target);
                  counter.textContent = currentVal + suffix;
                  if (progress < 1) {
                    window.requestAnimationFrame(step);
                  } else {
                    counter.textContent = target + suffix;
                  }
                };
                window.requestAnimationFrame(step);
              });
            }
          });
        },
        { threshold: 0.2 }
      );
      statsObserver.observe(section);
    }
  }, []);

  return (
    /* BEGIN: StatsBandSection */
    <section
      className="relative py-20 bg-[#3F4056] text-white overflow-hidden"
      id="stats-band"
      ref={sectionRef}
    >
      {/* Faint library photo background (~10% opacity) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "var(--img-library)" }}
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Stat 1: 15+ Skilled professionals */}
          <div
            className="border-r border-b lg:border-b-0 border-white/15 pr-4 sm:pr-6 lg:px-8 py-6 lg:py-0 text-left"
          >
            <div className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#D9A93F] leading-none mb-3">
              <span className="stat-num" data-target="15" data-suffix="+">15+</span>
            </div>
            <div className="w-8 h-[1px] bg-[#D9A93F] mb-3"></div>
            <p
              className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium leading-relaxed"
            >
              Skilled professionals
            </p>
          </div>

          {/* Stat 2: 10+ Years' experience of our experts */}
          <div
            className="border-b lg:border-b-0 lg:border-r border-white/15 pl-4 sm:pl-6 lg:px-8 py-6 lg:py-0 text-left"
          >
            <div className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#D9A93F] leading-none mb-3">
              <span className="stat-num" data-target="10" data-suffix="+">10+</span>
            </div>
            <div className="w-8 h-[1px] bg-[#D9A93F] mb-3"></div>
            <p
              className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium leading-relaxed"
            >
              Years&apos; experience of our experts
            </p>
          </div>

          {/* Stat 3: 24x7 Enquiry support */}
          <div className="border-r border-white/15 pr-4 sm:pr-6 lg:px-8 py-6 lg:py-0 text-left">
            <div className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#D9A93F] leading-none mb-3">
              <span className="stat-num">24x7</span>
            </div>
            <div className="w-8 h-[1px] bg-[#D9A93F] mb-3"></div>
            <p
              className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium leading-relaxed"
            >
              Enquiry support
            </p>
          </div>

          {/* Stat 4: [Add figure] | [Add label] */}
          {/* TODO: only fill in with a number the client can prove */}
          <div className="pl-4 sm:pl-6 lg:px-8 py-6 lg:py-0 text-left">
            <div className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#D9A93F] leading-none mb-3">
              <span className="stat-num">[--]</span>
            </div>
            <div className="w-8 h-[1px] bg-[#D9A93F] mb-3"></div>
            <p
              className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium leading-relaxed"
            >
              [Add label, e.g. Manuscripts supported]
            </p>
          </div>
        </div>
      </div>
    </section>
    /* END: StatsBandSection */
  );
}
