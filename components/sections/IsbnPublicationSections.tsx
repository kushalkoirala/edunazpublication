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
  },
  {
    id: "gold-hard",
    name: "Gold Package",
    authors: "2 Authors",
    priceInr: "₹11,999",
    priceUsd: "$300",
    inquiryPrefill: "Gold Hard Copy Publication",
    suitableFor: "Two collaborative authors seeking hardcover/paperback physical copies.",
  },
  {
    id: "diamond-hard",
    name: "Diamond Package",
    authors: "3 Authors",
    priceInr: "₹14,999",
    priceUsd: "$400",
    inquiryPrefill: "Diamond Hard Copy Publication",
    suitableFor: "Multi-author research works and departmental book publications.",
  },
  {
    id: "platinum-hard",
    name: "Platinum Package",
    authors: "4 Authors",
    priceInr: "₹17,999",
    priceUsd: "$600",
    inquiryPrefill: "Platinum Hard Copy Publication",
    suitableFor: "Institutional and collaborative monographs with up to 4 registered authors.",
  },
];

// ─────────────────────────────────────────────────────────────
// PUBLICATION TERMS & CONDITIONS DATA
// ─────────────────────────────────────────────────────────────
const PUBLICATION_TERMS = [
  {
    title: "Manuscript Page Limit",
    points: [
      "Up to 350 pages under standard package specifications.",
      "Manuscripts between 350 and 550 pages may incur additional charges.",
      "Manuscripts exceeding 550 pages require a separate quotation.",
      "Recommended format: A5, single-spaced, minimal margins and 12-point font.",
    ],
  },
  {
    title: "Royalty Terms",
    points: [
      "50% author royalty as per applicable package terms.",
      "Royalty is payable after reaching the minimum threshold of 50 copies per business quarter (three months).",
      "Monthly sales reports are shared with authors.",
      "Royalty calculation and release follow Naaz Publications' terms.",
    ],
  },
  {
    title: "Copyright and Sales Agreement",
    points: [
      "Copyright transfer to Naaz Publication is required under the stated terms.",
      "A sales deed is mandatory for royalty arrangements.",
    ],
  },
  {
    title: "Printing and Delivery",
    points: [
      "Printing and postal services require at least 15 additional days beyond the publication timeline.",
    ],
  },
];

