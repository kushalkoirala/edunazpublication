"use client";

import { useState } from "react";
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

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
              className="faq-toggle w-full py-6 flex items-center justify-between text-left focus:outline-none"
              type="button"
              onClick={() => toggleItem(index)}
            >
              <span className="font-heading text-base sm:text-lg text-brand-dark pr-4">
                {item.question}
              </span>
              <span className="faq-icon text-brand-gold font-mono text-xl font-bold flex-shrink-0">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`faq-content pb-6 text-xs sm:text-sm text-brand-muted leading-relaxed font-body ${
                isOpen ? "" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
