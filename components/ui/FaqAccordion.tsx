"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQ_DATA, FaqItem } from "@/lib/content";

interface FaqAccordionProps {
  items?: FaqItem[];
  defaultOpenIndex?: number;
}

export default function FaqAccordion({
  items = FAQ_DATA,
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    [defaultOpenIndex]: true,
  });

  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const iconRefs = useRef<Record<number, HTMLSpanElement | null>>({});

  const toggleItem = (index: number) => {
    const isCurrentlyOpen = !!openItems[index];
    const willOpen = !isCurrentlyOpen;

    setOpenItems((prev) => ({
      ...prev,
      [index]: willOpen,
    }));

    const contentEl = contentRefs.current[index];
    const iconEl = iconRefs.current[index];

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!contentEl || prefersReducedMotion) {
      if (contentEl) {
        contentEl.style.display = willOpen ? "block" : "none";
        contentEl.style.height = willOpen ? "auto" : "0px";
        contentEl.style.opacity = willOpen ? "1" : "0";
      }
      return;
    }

    if (willOpen) {
      contentEl.style.display = "block";
      contentEl.style.overflow = "hidden";
      contentEl.style.willChange = "height, opacity";

      gsap.fromTo(
        contentEl,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            contentEl.style.overflow = "";
            contentEl.style.willChange = "";
            ScrollTrigger.refresh();
          },
        }
      );

      if (iconEl) {
        gsap.to(iconEl, {
          rotation: 180,
          duration: 0.35,
          ease: "power2.out",
        });
      }
    } else {
      contentEl.style.overflow = "hidden";
      contentEl.style.willChange = "height, opacity";

      gsap.to(contentEl, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          contentEl.style.display = "none";
          contentEl.style.willChange = "";
          ScrollTrigger.refresh();
        },
      });

      if (iconEl) {
        gsap.to(iconEl, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    }
  };

  return (
    <div
      className="border-t border-brand-borderHairline divide-y divide-brand-borderHairline"
      id="faq-accordion"
    >
      {items.map((item, index) => {
        const isOpen = !!openItems[index];
        return (
          <div key={index} className="faq-item">
            <button
              aria-expanded={isOpen ? "true" : "false"}
              className="faq-toggle w-full py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
              type="button"
              onClick={() => toggleItem(index)}
            >
              <span className="font-heading text-base sm:text-lg text-brand-dark pr-4">
                {item.question}
              </span>
              <span
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
                className="faq-icon text-[#7B2FBE] font-mono text-xl font-bold flex-shrink-0 inline-block origin-center"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              style={{
                display: index === defaultOpenIndex ? "block" : "none",
              }}
              className="faq-content pb-6 text-xs sm:text-sm text-brand-muted leading-relaxed font-body"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