export default function IsbnPublicationSections() {
  const { openModal } = useInquiryModal();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

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
      <section aria-labelledby="publication-packages-heading" data-reveal="up">
        {/* Main Section Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
            PUBLICATION PACKAGES
          </p>
          <h2
            id="publication-packages-heading"
            className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-heading leading-tight mb-4"
          >
            Choose the Right ISBN Publication Package
          </h2>
          <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed">
            We offer flexible ISBN book publication packages designed for individual authors,
            co-authors, academic researchers and institutional publications. Choose between
            e-publication and hard copy publication options based on your requirements.
          </p>
        </div>

        {/* E-Publication Subsection Header */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-brand-borderHairline">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl text-brand-dark">
              E-Publication Packages
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-body mt-1">
              Digital publication with ISBN allocation, DOI, editing, and global distribution.
            </p>
          </div>
          <span className="hidden sm:inline-flex text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-[#7B2FBE]/10 text-[#7B2FBE] rounded">
            Digital Edition
          </span>
        </div>

        {/* 4 E-Publication Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {E_PUBLICATION_PACKAGES.map((pkg) => {
            const isExpanded = !!expandedCards[pkg.id];
            const visibleDeliverables = isExpanded
              ? pkg.deliverables
              : pkg.deliverables.slice(0, 4);

            return (
              <article
                key={pkg.id}
                className="bg-[#FAF8F5] border border-[#EBE3D6] hover:border-[#7B2FBE]/60 transition-all duration-300 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(123,47,190,0.08)] relative"
                style={{ borderRadius: "18px" }}
              >
                <div>
                  {/* Top Badge & Package Name */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE] bg-[#7B2FBE]/10 px-2.5 py-0.5 rounded">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-mono text-brand-muted flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                        <path strokeLinecap="round" strokeWidth="1.8" d="M12 7v5l3 2" />
                      </svg>
                      {pkg.timeline}
                    </span>
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl text-brand-dark leading-tight mb-2">
                    {pkg.name}
                  </h4>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-3 pb-3 border-b border-brand-borderHairline">
                    <span className="text-2xl sm:text-3xl font-heading text-brand-dark font-bold">
                      {pkg.priceInr}
                    </span>
                    <span className="text-sm font-body text-brand-muted">
                      / {pkg.priceUsd} USD
                    </span>
                  </div>

                  {/* Suitable For */}
                  <p className="text-xs font-body text-brand-muted leading-relaxed mb-4 min-h-[34px]">
                    {pkg.suitableFor}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-dark">
                      Package Deliverables:
                    </p>
                    <ul className="space-y-1.5 text-xs text-brand-dark font-body" role="list">
                      {visibleDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expand/Collapse Toggle */}
                    {pkg.deliverables.length > 4 && (
                      <button
                        type="button"
                        onClick={() => toggleCard(pkg.id)}
                        className="text-[11px] font-semibold text-[#7B2FBE] hover:text-[#6620A0] transition-colors inline-flex items-center gap-1 mt-1 cursor-pointer focus:outline-none"
                      >
                        <span>
                          {isExpanded
                            ? "Show less"
                            : `+ View ${pkg.deliverables.length - 4} more deliverables`}
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
                <div className="pt-3 border-t border-brand-borderHairline mt-2">
                  <button
                    type="button"
                    onClick={() => openModal(pkg.inquiryPrefill)}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 group shadow-[0_0_15px_rgba(123,47,190,0.3)] hover:shadow-[0_0_20px_rgba(123,47,190,0.5)] cursor-pointer"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>GET STARTED</span>
                    <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
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
        <div className="mb-6">
          <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-2">
            PRINTED EDITIONS
          </p>
          <h3
            id="hardcopy-packages-heading"
            className="text-2xl sm:text-3xl text-brand-dark font-heading leading-tight mb-3"
          >
            Hard Copy Publication Packages
          </h3>
          <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed">
            For authors who prefer printed books, we offer physical book publication packages with
            professional binding, laminated covers and printed interiors.
          </p>
        </div>

        {/* Shared Specifications Banner */}
        <div
          className="bg-brand-bgGray border border-brand-borderHairline p-5 sm:p-6 rounded-[14px] mb-8"
          style={{ borderRadius: "14px" }}
        >
          <h4 className="font-heading text-base text-brand-dark mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#7B2FBE] rounded-full" />
            Shared Print Specifications Included Across All Packages:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-brand-dark font-body">
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Perfect binding</strong> for lasting structural quality</span>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>High-quality</strong>, multi-coloured laminated cover</span>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Black-and-white</strong> interior printing</span>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Hardcopy packages include a total of <strong>4 printed copies</strong>, which will be sent to the first author</span>
            </div>
            <div className="flex items-start gap-2 sm:col-span-2">
              <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Available hardcopy formats: <strong>A4, A5, and B5</strong></span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-brand-borderHairline flex flex-col sm:flex-row sm:items-center justify-between text-xs text-brand-muted gap-2">
            <span>• INR prices include postal charges within India, except international postal charges.</span>
            <span>• USD prices do not include postal charges.</span>
          </div>
        </div>

        {/* 4 Hard Copy Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {HARD_COPY_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className="bg-[#FAF8F5] border border-[#EBE3D6] hover:border-[#7B2FBE]/60 transition-all duration-300 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(123,47,190,0.08)]"
              style={{ borderRadius: "18px" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE] bg-[#7B2FBE]/10 px-2.5 py-0.5 rounded">
                    {pkg.authors}
                  </span>
                  <span className="text-[11px] font-mono text-brand-muted uppercase">
                    4 Physical Copies
                  </span>
                </div>

                <h4 className="font-heading text-xl sm:text-2xl text-brand-dark leading-tight mb-2">
                  {pkg.name}
                </h4>

                <div className="flex items-baseline gap-2 mb-3 pb-3 border-b border-brand-borderHairline">
                  <span className="text-2xl sm:text-3xl font-heading text-brand-dark font-bold">
                    {pkg.priceInr}
                  </span>
                  <span className="text-sm font-body text-brand-muted">
                    / {pkg.priceUsd} USD
                  </span>
                </div>

                <p className="text-xs font-body text-brand-muted leading-relaxed mb-4">
                  {pkg.suitableFor}
                </p>

                <div className="text-xs text-brand-dark font-body space-y-1 mb-4 p-3 bg-white/70 border border-brand-borderHairline rounded-lg">
                  <p className="font-semibold text-[11px] uppercase tracking-wider text-[#7B2FBE]">
                    Included Package Specs:
                  </p>
                  <p>• Perfect binding &amp; laminated cover</p>
                  <p>• Black-and-white interior printing</p>
                  <p>• 4 printed copies sent to first author</p>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="pt-3 border-t border-brand-borderHairline">
                <button
                  type="button"
                  onClick={() => openModal(pkg.inquiryPrefill)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 group shadow-[0_0_15px_rgba(123,47,190,0.3)] hover:shadow-[0_0_20px_rgba(123,47,190,0.5)] cursor-pointer"
                  style={{ borderRadius: "8px" }}
                >
                  <span>GET STARTED</span>
                  <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pricing Comparison Table (clean & responsive) */}
        <div className="overflow-x-auto border border-brand-borderHairline rounded-xl bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm font-body">
            <thead>
              <tr className="bg-brand-bgGray border-b border-brand-borderHairline text-brand-dark uppercase text-[11px] tracking-wider font-semibold">
                <th className="py-3 px-4">Package</th>
                <th className="py-3 px-4">Authors</th>
                <th className="py-3 px-4 text-right">INR Price</th>
                <th className="py-3 px-4 text-right">USD Price</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-borderHairline">
              {HARD_COPY_PACKAGES.map((row) => (
                <tr key={row.id} className="hover:bg-brand-bgGray/40 transition-colors">
                  <td className="py-3 px-4 font-heading text-sm sm:text-base font-semibold text-brand-dark">
                    {row.name}
                  </td>
                  <td className="py-3 px-4 text-brand-muted">{row.authors}</td>
                  <td className="py-3 px-4 text-right font-mono font-semibold text-brand-dark">
                    {row.priceInr}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-brand-muted">
                    {row.priceUsd}
                  </td>
                  <td className="py-3 px-4 text-center">
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
      </section>

      <div className="hairline-divider" data-line />

      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 6: IMPORTANT PUBLICATION TERMS & CONDITIONS     */}
      {/* ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="publication-terms-heading" data-reveal="up">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
            PUBLICATION INFORMATION
          </p>
          <h2
            id="publication-terms-heading"
            className="text-2xl sm:text-3xl text-brand-dark font-heading leading-tight mb-4"
          >
            Important Publication Terms &amp; Conditions
          </h2>
          <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed">
            Please review the key publication specifications, manuscript volume rules, and royalty
            disbursement policies before initiating your book publication agreement.
          </p>
        </div>

        {/* 4 Information Cards in a 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-6">
          {PUBLICATION_TERMS.map((term, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 bg-brand-bgGray/70 border border-brand-borderHairline rounded-[14px]"
              style={{ borderRadius: "14px" }}
            >
              <h4 className="font-heading text-lg text-brand-dark mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#7B2FBE] flex-shrink-0" />
                <span>{term.title}</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-muted font-body">
                {term.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7B2FBE] font-bold leading-tight mt-0.5">•</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer Box */}
        <div
          className="p-4 sm:p-5 bg-[#FAF8F5] border-l-4 border-[#7B2FBE] border-t border-r border-b border-[#EBE3D6] text-xs text-brand-muted leading-relaxed rounded-r-lg"
        >
          <p className="font-medium text-brand-dark mb-1">
            Publication Policy Note:
          </p>
          <p>
            All publication services, timelines, additional charges, distribution arrangements and
            royalty payments are subject to applicable package terms and agreement.
          </p>
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

