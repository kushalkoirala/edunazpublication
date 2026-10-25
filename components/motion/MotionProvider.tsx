"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { MOTION_TOKENS } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

let activeLenis: Lenis | null = null;
const lenisSubscribers = new Set<() => void>();

function subscribeLenis(onStoreChange: () => void) {
  lenisSubscribers.add(onStoreChange);
  return () => {
    lenisSubscribers.delete(onStoreChange);
  };
}

function getLenisSnapshot() {
  return activeLenis;
}

function getLenisServerSnapshot() {
  return null;
}

export function useLenis() {
  return useSyncExternalStore(
    subscribeLenis,
    getLenisSnapshot,
    getLenisServerSnapshot
  );
}

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Failsafe: if animations don't report ready within 3s, force reveal
    const failsafeTimer = setTimeout(() => {
      document.documentElement.classList.add("motion-ready", "motion-failsafe");
    }, 3000);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.classList.add("motion-ready", "reduced-motion");
      return () => clearTimeout(failsafeTimer);
    }

    // Initialize Lenis for wheel/trackpad smooth scrolling (native touch untouched)
    const lenis = new Lenis({
      lerp: MOTION_TOKENS.lenis.lerp,
      syncTouch: MOTION_TOKENS.lenis.syncTouch,
    });
    activeLenis = lenis;
    lenisSubscribers.forEach((cb) => cb());

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger when fonts and assets are ready
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    if (document.fonts) {
      document.fonts.ready.then(() => {
        handleRefresh();
      });
    }
    window.addEventListener("load", handleRefresh);

    // Fixed 2px gold scroll progress bar scrubbed to page scroll
    let progressTrigger: ScrollTrigger | null = null;
    if (progressBarRef.current) {
      progressTrigger = ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (progressBarRef.current) {
            gsap.set(progressBarRef.current, { scaleX: self.progress });
          }
        },
      });
    }

    // Intercept anchor clicks for smooth scroll with -72px header offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      const isSamePageAnchor =
        href.startsWith("#") ||
        (href.startsWith("/#") && window.location.pathname === "/");

      if (isSamePageAnchor) {
        const hash = href.startsWith("/#") ? href.slice(1) : href;
        if (hash === "#") return;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: MOTION_TOKENS.lenis.headerOffset,
          });
          history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Handle initial hash in URL if arriving from another page
    if (window.location.hash) {
      const initialHash = window.location.hash;
      const targetElement = document.querySelector(initialHash);
      if (targetElement) {
        setTimeout(() => {
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: MOTION_TOKENS.lenis.headerOffset,
            immediate: false,
          });
        }, 150);
      }
    }

    return () => {
      clearTimeout(failsafeTimer);
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("load", handleRefresh);
      if (progressTrigger) {
        progressTrigger.kill();
      }
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      activeLenis = null;
      lenisSubscribers.forEach((cb) => cb());
    };
  }, []);

  return (
    <>
      {/* 2px purple scroll progress bar above header */}
      <div
        id="scroll-progress-bar"
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#7B2FBE] via-[#A855F7] to-[#C084FC] z-[60] origin-left pointer-events-none shadow-[0_0_8px_rgba(168,85,247,0.7)]"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
        aria-hidden="true"
      />
      {children}
    </>
  );
}
