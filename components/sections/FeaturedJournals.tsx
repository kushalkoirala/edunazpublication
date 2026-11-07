import React from "react";
import Link from "next/link";

export default function FeaturedJournals() {
  return (
    /* BEGIN: FeaturedJournalsSection */
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden" id="journals">
      {/* Decorative dot matrix in upper-left */}
      <div
        className="absolute top-12 left-6 sm:left-12 lg:left-20 pointer-events-none select-none opacity-60 z-0"
        aria-hidden="true"
      >
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 35 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE]/60 block"
              style={{ borderRadius: "9999px" }}
            />
          ))}
        </div>
      </div>

      {/* Decorative Golden Flourish Curved Vector Lines in Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M -100 240 C 200 120 500 200 750 140 C 1050 70 1300 160 1550 120"
          stroke="#A855F7"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="opacity-40"
        />
        <path
          d="M 1100 280 C 1220 240 1350 290 1480 250"
          stroke="#A855F7"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="opacity-45"
        />
      </svg>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow with decorative purple lines */}
          <div className="flex items-center justify-center gap-3 mb-3.5" data-reveal="up">
            <span className="w-8 h-px bg-[#7B2FBE]/70" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#7B2FBE] font-semibold font-body">
              OUR JOURNALS
            </span>
            <span className="w-8 h-px bg-[#7B2FBE]/70" />
          </div>

          {/* Heading */}
          <h2
            data-split="lines"
            className="text-3xl sm:text-4xl lg:text-[46px] text-brand-dark font-heading leading-tight mb-4"
          >
            Featured <span className="text-[#7B2FBE]">Academic</span> Journals
          </h2>

          {/* Subtitle */}
          <p
            data-reveal="up"
            className="text-brand-muted font-body text-sm sm:text-base leading-relaxed font-normal"
          >
            High-quality, peer-reviewed journals across diverse disciplines,
            advancing knowledge and global research collaboration.
          </p>
        </div>

        {/* Asymmetrical Journal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 items-stretch">
          
          {/* ─────────────────────────────────────────────────────────── */}
          {/* Left Large Showcase Card (Journal 1 - 7 columns)            */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col" data-reveal="up">
            <article
              className="bg-[#FCFAF7] border border-[#EBE3D6] rounded-[24px] relative overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col md:flex-row h-full group"
              style={{ borderRadius: "24px" }}
            >
              {/* Left Solid Purple Vertical Accent Strip */}
              <div
                className="w-1.5 bg-[#7B2FBE] absolute top-0 bottom-0 left-0 z-20"
                aria-hidden="true"
              />

              {/* Text Side (Left) */}
              <div className="p-7 sm:p-9 lg:p-10 flex-1 flex flex-col justify-between z-10 pl-8 sm:pl-10">
                <div>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#7B2FBE] font-bold text-xs tracking-wider font-body">01</span>
                    <span className="text-[#7B2FBE]/50">/</span>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#7B2FBE] font-body">
                      SCOPUS Q1 · FEATURED JOURNAL
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-[32px] text-brand-dark leading-tight mb-3">
                    <Link
                      href="/journals/acta-innovations"
                      className="hover:text-[#7B2FBE] transition-colors"
                    >
                      Acta Innovations
                    </Link>
                  </h3>

                  {/* ISSN */}
                  <p className="text-xs font-mono text-brand-muted mb-3">
                    e-ISSN: 2300-5599
                  </p>

                  {/* Description / Scope */}
                  <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-[#7B2FBE] mb-1">
                      Subject Area:
                    </p>
                    <p className="text-xs sm:text-[13px] text-brand-muted leading-relaxed font-body">
                      Social Sciences (miscellaneous), Arts and Humanities, Education, Engineering (miscellaneous), Medicine (miscellaneous), Environmental Sciences, Business, Management and Accounting, etc.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 py-3 px-5 rounded-lg bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-[0.16em] shadow-[0_0_15px_rgba(123,47,190,0.35)] hover:shadow-[0_0_20px_rgba(123,47,190,0.5)] transition-all duration-200"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>SUBMIT ARTICLE</span>
                    <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
                  </Link>
                  <Link
                    href="/journals/acta-innovations"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-dark hover:text-[#7B2FBE] transition-colors"
                  >
                    <span>VIEW DETAILS</span>
                    <span className="font-mono">→</span>
                  </Link>
                </div>
              </div>

              {/* Image Side (Right) */}
              <div className="relative w-full md:w-[48%] min-h-[280px] md:min-h-full overflow-hidden bg-[#F3EFE9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/journal-1.png"
                  alt="Acta Innovations"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Tags (Top Right) */}
                <div
                  className="absolute top-6 right-6 flex flex-col items-end gap-1 pointer-events-none select-none z-10"
                  aria-hidden="true"
                >
                  <span className="text-[10px] tracking-[0.22em] text-[#6A6560] font-semibold uppercase bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    SCOPUS Q1
                  </span>
                  <span className="text-[10px] tracking-[0.22em] text-[#6A6560] font-semibold uppercase bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    SOCIAL SCIENCES
                  </span>
                  <span className="text-[10px] tracking-[0.22em] text-[#6A6560] font-semibold uppercase bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    ENGINEERING
                  </span>
                  <span className="text-[10px] tracking-[0.22em] text-[#6A6560] font-semibold uppercase bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    MEDICINE
                  </span>
                </div>

                {/* 01 Line Indicator Overlay */}
                <div
                  className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center gap-2 pointer-events-none select-none z-10"
                  aria-hidden="true"
                >
                  <span className="text-xs font-heading text-[#7A6A55] font-medium">01</span>
                  <div className="w-px h-8 bg-[#7B2FBE]/50" />
                </div>
              </div>
            </article>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* Right Column: Stacked Cards (Journal 2 & 3 - 5 columns)     */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7">
            
            {/* ─── Card 2: Journal of Intelligent Decision Making and Information Science ─── */}
            <article
              data-reveal="up"
              className="bg-[#FCFAF7] border border-[#EBE3D6] rounded-[24px] relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col sm:flex-row flex-1 group"
              style={{ borderRadius: "24px" }}
            >
              {/* Text Side */}
              <div className="p-6 sm:p-7 lg:p-7 flex-1 flex flex-col justify-between z-10">
                <div>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#7B2FBE] font-bold text-xs tracking-wider font-body">02</span>
                    <span className="text-[#7B2FBE]/50">/</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7B2FBE] font-body">
                      SCOPUS Q1 · CITESCORE 3.4
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl text-brand-dark leading-snug mb-1.5">
                    <Link
                      href="/journals/journal-of-intelligent-decision-making-and-information-science"
                      className="hover:text-[#7B2FBE] transition-colors"
                    >
                      Journal of Intelligent Decision Making and Information Science
                    </Link>
                  </h3>

                  {/* ISSN */}
                  <p className="text-[11px] font-mono text-brand-muted mb-2">
                    e-ISSN: 3079-0875
                  </p>

                  {/* Description */}
                  <p className="text-xs text-brand-muted leading-relaxed font-body mb-4 line-clamp-3">
                    <span className="font-semibold text-brand-dark">Subject Area:</span> Engineering, Computer Science: Artificial Intelligence, Information Systems, Decision Sciences: Management Science &amp; Operations Research.
                  </p>
                </div>

                {/* Link */}
                <div className="pt-1 mt-auto flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7B2FBE] hover:text-[#6620A0] transition-colors"
                  >
                    <span>SUBMIT ARTICLE</span>
                    <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
                  </Link>
                  <Link
                    href="/journals/journal-of-intelligent-decision-making-and-information-science"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted hover:text-brand-dark transition-colors"
                  >
                    <span>DETAILS</span>
                    <span className="font-mono">→</span>
                  </Link>
                </div>
              </div>

              {/* Image Side with Analytics Circular Badge */}
              <div className="relative w-full sm:w-[42%] min-h-[170px] sm:min-h-full overflow-hidden bg-[#F3EFE9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/journal-2.png"
                  alt="Journal of Intelligent Decision Making and Information Science"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Analytics Circular Badge at Junction */}
                <div
                  className="absolute top-5 left-4 sm:-left-4.5 w-9 h-9 rounded-full bg-white shadow-md border border-[#EBE3D6] text-[#7B2FBE] flex items-center justify-center z-10 pointer-events-none"
                  style={{ borderRadius: "9999px" }}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
            </article>

            {/* ─── Card 3: Adolescencia e Saude (Dark Card with Purple Accent) ─── */}
            <article
              data-reveal="up"
              className="bg-[#1C2438] border border-[#7B2FBE]/40 hover:border-[#7B2FBE] rounded-[24px] relative overflow-hidden shadow-[0_16px_40px_rgba(123,47,190,0.15)] hover:shadow-[0_22px_45px_rgba(123,47,190,0.25)] transition-all duration-300 flex flex-col sm:flex-row flex-1 group"
              style={{ borderRadius: "24px", background: "radial-gradient(ellipse 80% 80% at 100% 0%, rgba(123,47,190,0.18) 0%, #1C2438 75%)" }}
            >
              {/* Text Side */}
              <div className="p-6 sm:p-7 lg:p-7 flex-1 flex flex-col justify-between z-10">
                <div>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#C084FC] font-bold text-xs tracking-wider font-body">03</span>
                    <span className="text-white/30">/</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C084FC] font-body">
                      SCOPUS · PUBMED · GOOGLE SCHOLAR
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl text-white leading-snug mb-1.5">
                    <Link
                      href="/journals/adolescencia-e-saude"
                      className="hover:text-[#C084FC] transition-colors"
                    >
                      Adolescencia e Saude
                    </Link>
                  </h3>

                  {/* ISSN */}
                  <p className="text-[11px] font-mono text-white/50 mb-2">
                    ISSN: 1679-9941 | e-ISSN: 2177-5281
                  </p>

                  {/* Description */}
                  <p className="text-xs text-white/70 leading-relaxed font-body mb-4">
                    <span className="font-semibold text-white">Subject Area:</span> Medicine: Pediatrics, Perinatology and Child Health and Medical Related All Domain.
                  </p>
                </div>

                {/* Link */}
                <div className="pt-1 mt-auto flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#C084FC] hover:text-white transition-colors"
                  >
                    <span>SUBMIT ARTICLE</span>
                    <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
                  </Link>
                  <Link
                    href="/journals/adolescencia-e-saude"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 hover:text-white transition-colors"
                  >
                    <span>DETAILS</span>
                    <span className="font-mono">→</span>
                  </Link>
                </div>
              </div>

              {/* Image Side with Book Badge and Floating Tags */}
              <div className="relative w-full sm:w-[42%] min-h-[170px] sm:min-h-full overflow-hidden bg-[#131929]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/journal-3.png"
                  alt="Adolescencia e Saude"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Arched Flourish Curve */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-5"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path
                    d="M 20 200 C 20 100 80 20 200 20"
                    stroke="#A855F7"
                    strokeWidth="1.5"
                    className="opacity-40"
                  />
                </svg>

                {/* Floating Tags (Top Right) */}
                <div
                  className="absolute top-4 right-4 flex flex-col items-end gap-0.5 pointer-events-none select-none z-10"
                  aria-hidden="true"
                >
                  <span className="text-[9px] tracking-[0.2em] text-white/70 font-semibold uppercase">
                    PEDIATRICS
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-white/70 font-semibold uppercase">
                    MEDICINE
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-white/70 font-semibold uppercase">
                    HEALTH
                  </span>
                </div>

                {/* Floating Book Circular Badge at Junction */}
                <div
                  className="absolute top-1/2 left-4 sm:-left-4.5 -translate-y-1/2 w-9 h-9 rounded-full bg-[#7B2FBE] shadow-lg text-white flex items-center justify-center z-10 pointer-events-none"
                  style={{ borderRadius: "9999px" }}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
    /* END: FeaturedJournalsSection */
  );
}
