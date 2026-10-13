"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Does Edunaaz guarantee manuscript acceptance?",
    answer:
      "No. Acceptance is decided solely by independent journal editors and blind peer reviewers. Edunaaz provides professional guidance, formatting, similarity reporting, and editorial support only.",
  },
  {
    question: "What is the typical turnaround time for manuscript editing?",
    answer:
      "Standard editorial cycles take between 3 to 7 business days depending on word count, technical complexity, and required citation standardization (IEEE, APA, Harvard, or Nature format).",
  },
  {
    question: "How is similarity and originality checked?",
    answer:
      "Manuscripts undergo systematic plagiarism audits using licensed industry-standard databases. A detailed, line-by-line similarity report is shared alongside constructive paraphrasing recommendations.",
  },
  {
    question: "How does journal scope recommendation work?",
    answer:
      "Our academic advisors evaluate your study\u2019s methodology, core findings, and target audience to suggest verified indexed publications matching your timeline and field of study.",
  },
  {
    question: "What are the consultation and review support options?",
    answer:
      "Authors can opt for structured written critique memos or scheduled one-on-one virtual review sessions with senior editors to discuss peer review rebuttal strategies.",
  },
];

export default function Faq() {
  // Original HTML has item 1 open by default and allows independent toggling
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    /* BEGIN: FAQAccordionSection */
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight">
            Common <span className="text-brand-gold font-normal">Questions</span>
          </h2>
        </div>
        {/* Accordion Container */}
        <div
          className="border-t border-brand-borderHairline divide-y divide-brand-borderHairline"
          id="faq-accordion"
        >
          {faqData.map((item, index) => {
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
      </div>
    </section>
    /* END: FAQAccordionSection */
  );
}
