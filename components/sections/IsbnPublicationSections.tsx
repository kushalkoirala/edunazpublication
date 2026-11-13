"use client";

import React, { useState } from "react";
import { useInquiryModal } from "@/components/ui/InquiryModal";

// ─────────────────────────────────────────────────────────────
// E-PUBLICATION PACKAGES DATA
// ─────────────────────────────────────────────────────────────
const E_PUBLICATION_PACKAGES = [
  {
    id: "silver-e",
    name: "Silver Package",
    badge: "1 Author",
    priceInr: "₹5,000",
    priceUsd: "$100",
    inquiryPrefill: "Silver E-Publication",
    suitableFor:
      "Suitable for solo authors, first-time writers and individual researchers.",
    timeline: "15 days",
    deliverables: [
      "ISBN and barcode",
      "Book DOI",
      "Complete e-book creation (PDF/ePub)",
      "Professional editing and proofreading",
      "Interior formatting and typesetting",
      "Custom cover design",
      "E-book platform distribution",
      "Metadata optimization",
      "50% author royalty as per applicable terms",
      "Dedicated project manager",
    ],
  },
  {
    id: "gold-e",
    name: "Gold Package",
    badge: "2 Authors",
    priceInr: "₹7,000",
    priceUsd: "$120",
    inquiryPrefill: "Gold E-Publication",
    suitableFor:
      "Suitable for co-authored academic books and collaborative research works.",
    timeline: "10 days",
    deliverables: [
      "ISBN and barcode with both authors' names",
      "Book-level DOI",
      "Final e-book files (PDF/ePub)",
      "Editing and proofreading",
      "Professional layout and typography",
      "Custom cover design",
      "E-book platform distribution",
      "Metadata optimization for both authors",
      "50% joint royalty as per agreement",
      "Dedicated project manager",
    ],
  },
  {
    id: "diamond-e",
    name: "Diamond Package",
    badge: "3 Authors",
    priceInr: "₹9,000",
    priceUsd: "$150",
    inquiryPrefill: "Diamond E-Publication",
    suitableFor:
      "Suitable for multi-author works, edited volumes and departmental publications.",
    timeline: "5 days",
    deliverables: [
      "ISBN and barcode with three authors listed",
      "Book DOI",
      "Optional chapter-level DOIs",
      "Complete e-book (PDF/ePub)",
      "Multi-author editing and proofreading",
      "Academic formatting and layout",
      "Professional cover design",
      "E-book platform distribution",
      "Enhanced metadata",
      "50% author royalty as per applicable terms",
      "Dedicated project manager",
    ],
  },
  {
    id: "platinum-e",
    name: "Platinum Package",
    badge: "4 Authors",
    priceInr: "₹12,000",
    priceUsd: "$200",
    inquiryPrefill: "Platinum E-Publication",
    suitableFor:
      "Suitable for departmental textbooks, institutional reports and collaborative research monographs.",
    timeline: "5 days",
    deliverables: [
      "ISBN and barcode listing four authors",
      "Book-level DOI",
      "Optional chapter-level DOIs",
      "Final e-book (PDF/ePub)",
      "Comprehensive editing and proofreading",
      "Professional interior layout",
      "Premium cover design",
      "E-book platform distribution",
      "Enhanced metadata strategy",
      "50% author royalty as per applicable terms",
      "Dedicated project manager",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// HARD COPY PUBLICATION PACKAGES DATA
// ─────────────────────────────────────────────────────────────
const HARD_COPY_PACKAGES = [
  {
    id: "silver-hard",
    name: "Silver Package",
    authors: "1 Author",
    priceInr: "₹9,999",
    priceUsd: "$250",
    inquiryPrefill: "Silver Hard Copy Publication",
    suitableFor: "Individual authors requiring premium physical printed copies with ISBN.",
    featured: false,
  },
  {
    id: "gold-hard",
    name: "Gold Package",
    authors: "2 Authors",
    priceInr: "₹11,999",
    priceUsd: "$300",
    inquiryPrefill: "Gold Hard Copy Publication",
    suitableFor: "Two collaborative authors seeking hardcover/paperback physical copies.",
    featured: true,
  },
  {
    id: "diamond-hard",
    name: "Diamond Package",
    authors: "3 Authors",
    priceInr: "₹14,999",
    priceUsd: "$400",
    inquiryPrefill: "Diamond Hard Copy Publication",
    suitableFor: "Multi-author research works and departmental book publications.",
    featured: false,
  },
  {
    id: "platinum-hard",
    name: "Platinum Package",
    authors: "4 Authors",
    priceInr: "₹17,999",
    priceUsd: "$600",
    inquiryPrefill: "Platinum Hard Copy Publication",
    suitableFor: "Institutional and collaborative monographs with up to 4 registered authors.",
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────
// PUBLICATION TERMS & CONDITIONS DATA
// ─────────────────────────────────────────────────────────────
const PUBLICATION_TERMS = [
  {
    title: "Manuscript Page Limit",
    icon: "document",
    points: [
      "Up to 350 pages under standard package specifications.",
      "Manuscripts between 350 and 550 pages may incur additional charges.",
      "Manuscripts exceeding 550 pages require a separate quotation.",
      "Recommended format: A5, single-spaced, minimal margins and 12-point font.",
    ],
  },
  {
    title: "Royalty Terms",
    icon: "coins",
    points: [
      "50% author royalty as per applicable package terms.",
      "Royalty is payable after reaching the minimum threshold of 50 copies per business quarter (three months).",
      "Monthly sales reports are shared with authors.",
      "Royalty calculation and release follow Naaz Publications' terms.",
    ],
  },
  {
    title: "Copyright and Sales Agreement",
    icon: "copyright",
    points: [
      "Copyright transfer to Naaz Publication is required under the stated terms.",
      "A sales deed is mandatory for royalty arrangements.",
    ],
  },
  {
    title: "Printing and Delivery",
    icon: "printer",
    points: [
      "Printing and postal services require at least 15 additional days beyond the publication timeline.",
    ],
  },
];

export default function IsbnPublicationSections() {
  const { openModal } = useInquiryModal();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [isRibbonExpanded, setIsRibbonExpanded] = useState(false);

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-16 mt-12 mb-12">
      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 4: E-PUBLICATION PACKAGES                       */}
      {/* ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="publication-packages-heading" data-reveal="up" className="pt-4">
        {/* Main Section Header */}
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#7B2FBE] font-semibold font-body">
              PUBLICATION PACKAGES
            </p>
            <span className="h-0.5 w-12 bg-[#7B2FBE] rounded-full" />
          </div>
          <h2
            id="publication-packages-heading"
            className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-heading leading-tight mb-4"
          >
            Choose the Right ISBN <br />
            <span className="text-[#7B2FBE]">Publication Package</span>
          </h2>
          <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed">
            We offer flexible ISBN book publication packages for individual authors,
            co-authors, academic researchers and institutional publications.
          </p>
        </div>

        {/* E-Publication Unified Ribbon / Pill Bar */}
        <div
          className={`bg-[#FAF9FC] border border-[#EBE7F2] transition-all duration-300 mb-8 ${
            isRibbonExpanded
              ? "rounded-[20px] px-5 sm:px-6 py-3.5 shadow-sm"
              : "rounded-full px-5 sm:px-6 py-2.5 sm:py-3"
          }`}
        >
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <span className="text-[#7B2FBE] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </span>
              <span className="font-heading font-semibold text-brand-dark text-base sm:text-lg flex-shrink-0">
                E-Publication Packages
              </span>
              <span className="hidden sm:inline-block h-4 w-px bg-[#DDD6F3] flex-shrink-0" />

              {/* Expandable Description */}
              <div className="min-w-0 flex-1 text-xs sm:text-sm text-brand-muted font-body">
                {isRibbonExpanded ? (
                  <span className="inline leading-relaxed">
                    Digital publication with ISBN allocation, DOI, editing, and global distribution.{" "}
                    <button
                      type="button"
                      onClick={() => setIsRibbonExpanded(false)}
                      className="text-[#7B2FBE] font-semibold hover:underline cursor-pointer inline-flex items-center gap-0.5 ml-1 text-xs"
                    >
                      Show less ↑
                    </button>
                  </span>
                ) : (
                  <div
                    onClick={() => setIsRibbonExpanded(true)}
                    className="flex items-center min-w-0 cursor-pointer group"
                    title="Click to read full description"
                  >
                    <span className="truncate group-hover:text-brand-dark transition-colors">
                      Digital publication with ISBN allocation, DOI, editing, and global distribution.
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsRibbonExpanded(true);
                      }}
                      className="text-[#7B2FBE] font-semibold hover:underline cursor-pointer flex-shrink-0 ml-1.5 inline-flex items-center gap-0.5 text-xs bg-[#F3EAFF] px-2 py-0.5 rounded-full"
                    >
                      more ↓
                    </button>
                  </div>
                )}
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 bg-[#F3EAFF] text-[#7B2FBE] rounded-full flex-shrink-0">
              DIGITAL EDITION
            </span>
          </div>
        </div>

        {/* 4 E-Publication Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {E_PUBLICATION_PACKAGES.map((pkg) => {
            const isExpanded = !!expandedCards[pkg.id];
            const visibleDeliverables = isExpanded
              ? pkg.deliverables
              : pkg.deliverables.slice(0, 3);

            return (
              <article
                key={pkg.id}
                className="bg-white border border-[#EBE7F2] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(123,47,190,0.06)] hover:shadow-[0_8px_32px_rgba(123,47,190,0.12)] hover:border-[#C084FC] transition-all relative overflow-hidden group"
              >
                <div>
                  {/* Top Bar: Author Badge Pill + Timeline Pill */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F3EAFF] text-[#7B2FBE] text-xs font-semibold rounded-full font-body">
                      {pkg.id === "silver-e" ? (
                        <svg className="w-3.5 h-3.5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      <span>{pkg.badge}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-brand-dark font-medium font-body">
                      <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth="1.75" />
                        <path strokeLinecap="round" strokeWidth="1.75" d="M12 7v5l3 2" />
                      </svg>
                      <span>{pkg.timeline}</span>
                    </span>
                  </div>

                  {/* Title & Pricing */}
                  <h4 className="font-heading text-xl sm:text-2xl text-brand-dark font-semibold leading-tight mb-1">
                    {pkg.name}
                  </h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-[#7B2FBE]">
                      {pkg.priceInr}
                    </span>
                    <span className="text-xs sm:text-sm text-brand-muted font-body">
                      / {pkg.priceUsd} USD
                    </span>
                  </div>

                  {/* Divider line */}
                  <div className="h-px bg-[#F0ECF8] my-4" />

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 my-2">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-brand-dark font-body" role="list">
                      {visibleDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <svg
                            className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expand/Collapse Toggle */}
                    {pkg.deliverables.length > 3 && (
                      <button
                        type="button"
                        onClick={() => toggleCard(pkg.id)}
                        className="text-[11px] font-semibold text-[#7B2FBE] hover:text-[#6620A0] transition-colors inline-flex items-center gap-1 mt-2 cursor-pointer focus:outline-none"
                      >
                        <span>
                          {isExpanded
                            ? "Show less"
                            : `+ View ${pkg.deliverables.length - 3} more deliverables`}
                        </span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Get Started Button */}
                <div className="pt-4 border-t border-[#F0ECF8] mt-5">
                  <button
                    type="button"
                    onClick={() => openModal(pkg.inquiryPrefill)}
                    className="w-full py-3 sm:py-3.5 bg-[#7B2FBE] hover:bg-[#6620A0] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-[14px] flex items-center justify-center gap-2 transition-all shadow-[0_4px_16px_rgba(123,47,190,0.25)] hover:shadow-[0_6px_22px_rgba(123,47,190,0.35)] cursor-pointer"
                  >
                    <span>GET STARTED</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="hairline-divider" data-line />

      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 5: HARD COPY PUBLICATION PACKAGES               */}
      {/* ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="hardcopy-packages-heading" data-reveal="up">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-semibold">
              PRINTED EDITIONS
            </span>
            <div className="h-[1.5px] w-10 bg-[#7B2FBE]/50 rounded-full" />
          </div>
          <h3
            id="hardcopy-packages-heading"
            className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-heading leading-tight mb-3"
          >
            Hard Copy Publication <span className="text-[#7B2FBE]">Packages</span>
          </h3>
          <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed max-w-3xl">
            For authors who prefer printed books, we offer physical book publication packages with
            professional binding, laminated covers and printed interiors.
          </p>
        </div>

        {/* Shared Print Specifications Banner */}
        <div className="bg-gradient-to-br from-[#FAF7FE] via-[#F8F3FD] to-[#F3EBFC] border border-[#EBE7F2] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 mb-8 relative overflow-hidden shadow-[0_4px_24px_rgba(123,47,190,0.04)]">
          {/* Subtle decorative purple corner glow & wave */}
          <div
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#7B2FBE]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-6 -right-6 w-56 h-36 bg-gradient-to-tl from-[#E8DAFA]/40 to-transparent rounded-tl-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Icon, Title & Badge */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-[14px] bg-white border border-[#E9DFF7] flex items-center justify-center text-[#7B2FBE] shadow-sm mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-2xl sm:text-3xl text-brand-dark leading-tight mb-2.5">
                Shared Print<br className="hidden sm:inline" /> Specifications
              </h4>
              <div className="inline-flex items-center gap-2">
                <span className="h-[1.5px] w-4 bg-[#7B2FBE]" />
                <span className="text-xs sm:text-sm font-semibold text-[#7B2FBE] tracking-wide whitespace-nowrap">
                  Included Across All Packages
                </span>
                <span className="h-[1.5px] w-4 bg-[#7B2FBE]" />
              </div>
            </div>

            {/* Right Column: 2x3 Feature Specifications Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 lg:pl-6 lg:border-l lg:border-[#E8DAFA]/60">
              {/* Feature 1: Perfect binding */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-[14px] bg-white border border-[#EAE3F5] shadow-sm flex items-center justify-center text-[#7B2FBE] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="font-body text-xs sm:text-sm">
                  <strong className="font-bold text-brand-dark block text-sm">Perfect binding</strong>
                  <span className="text-brand-muted text-xs">for lasting quality</span>
                </div>
              </div>

              {/* Feature 2: High-quality cover */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-[14px] bg-white border border-[#EAE3F5] shadow-sm flex items-center justify-center text-[#7B2FBE] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="font-body text-xs sm:text-sm">
                  <strong className="font-bold text-brand-dark block text-sm">High-quality,</strong>
                  <span className="text-brand-muted text-xs leading-snug">multi-coloured<br />laminated cover</span>
                </div>
              </div>

              {/* Feature 3: Black-and-white interior printing */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-[14px] bg-white border border-[#EAE3F5] shadow-sm flex items-center justify-center text-[#7B2FBE] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </div>
                <div className="font-body text-xs sm:text-sm">
                  <strong className="font-bold text-brand-dark block text-sm">Black-and-white</strong>
                  <span className="text-brand-muted text-xs">interior printing</span>
                </div>
              </div>

              {/* Feature 4: Total of 4 printed copies */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-[14px] bg-white border border-[#EAE3F5] shadow-sm flex items-center justify-center text-[#7B2FBE] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="font-body text-xs sm:text-sm">
                  <strong className="font-bold text-brand-dark block text-sm">Total of 4 printed copies</strong>
                  <span className="text-brand-muted text-xs block">(sent to the first author)</span>
                </div>
              </div>

              {/* Feature 5: Available formats */}
              <div className="flex items-center gap-3.5 sm:col-span-2">
                <div className="w-11 h-11 rounded-[14px] bg-white border border-[#EAE3F5] shadow-sm flex items-center justify-center text-[#7B2FBE] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <div className="font-body text-xs sm:text-sm">
                  <span className="text-brand-dark font-medium text-xs block mb-1">Available formats:</span>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-[8px] bg-[#F3EAFF] text-xs font-bold text-[#7B2FBE] shadow-xs">
                      A4
                    </span>
                    <span className="px-3 py-1 rounded-[8px] bg-[#F3EAFF] text-xs font-bold text-[#7B2FBE] shadow-xs">
                      A5
                    </span>
                    <span className="px-3 py-1 rounded-[8px] bg-[#F3EAFF] text-xs font-bold text-[#7B2FBE] shadow-xs">
                      B5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Hard Copy Package Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {HARD_COPY_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`bg-white rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.featured
                  ? "border-2 border-[#7B2FBE] shadow-[0_8px_30px_rgba(123,47,190,0.1)] hover:shadow-[0_12px_36px_rgba(123,47,190,0.15)]"
                  : "border border-[#E8DEF8] shadow-[0_4px_20px_rgba(123,47,190,0.03)] hover:shadow-[0_8px_30px_rgba(123,47,190,0.08)]"
              }`}
            >
              <div>
                {/* Top Tag Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3EAFF] text-[#7B2FBE]">
                    {pkg.authors}
                  </span>
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                    4 PHYSICAL COPIES
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-heading text-2xl font-bold text-brand-dark mb-2">
                  {pkg.name}
                </h4>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-3xl font-heading font-bold text-[#7B2FBE]">
                    {pkg.priceInr}
                  </span>
                  <span className="text-sm text-brand-muted font-body">
                    / {pkg.priceUsd} USD
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-brand-muted font-body leading-relaxed mb-4">
                  {pkg.suitableFor}
                </p>

                {/* Included Package Specs Box */}
                <div className="bg-[#FAF7FE] border border-[#F0ECF8] rounded-[16px] p-4 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE] mb-2.5">
                    INCLUDED PACKAGE SPECS:
                  </p>
                  <ul className="space-y-2 text-xs text-brand-dark font-body">
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#7B2FBE] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Perfect binding &amp; laminated cover</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#7B2FBE] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Black-and-white interior printing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#7B2FBE] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>4 printed copies sent to first author</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div>
                <button
                  type="button"
                  onClick={() => openModal(pkg.inquiryPrefill)}
                  className={`w-full py-3 px-4 rounded-[12px] font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    pkg.featured
                      ? "bg-[#7B2FBE] hover:bg-[#6620A0] text-white shadow-[0_4px_16px_rgba(123,47,190,0.25)]"
                      : "border border-[#7B2FBE] text-[#7B2FBE] hover:bg-[#7B2FBE] hover:text-white"
                  }`}
                >
                  GET STARTED →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pricing Comparison Table */}
        <div className="overflow-x-auto border border-[#EBE7F2] rounded-[18px] bg-white shadow-sm mb-6">
          <table className="w-full text-left text-xs sm:text-sm font-body">
            <thead>
              <tr className="bg-[#FAF7FE] border-b border-[#EBE7F2] text-brand-dark uppercase text-[11px] tracking-wider font-bold">
                <th className="py-3.5 px-6">PACKAGE</th>
                <th className="py-3.5 px-6">AUTHORS</th>
                <th className="py-3.5 px-6 text-center">INR PRICE</th>
                <th className="py-3.5 px-6 text-center">USD PRICE</th>
                <th className="py-3.5 px-6 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBE7F2]">
              {HARD_COPY_PACKAGES.map((row) => (
                <tr key={row.id} className="hover:bg-[#FAF7FE]/50 transition-colors">
                  <td className="py-4 px-6 font-heading text-sm sm:text-base font-semibold text-brand-dark">
                    {row.name}
                  </td>
                  <td className="py-4 px-6 text-brand-muted">{row.authors}</td>
                  <td className="py-4 px-6 text-center font-heading font-bold text-brand-dark">
                    {row.priceInr}
                  </td>
                  <td className="py-4 px-6 text-center font-body text-brand-muted">
                    {row.priceUsd}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      type="button"
                      onClick={() => openModal(row.inquiryPrefill)}
                      className="inline-flex items-center text-xs font-semibold text-[#7B2FBE] hover:text-[#6620A0] cursor-pointer"
                    >
                      Inquire →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Postal Notice Box */}
        <div className="bg-[#FAF7FE] border border-[#EBE7F2] rounded-[16px] p-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-brand-muted font-body gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border border-[#7B2FBE] flex items-center justify-center text-[#7B2FBE] flex-shrink-0 font-heading font-bold text-xs">
              i
            </div>
            <span>
              INR prices include postal charges within India, except international postal charges.
            </span>
          </div>
          <div className="hidden sm:block h-6 w-[1px] bg-[#EBE7F2]" />
          <div>
            <span>USD prices do not include postal charges.</span>
          </div>
        </div>
      </section>

      <div className="hairline-divider" data-line />

      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 6: IMPORTANT PUBLICATION TERMS & CONDITIONS     */}
      {/* ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="publication-terms-heading" data-reveal="up">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-semibold">
              PUBLICATION INFORMATION
            </span>
            <div className="h-[1.5px] w-12 bg-[#7B2FBE]/50 rounded-full" />
          </div>
          <h2
            id="publication-terms-heading"
            className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-heading leading-tight mb-3"
          >
            Important Publication <span className="text-[#7B2FBE]">Terms &amp; Conditions</span>
          </h2>
          <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed max-w-3xl">
            Please review the key publication specifications, manuscript volume rules, and royalty
            disbursement policies before initiating your book publication agreement.
          </p>
        </div>

        {/* 4 Information Cards in a 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PUBLICATION_TERMS.map((term, index) => (
            <div
              key={index}
              className="bg-white/80 border border-[#EBE7F2] rounded-[24px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(123,47,190,0.03)] hover:shadow-[0_8px_30px_rgba(123,47,190,0.07)] transition-all duration-300"
            >
              {/* Card Header with Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[14px] bg-[#F3EAFF] flex items-center justify-center text-[#7B2FBE] flex-shrink-0 shadow-sm">
                  {term.icon === "document" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {term.icon === "coins" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8c-3.866 0-7 1.343-7 3s3.134 3 7 3 7-1.343 7-3-3.134-3-7-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 11v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 15v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4" />
                    </svg>
                  )}
                  {term.icon === "copyright" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14.5 9.5a3.5 3.5 0 100 5" />
                    </svg>
                  )}
                  {term.icon === "printer" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-dark">
                  {term.title}
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-xs sm:text-sm text-brand-dark/90 font-body">
                {term.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE] flex-shrink-0 mt-2" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline-divider" data-line />

      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 7: PDF DOWNLOAD SECTION (AUTHOR RESOURCES)      */}
      {/* ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="author-resources-heading"
        className="p-6 sm:p-8 bg-gradient-to-br from-[#FAF8F5] to-[#F5EFE6] border-2 border-[#7B2FBE]/30 rounded-[20px] shadow-[0_12px_40px_rgba(123,47,190,0.06)] relative overflow-hidden"
        style={{ borderRadius: "20px" }}
        data-reveal="up"
      >
        {/* Subtle decorative purple corner glow */}
        <div
          className="absolute -top-12 -right-12 w-36 h-36 bg-[#7B2FBE]/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-2">
            AUTHOR RESOURCES
          </p>
          <h3
            id="author-resources-heading"
            className="text-2xl sm:text-3xl text-brand-dark font-heading leading-tight mb-3"
          >
            Preparing Your Manuscript?
          </h3>
          <p className="text-brand-muted font-body text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl">
            Download our complete ISBN Book Template &amp; Author Submission Guidelines to understand the
            required book structure, manuscript formatting specifications and submission checklist
            before submitting your manuscript.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="/Edunaaz-ISBN-Book-Submission-Guidelines.pdf"
              download="Edunaaz-ISBN-Book-Submission-Guidelines.pdf"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 group shadow-[0_0_20px_rgba(123,47,190,0.35)] hover:shadow-[0_0_25px_rgba(123,47,190,0.5)] cursor-pointer"
              style={{ borderRadius: "8px" }}
            >
              {/* PDF Icon */}
              <svg
                className="w-4 h-4 mr-2.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-2v1.5h1.5v1H7.5V16H6v-6h3.5c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5zm5 4.5h-3v-6h3c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5zm4.5-4.5H17V13h1.5v1H17v2h-1.5v-6H19v1.5zM9 12V11H7.5v1H9zm4.5 2.5V11h-1.5v3.5h1.5z" />
              </svg>
              <span>DOWNLOAD SUBMISSION GUIDELINES</span>
              {/* Download arrow icon */}
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-y-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <div className="flex items-center gap-2 text-xs text-brand-muted font-body">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE]" />
              <span>PDF Document · Free Download</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

