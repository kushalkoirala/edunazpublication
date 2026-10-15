"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageMotion from "@/components/motion/PageMotion";
import { MOTION_TOKENS } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const enterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top immediately on route change unless URL has a hash
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && enterRef.current) {
      gsap.fromTo(
        enterRef.current,
        { opacity: 0, y: MOTION_TOKENS.distance.yPageEnter },
        {
          opacity: 1,
          y: 0,
          duration: MOTION_TOKENS.duration.pageEnter,
          ease: MOTION_TOKENS.ease.ui,
          clearProps: "all",
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        }
      );
    } else {
      ScrollTrigger.refresh();
    }
  }, [pathname]);

  return (
    <div ref={enterRef} className="route-enter-wrap">
      <PageMotion>{children}</PageMotion>
    </div>
  );
}
