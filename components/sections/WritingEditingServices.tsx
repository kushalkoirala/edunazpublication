"use client";

import React from "react";
import Link from "next/link";
import { useInquiryModal } from "@/components/ui/InquiryModal";

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES_CARDS: ServiceCard[] = [
  {
    number: "01",
    title: "Research Article Writing & Editing",
    description:
      "Our experienced subject specialists provide guidance and editorial assistance for research articles across various academic disciplines. We focus on improving manuscript structure, clarity, academic language, and presentation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#7B2FBE]"
        aria-hidden="true"
      >
        <path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
        <path d="M8 18h1" />
        <path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Review Article Writing & Editing",
    description:
      "We provide editorial support for review articles, helping researchers organize existing literature, improve scientific coherence, refine arguments, and maintain consistency in terminology, references, figures, and tables.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#7B2FBE]"
        aria-hidden="true"
      >
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Thesis & Dissertation Support",
    description:
      "Our thesis and dissertation support services help scholars improve the organization, academic language, formatting, and overall presentation of their research work while preserving their original contribution.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#7B2FBE]"
        aria-hidden="true"
      >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Research Proposal Writing & Editing",
    description:
      "We assist researchers in developing clear, structured, and academically sound research proposals. Our support includes refining research questions, objectives, literature backgrounds, and methodology.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#7B2FBE]"
        aria-hidden="true"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Plagiarism & Similarity Review",
    description:
      "We help researchers identify textual similarities, improve paraphrasing, refine citations, and maintain appropriate academic referencing practices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#7B2FBE]"
        aria-hidden="true"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Academic Article Translation",
    description:
      "Our academic translation services help researchers communicate their work across language barriers, with a focus on accurate terminology, subject-specific context, and preservation of scientific meaning.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#7B2FBE]"
        aria-hidden="true"
      >
        <path d="m5 8 6 6" />
        <path d="m4 14 6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="m22 22-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
    ),
  },
];

export default function WritingEditingServices() {
  const { openModal } = useInquiryModal();

  const handleCardClick = (e: React.MouseEvent, title: string) => {
    // If not middle-click or modified click, open the inquiry modal
    if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      openModal(title);
    }
  };

  return (
    <div className="mb-12">
      <h3 className="font-heading text-xl text-brand-dark mb-6">
        Key Services &amp; Scope
      </h3>

      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {SERVICES_CARDS.map((card) => (
          <Link
            key={card.number}
            href={`/contact?type=inquiry&service=${encodeURIComponent(card.title)}`}
            onClick={(e) => handleCardClick(e, card.title)}
            className="group relative flex flex-col justify-between h-full p-6 sm:p-7 bg-white border border-brand-borderHairline rounded-none transition-all duration-200 hover:-translate-y-1 hover:border-[#7B2FBE]/60 hover:shadow-[0_8px_24px_rgba(123,47,190,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] cursor-pointer"
          >
            <div>
              {/* Card Header: Numbered Indicator (top-left) & Minimal Icon (top-right) */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#7B2FBE] tracking-wider">
                  {card.number}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#FAF7FD] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#F3EAFA]">
                  {card.icon}
                </div>
              </div>

              {/* Service Title */}
              <h4 className="font-heading text-lg sm:text-[19px] text-brand-dark font-medium leading-snug mb-3 transition-colors duration-200 group-hover:text-[#7B2FBE]">
                {card.title}
              </h4>

              {/* Service Description */}
              <p className="font-body text-xs sm:text-[13px] text-brand-muted leading-relaxed mb-6 font-normal">
                {card.description}
              </p>
            </div>

            {/* Card Footer: LEARN MORE with Arrow */}
            <div className="pt-2 border-t border-brand-borderHairline/60 flex items-center justify-between text-[#7B2FBE] group-hover:text-[#6A25A8] transition-colors">
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase">
                LEARN MORE
              </span>
              <span
                className="font-mono text-xs transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
