import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    /* BEGIN: ServicesSection */
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Decorative dot matrix in upper-left */}
      <div
        className="absolute top-12 left-6 sm:left-12 lg:left-20 pointer-events-none select-none -z-0 opacity-70"
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

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow with decorative hairlines */}
          <div className="flex items-center justify-center gap-3 mb-3.5" data-reveal="up">
            <span className="w-8 h-px bg-[#7B2FBE]/70" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#7B2FBE] font-semibold font-body">
              OUR SERVICES
            </span>
            <span className="w-8 h-px bg-[#7B2FBE]/70" />
          </div>

          {/* Heading */}
          <h2
            data-split="lines"
            className="text-3xl sm:text-4xl lg:text-[44px] text-brand-dark font-heading leading-tight mb-4"
          >
            Comprehensive <span className="text-[#7B2FBE]">Research Support</span>
          </h2>

          {/* Paragraph */}
          <p
            data-reveal="up"
            className="text-brand-muted font-body text-sm sm:text-base leading-relaxed font-normal"
          >
            From research ideation to global publication, we provide end-to-end support for
            researchers, scholars and institutions.
          </p>
        </div>

        {/* Three Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-7 items-stretch">

          {/* ─────────────────────────────────────────────────────────── */}
          {/* Card 1: Research Publication (Light Card)                   */}
          {/* ─────────────────────────────────────────────────────────── */}
          <article
            data-reveal="up"
            className="bg-[#FAF8F5] border border-[#EFEAE2] rounded-[24px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            style={{ borderRadius: "24px" }}
          >
            {/* Watermark 01 */}
            <span
              className="font-heading text-8xl sm:text-9xl text-[#EDE4D5]/70 font-normal leading-none absolute top-3 right-5 pointer-events-none select-none z-0"
              aria-hidden="true"
            >
              01
            </span>

            <div className="relative z-10">
              {/* Circular Outline Icon */}
              <div
                className="w-12 h-12 rounded-full border border-[#7B2FBE]/60 flex items-center justify-center text-[#7B2FBE] mb-6 bg-[#7B2FBE]/5 backdrop-blur-sm"
                style={{ borderRadius: "9999px" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              {/* Eyebrow */}
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#7B2FBE] mb-2.5 block">
                — RESEARCH PUBLICATION
              </span>

              {/* Title */}
              <h3 className="font-heading text-3xl sm:text-[32px] text-brand-dark leading-tight mb-4">
                Research<br />Publication
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] font-body text-brand-muted leading-relaxed mb-6">
                Guidance through journal selection, manuscript preparation, formatting and
                submission, ensuring higher chances of acceptance.
              </p>

              {/* Feature List */}
              <ul className="space-y-0" role="list">
                <li className="border-b border-[#EBE3D6] py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-brand-dark font-medium">
                    Journal selection guidance
                  </span>
                </li>

                <li className="border-b border-[#EBE3D6] py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-brand-dark font-medium">
                    Manuscript preparation
                  </span>
                </li>

                <li className="border-b border-[#EBE3D6] py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-brand-dark font-medium">
                    Formatting to journal requirements
                  </span>
                </li>

                <li className="border-b border-[#EBE3D6] py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-brand-dark font-medium">

                    Support from submission to final publication.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Link */}
            <div className="pt-8 mt-auto relative z-10">
              <Link
                href="/services/research-publication"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7B2FBE] hover:text-[#6620A0] transition-colors group"
              >
                <span>DISCOVER THIS SERVICE</span>
                <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
              </Link>
            </div>
          </article>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* Card 2: Writing & Editing Excellence (Middle Featured Card) */}
          {/* ─────────────────────────────────────────────────────────── */}
          <article
            data-reveal="clip-up"
            className="bg-gradient-to-b from-[#1E0B33] to-[#120522] border border-[#3A1463] rounded-[24px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-[0_24px_55px_rgba(20,5,35,0.40)] hover:-translate-y-1 transition-all duration-300 lg:-translate-y-2"
            style={{ borderRadius: "24px" }}
          >
            {/* Watermark 02 */}
            <span
              className="font-heading text-8xl sm:text-9xl text-white/5 font-normal leading-none absolute top-3 right-5 pointer-events-none select-none z-0"
              aria-hidden="true"
            >
              02
            </span>

            <div className="relative z-10">
              {/* Circular Outline Icon with Purple Border */}
              <div
                className="w-12 h-12 rounded-full border border-[#C084FC]/70 flex items-center justify-center text-[#C084FC] mb-6 bg-white/5 backdrop-blur-sm"
                style={{ borderRadius: "9999px" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>

              {/* Eyebrow */}
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C084FC] mb-2.5 block">
                — WRITING &amp; EDITING
              </span>

              {/* Title */}
              <h3 className="font-heading text-3xl sm:text-[32px] text-white leading-tight mb-4">
                Writing &amp;<br />
                <span className="text-[#C084FC]">Editing Excellence</span>
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] font-body text-white/70 leading-relaxed mb-6">
                Professional writing and editorial support for research articles, review papers,
                thesis and dissertations, ensuring clarity, structure and academic rigor.
              </p>

              {/* Feature List */}
              <ul className="space-y-0" role="list">
                <li className="border-b border-white/10 py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full border border-white/20 text-[#C084FC] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-white/90 font-medium">
                    Research articles
                  </span>
                </li>

                <li className="border-b border-white/10 py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full border border-white/20 text-[#C084FC] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-white/90 font-medium">
                    Review papers
                  </span>
                </li>

                <li className="border-b border-white/10 py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full border border-white/20 text-[#C084FC] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-white/90 font-medium">
                    Thesis &amp; dissertations
                  </span>
                </li>

                <li className="border-b border-white/10 py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full border border-white/20 text-[#C084FC] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-white/90 font-medium">
                    Proofreading and editing
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Button (Solid Purple Gradient) */}
            <div className="pt-8 mt-auto relative z-10">
              <Link
                href="/services/writing-and-editing"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(123,47,190,0.4)] hover:shadow-[0_0_25px_rgba(123,47,190,0.6)] transition-all duration-200 group"
                style={{ borderRadius: "12px" }}
              >
                <span>DISCOVER THIS SERVICE</span>
                <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
              </Link>
            </div>
          </article>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* Card 3: ISBN Book Publication (Light Card)                  */}
          {/* ─────────────────────────────────────────────────────────── */}
          <article
            data-reveal="up"
            className="bg-[#FAF8F5] border border-[#EFEAE2] rounded-[24px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            style={{ borderRadius: "24px" }}
          >
            {/* Watermark 03 */}
            <span
              className="font-heading text-8xl sm:text-9xl text-[#EDE4D5]/70 font-normal leading-none absolute top-3 right-5 pointer-events-none select-none z-0"
              aria-hidden="true"
            >
              03
            </span>

            <div className="relative z-10">
              {/* Circular Outline Icon */}
              <div
                className="w-12 h-12 rounded-full border border-[#7B2FBE]/60 flex items-center justify-center text-[#7B2FBE] mb-6 bg-white/60 backdrop-blur-sm"
                style={{ borderRadius: "9999px" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              {/* Eyebrow */}
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#7B2FBE] mb-2.5 block">
                — ISBN BOOK PUBLICATION
              </span>

              {/* Title */}
              <h3 className="font-heading text-3xl sm:text-[32px] text-brand-dark leading-tight mb-4">
                ISBN Book<br />Publication
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] font-body text-brand-muted leading-relaxed mb-6">
                Support for publishing academic books and monographs with an ISBN, from manuscript
                preparation to final publication.
              </p>

              {/* Feature List */}
              <ul className="space-y-0" role="list">
                <li className="border-b border-[#EBE3D6] py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M4 6v12m4-12v12m3-12v12m4-12v12m3-12v12m2-12v12"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-brand-dark font-medium">
                    ISBN application assistance
                  </span>
                </li>

                <li className="border-b border-[#EBE3D6] py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-brand-dark font-medium">
                    Book formatting &amp; layout design
                  </span>
                </li>

                <li className="border-b border-[#EBE3D6] py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-brand-dark font-medium">
                    Cover design support
                  </span>
                </li>

                <li className="border-b border-[#EBE3D6] py-3 flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "9999px" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-[13px] font-body text-brand-dark font-medium">
                    Publication and distribution support
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Link */}
            <div className="pt-8 mt-auto relative z-10">
              <Link
                href="/services/isbn-book-publication"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7B2FBE] hover:text-[#6620A0] transition-colors group"
              >
                <span>DISCOVER THIS SERVICE</span>
                <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
              </Link>
            </div>
          </article>

        </div>
      </div>
    </section>
    /* END: ServicesSection */
  );
}
