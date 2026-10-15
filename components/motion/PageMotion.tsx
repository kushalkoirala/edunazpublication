"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MOTION_TOKENS } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

export default function PageMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const scope = scopeRef.current;
      if (!scope) return;

      const mm = gsap.matchMedia();

      // REDUCED MOTION MODE
      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Clear all motion attributes so content stays fully visible immediately
        const elementsToClear = scope.querySelectorAll<HTMLElement>(
          "[data-reveal], [data-split], [data-stagger] > *, [data-line], #hero-eyebrow-dash, #hero-eyebrow-text, .hero-title-line, #hero-paragraph, #hero-button, #hero-card-1, #hero-card-2, #hero-card-3"
        );
        elementsToClear.forEach((el) => {
          gsap.set(el, { clearProps: "all", opacity: 1, visibility: "visible" });
        });

        // Set counters immediately to final target
        const counters = scope.querySelectorAll<HTMLElement>("[data-count][data-target]");
        counters.forEach((counter) => {
          const target = counter.getAttribute("data-target") ?? "";
          const suffix = counter.getAttribute("data-suffix") ?? "";
          counter.textContent = target + suffix;
        });

        document.documentElement.classList.add("motion-ready", "reduced-motion");
      });

      // STANDARD MOTION: DESKTOP & MOBILE
      const setupMotion = (isDesktop: boolean) => {
        document.documentElement.classList.add("motion-ready");
        const yDist = isDesktop
          ? MOTION_TOKENS.distance.yDesktop
          : MOTION_TOKENS.distance.yMobile;
        const staggerVal = isDesktop
          ? MOTION_TOKENS.stagger.desktop
          : MOTION_TOKENS.stagger.mobile;

        // 1. HERO INTRO CHOREOGRAPHY (Home page only)
        const heroSection = scope.querySelector<HTMLElement>("#hero");
        if (heroSection) {
          const imageWrapper = scope.querySelector<HTMLElement>("#hero-image-wrapper");
          const eyebrowDash = scope.querySelector<HTMLElement>("#hero-eyebrow-dash");
          const eyebrowText = scope.querySelector<HTMLElement>("#hero-eyebrow-text");
          const titleLines = scope.querySelectorAll<HTMLElement>(".hero-title-line");
          const paragraph = scope.querySelector<HTMLElement>("#hero-paragraph");
          const button = scope.querySelector<HTMLElement>("#hero-button");
          const heroCard1 = scope.querySelector<HTMLElement>("#hero-card-1");
          const heroCard2 = scope.querySelector<HTMLElement>("#hero-card-2");
          const heroCard3 = scope.querySelector<HTMLElement>("#hero-card-3");
          const heroCards = [heroCard1, heroCard2, heroCard3].filter(Boolean) as HTMLElement[];

          const heroTl = gsap.timeline({
            defaults: { ease: MOTION_TOKENS.ease.ui },
          });

          // Initial hero states
          if (imageWrapper) gsap.set(imageWrapper, { scale: 1.15, transformOrigin: "center center" });
          if (eyebrowDash) gsap.set(eyebrowDash, { scaleX: 0, transformOrigin: "left" });
          if (eyebrowText) gsap.set(eyebrowText, { opacity: 0, y: 12 });
          if (titleLines.length > 0) gsap.set(titleLines, { yPercent: 110 });
          if (paragraph) gsap.set(paragraph, { opacity: 0, y: 16 });
          if (button) gsap.set(button, { opacity: 0, y: 16 });
          if (heroCards.length > 0) gsap.set(heroCards, { opacity: 0, y: isDesktop ? 32 : 20 });

          // Hero timeline sequence (~2.2s total)
          if (imageWrapper) {
            heroTl.to(
              imageWrapper,
              {
                scale: 1,
                duration: MOTION_TOKENS.duration.heroTotal,
                ease: MOTION_TOKENS.ease.heroImage,
                clearProps: "scale",
              },
              0
            );
          }

          if (eyebrowDash) {
            heroTl.to(
              eyebrowDash,
              {
                scaleX: 1,
                duration: 0.5,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "transform",
              },
              0.1
            );
          }

          if (eyebrowText) {
            heroTl.to(
              eyebrowText,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "all",
              },
              0.25
            );
          }

          if (titleLines.length > 0) {
            heroTl.to(
              titleLines,
              {
                yPercent: 0,
                stagger: MOTION_TOKENS.stagger.textLines,
                duration: MOTION_TOKENS.duration.text,
                ease: MOTION_TOKENS.ease.largeReveal,
                clearProps: "yPercent",
              },
              0.4
            );
          }

          if (paragraph) {
            heroTl.to(
              paragraph,
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "all",
              },
              0.85
            );
          }

          if (button) {
            heroTl.to(
              button,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "all",
              },
              1.05
            );
          }

          if (heroCards.length > 0) {
            heroTl.to(
              heroCards,
              {
                opacity: 1,
                y: 0,
                stagger: MOTION_TOKENS.stagger.cards,
                duration: 0.8,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "all",
              },
              1.2
            );
          }

          // Scrubbed Hero Parallax after entrance
          if (imageWrapper) {
            gsap.to(imageWrapper, {
              yPercent: isDesktop ? 14 : 5,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          const heroTextCol = scope.querySelector<HTMLElement>("#hero-text-col");
          if (heroTextCol) {
            gsap.to(heroTextCol, {
              y: isDesktop ? -28 : -14,
              opacity: 0.35,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom 40%",
                scrub: true,
              },
            });
          }
        }

        // 2. DATA-REVEAL ATTRIBUTES (up, fade, scale, clip-up, clip-left)
        const revealElements = scope.querySelectorAll<HTMLElement>("[data-reveal]");
        revealElements.forEach((el) => {
          const mode = el.getAttribute("data-reveal");

          if (mode === "up") {
            gsap.fromTo(
              el,
              { opacity: 0, y: yDist },
              {
                opacity: 1,
                y: 0,
                duration: MOTION_TOKENS.duration.smallElements,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "all",
                scrollTrigger: {
                  trigger: el,
                  start: MOTION_TOKENS.scrollTrigger.start,
                  toggleActions: MOTION_TOKENS.scrollTrigger.toggleActions,
                  once: true,
                },
              }
            );
          } else if (mode === "fade") {
            gsap.fromTo(
              el,
              { opacity: 0 },
              {
                opacity: 1,
                duration: MOTION_TOKENS.duration.smallElements,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "all",
                scrollTrigger: {
                  trigger: el,
                  start: MOTION_TOKENS.scrollTrigger.start,
                  toggleActions: MOTION_TOKENS.scrollTrigger.toggleActions,
                  once: true,
                },
              }
            );
          } else if (mode === "scale") {
            gsap.fromTo(
              el,
              { opacity: 0, scale: 0.94 },
              {
                opacity: 1,
                scale: 1,
                duration: MOTION_TOKENS.duration.smallElements,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "all",
                scrollTrigger: {
                  trigger: el,
                  start: MOTION_TOKENS.scrollTrigger.start,
                  toggleActions: MOTION_TOKENS.scrollTrigger.toggleActions,
                  once: true,
                },
              }
            );
          } else if (mode === "clip-up") {
            // Strictly clip-path only: no transform so Tailwind transforms aren't overridden
            gsap.fromTo(
              el,
              { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                duration: MOTION_TOKENS.duration.image,
                ease: MOTION_TOKENS.ease.largeReveal,
                clearProps: "clipPath,opacity",
                scrollTrigger: {
                  trigger: el,
                  start: MOTION_TOKENS.scrollTrigger.start,
                  toggleActions: MOTION_TOKENS.scrollTrigger.toggleActions,
                  once: true,
                },
              }
            );
          } else if (mode === "clip-left") {
            gsap.fromTo(
              el,
              { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                duration: MOTION_TOKENS.duration.image,
                ease: MOTION_TOKENS.ease.largeReveal,
                clearProps: "clipPath,opacity",
                scrollTrigger: {
                  trigger: el,
                  start: MOTION_TOKENS.scrollTrigger.start,
                  toggleActions: MOTION_TOKENS.scrollTrigger.toggleActions,
                  once: true,
                },
              }
            );
          }
        });

        // 3. DATA-STAGGER CONTAINERS
        const staggerContainers = scope.querySelectorAll<HTMLElement>("[data-stagger]");
        staggerContainers.forEach((container) => {
          const children = Array.from(container.children) as HTMLElement[];
          if (children.length === 0) return;

          gsap.fromTo(
            children,
            { opacity: 0, y: yDist },
            {
              opacity: 1,
              y: 0,
              stagger: staggerVal,
              duration: MOTION_TOKENS.duration.smallElements,
              ease: MOTION_TOKENS.ease.ui,
              clearProps: "all",
              scrollTrigger: {
                trigger: container,
                start: MOTION_TOKENS.scrollTrigger.start,
                toggleActions: MOTION_TOKENS.scrollTrigger.toggleActions,
                once: true,
              },
            }
          );
        });

        // 4. DATA-SPLIT TEXT REVEALS (Wait for document.fonts.ready to prevent layout shifts)
        const splitElements = scope.querySelectorAll<HTMLElement>("[data-split]");
        if (splitElements.length > 0) {
          const runSplits = () => {
            splitElements.forEach((el) => {
              if (el.getAttribute("data-split-done") === "true") return;
              el.setAttribute("data-split-done", "true");

              const originalText = el.innerText;
              if (!el.getAttribute("aria-label")) {
                el.setAttribute("aria-label", originalText);
              }

              const splitType = el.getAttribute("data-split") === "words" ? "words" : "lines";
              try {
                const split = new SplitText(el, {
                  type: splitType,
                  linesClass: "split-line-overflow",
                  autoSplit: true,
                });

                const targets = splitType === "words" ? split.words : split.lines;
                gsap.from(targets, {
                  yPercent: 110,
                  opacity: 0,
                  duration: MOTION_TOKENS.duration.text,
                  ease: MOTION_TOKENS.ease.largeReveal,
                  stagger: MOTION_TOKENS.stagger.textLines,
                  scrollTrigger: {
                    trigger: el,
                    start: MOTION_TOKENS.scrollTrigger.start,
                    toggleActions: MOTION_TOKENS.scrollTrigger.toggleActions,
                    once: true,
                  },
                  onComplete: () => {
                    split.revert();
                    gsap.set(el, { clearProps: "all" });
                  },
                });
              } catch {
                // If SplitText errors, fallback gracefully to regular reveal
                gsap.to(el, { opacity: 1, duration: 0.5, clearProps: "all" });
              }
            });
          };

          if (document.fonts) {
            document.fonts.ready.then(runSplits);
          } else {
            runSplits();
          }
        }

        // 5. DATA-LINE DRAW-IN
        const lines = scope.querySelectorAll<HTMLElement>("[data-line]");
        lines.forEach((line) => {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left" },
            {
              scaleX: 1,
              duration: MOTION_TOKENS.duration.text,
              ease: MOTION_TOKENS.ease.largeReveal,
              clearProps: "transform",
              scrollTrigger: {
                trigger: line,
                start: MOTION_TOKENS.scrollTrigger.start,
                toggleActions: MOTION_TOKENS.scrollTrigger.toggleActions,
                once: true,
              },
            }
          );
        });

        // 5b. DATA-ROLL MASK ROLL (Process numbers)
        const rollElements = scope.querySelectorAll<HTMLElement>("[data-roll]");
        rollElements.forEach((el, index) => {
          gsap.fromTo(
            el,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 0.6,
              delay: index * 0.08,
              ease: MOTION_TOKENS.ease.largeReveal,
              clearProps: "yPercent",
              scrollTrigger: {
                trigger: el,
                start: MOTION_TOKENS.scrollTrigger.start,
                once: true,
              },
            }
          );
        });

        // 6. DATA-PARALLAX FOR IMAGES (subtle scrubbed movement)
        const parallaxElements = scope.querySelectorAll<HTMLElement>("[data-parallax]");
        parallaxElements.forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-parallax") || "0.15");
          const effectiveSpeed = isDesktop ? speed : speed * 0.3;
          if (effectiveSpeed > 0) {
            gsap.to(el, {
              yPercent: effectiveSpeed * 100,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        });

        // 7. STATS BAND COUNTERS ([data-count] / [data-target])
        const statsSection = scope.querySelector<HTMLElement>("#stats-band");
        const counters = scope.querySelectorAll<HTMLElement>("[data-count][data-target]");
        if (statsSection && counters.length > 0) {
          ScrollTrigger.create({
            trigger: statsSection,
            start: MOTION_TOKENS.scrollTrigger.start,
            once: true,
            onEnter: () => {
              counters.forEach((counter, idx) => {
                const targetVal = parseInt(counter.getAttribute("data-target") ?? "0", 10);
                const suffix = counter.getAttribute("data-suffix") ?? "";
                const counterObj = { value: 0 };

                gsap.to(counterObj, {
                  value: targetVal,
                  duration: 1.2,
                  delay: idx * 0.1,
                  ease: MOTION_TOKENS.ease.ui,
                  onUpdate: () => {
                    counter.textContent = Math.floor(counterObj.value) + suffix;
                  },
                  onComplete: () => {
                    counter.textContent = targetVal + suffix;
                  },
                });
              });
            },
          });
        }

        // 8. MAGNETIC BUTTONS (Desktop fine pointer only, max 8px)
        if (isDesktop && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          const magneticButtons = scope.querySelectorAll<HTMLElement>("[data-magnetic]");
          magneticButtons.forEach((btn) => {
            const handleMouseMove = (e: MouseEvent) => {
              const rect = btn.getBoundingClientRect();
              const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
              const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
              gsap.to(btn, {
                x: relX * MOTION_TOKENS.magnetic.max,
                y: relY * MOTION_TOKENS.magnetic.max,
                duration: MOTION_TOKENS.magnetic.duration,
                ease: MOTION_TOKENS.magnetic.ease,
              });
            };

            const handleMouseLeave = () => {
              gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: MOTION_TOKENS.ease.ui,
                clearProps: "transform",
              });
            };

            btn.addEventListener("mousemove", handleMouseMove);
            btn.addEventListener("mouseleave", handleMouseLeave);
          });
        }

        // 9. WHATSAPP FLOAT (Scale in after ~2 seconds with soft overshoot)
        const whatsappFloat = document.getElementById("whatsapp-float-btn");
        if (whatsappFloat) {
          gsap.fromTo(
            whatsappFloat,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              delay: 2.0,
              duration: 0.7,
              ease: MOTION_TOKENS.ease.bounceOvershoot,
              clearProps: "transform",
            }
          );
        }
      };

      // Match media registration
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        setupMotion(true);
      });

      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        setupMotion(false);
      });

      return () => {
        mm.revert();
      };
    },
    { scope: scopeRef, dependencies: [pathname] }
  );

  return (
    <div ref={scopeRef} className="page-motion-scope">
      {children}
    </div>
  );
}
