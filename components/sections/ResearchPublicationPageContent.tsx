"use client";

import React from "react";
import Link from "next/link";
import { useInquiryModal } from "@/components/ui/InquiryModal";

export default function ResearchPublicationPageContent() {
  const { openModal } = useInquiryModal();

  return (
    <div className="bg-white overflow-x-hidden font-body text-brand-dark w-full">
      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 1: HERO SECTION                                     */}
      {/* ─────────────────────────────────────────────────────────── */}
      {/* pt-[104px] on mobile accounts for the 72px fixed navbar + 32px breathing room */}
      <section className="relative pt-[104px] sm:pt-[124px] lg:pt-[140px] pb-14 sm:pb-20 lg:pb-24 bg-gradient-to-b from-[#FAF7FE] via-white to-white overflow-hidden">
        {/* Subtle Background Ambience (confined to prevent horizontal overflow) */}
        <div
          className="absolute top-0 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-bl from-[#7B2FBE]/10 via-[#C084FC]/5 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 sm:-mr-28 sm:-mt-28"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-0 w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] bg-[#7B2FBE]/5 rounded-full blur-3xl pointer-events-none -ml-20 sm:-ml-28"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-brand-muted">
              <li>
                <Link href="/" className="hover:text-[#7B2FBE] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-[#DDD6F3] font-normal">/</span>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7B2FBE] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <span className="text-[#DDD6F3] font-normal">/</span>
              </li>
              <li className="text-[#7B2FBE] font-medium" aria-current="page">
                Research Publication
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#7B2FBE] font-bold">
                  RESEARCH PUBLICATION
                </span>
                <span className="h-0.5 w-8 sm:w-12 bg-[#7B2FBE] rounded-full" />
              </div>

              {/* Main Heading - Fully Responsive & Non-overflowing */}
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-brand-dark leading-[1.2] sm:leading-[1.18] tracking-tight mb-5 sm:mb-6 break-words">
                Your Research. Our Expertise. <br className="hidden sm:inline" />
                <span className="text-[#7B2FBE] block mt-1 sm:mt-1.5">
                  A Structured Pathway to Publication.
                </span>
              </h1>

              {/* Supporting Description */}
              <div className="space-y-3.5 sm:space-y-4 text-brand-muted font-body text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8">
                <p>
                  At <strong className="text-brand-dark font-medium">EDUNAAZ PUBLICATION OPC PRIVATE LIMITED</strong>,
                  we provide professional publication consultancy and editorial support to researchers,
                  academicians and scholars seeking to publish their research in reputed Scopus, SCIE,
                  SSCI and other indexed journals.
                </p>
                <p className="text-xs sm:text-sm lg:text-base">
                  Our structured, step-by-step approach is designed to simplify the publication journey,
                  improve manuscript quality and provide comprehensive assistance throughout the journal
                  submission and peer-review process.
                </p>
              </div>

              {/* Action Buttons - Stack on mobile, inline on desktop */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 max-w-md sm:max-w-none">
                <button
                  type="button"
                  onClick={() => openModal("Research Publication Manuscript Submission")}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-[12px] transition-all duration-200 group shadow-[0_6px_20px_rgba(123,47,190,0.3)] hover:shadow-[0_8px_25px_rgba(123,47,190,0.45)] cursor-pointer"
                >
                  <span>SUBMIT YOUR MANUSCRIPT</span>
                  <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <a
                  href="#process"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 bg-white border border-[#EBE7F2] hover:border-[#7B2FBE] text-brand-dark hover:text-[#7B2FBE] font-bold text-xs uppercase tracking-wider rounded-[12px] transition-all duration-200 shadow-sm text-center"
                >
                  <span>EXPLORE 6-STEP PROCESS</span>
                  <span className="ml-2">↓</span>
                </a>
              </div>
            </div>

            {/* Right Editorial Illustration Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 w-full">
              <div className="relative mx-auto max-w-[440px] lg:max-w-none w-full">
                {/* Decorative Halo (contained within layout) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F3EAFF] via-[#FAF5FF] to-white rounded-[24px] sm:rounded-[32px] shadow-[0_12px_40px_rgba(123,47,190,0.08)] -z-10" />

                {/* Main Card Graphic */}
                <div className="bg-white border border-[#EBE7F2] rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(123,47,190,0.06)] relative overflow-hidden">
                  {/* Subtle top banner accent */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#7B2FBE] via-[#9333EA] to-[#C084FC] absolute top-0 left-0" />

                  {/* Card Header: Editorial Badge */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-[#F0ECF8] mb-4 sm:mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[12px] bg-[#F5EDFD] flex items-center justify-center text-[#7B2FBE] flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE]">
                          CONSULTANCY FRAMEWORK
                        </p>
                        <h2 className="font-heading font-semibold text-brand-dark text-sm sm:text-base">
                          Indexed Journal Pathways
                        </h2>
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#F3EAFF] text-[#7B2FBE] rounded-full self-start sm:self-auto">
                      VERIFIED
                    </span>
                  </div>

                  {/* Document Preview Graphic */}
                  <div className="bg-[#FAF9FC] border border-[#F0ECF8] rounded-[16px] sm:rounded-[18px] p-4 sm:p-5 mb-4 sm:mb-5 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between text-xs text-brand-muted">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7B2FBE] font-bold truncate">
                        MS-REF: EDN-2026-PUB
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-right flex-shrink-0">
                        Peer-Reviewed
                      </span>
                    </div>

                    <div className="h-2.5 sm:h-3 w-4/5 bg-[#EAE4F5] rounded-full" />
                    <div className="h-2 sm:h-2.5 w-full bg-[#F0ECF8] rounded-full" />
                    <div className="h-2 sm:h-2.5 w-5/6 bg-[#F0ECF8] rounded-full" />
                    <div className="h-2 sm:h-2.5 w-3/4 bg-[#F0ECF8] rounded-full" />

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#EBE7F2] rounded-md text-[10px] font-bold text-[#7B2FBE]">
                        <svg className="w-3 h-3 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Scopus Indexed
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#EBE7F2] rounded-md text-[10px] font-bold text-[#7B2FBE]">
                        <svg className="w-3 h-3 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        SCIE / SSCI
                      </span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs font-body">
                    <div className="p-2.5 sm:p-3 bg-white border border-[#F0ECF8] rounded-[12px] sm:rounded-[14px]">
                      <p className="text-brand-muted text-[10px] sm:text-[11px] mb-0.5">Editorial Review</p>
                      <p className="font-heading font-bold text-brand-dark text-xs sm:text-sm">Rigorous Standards</p>
                    </div>
                    <div className="p-2.5 sm:p-3 bg-white border border-[#F0ECF8] rounded-[12px] sm:rounded-[14px]">
                      <p className="text-brand-muted text-[10px] sm:text-[11px] mb-0.5">Author Rights</p>
                      <p className="font-heading font-bold text-brand-dark text-xs sm:text-sm">100% In Control</p>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Indicator Pill (safe for mobile) */}
                <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:right-4 bg-white border border-[#EBE7F2] rounded-full py-2 px-4 shadow-[0_8px_20px_rgba(123,47,190,0.1)] flex items-center justify-center gap-2 text-xs font-semibold text-brand-dark">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Actively Accepting Manuscripts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Value Bar */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#F0ECF8] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-2 sm:p-3">
              <p className="font-heading text-lg sm:text-2xl font-bold text-[#7B2FBE] mb-1">Scopus &amp; SCIE</p>
              <p className="text-[11px] sm:text-xs text-brand-muted">Target Scope Alignment</p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="font-heading text-lg sm:text-2xl font-bold text-[#7B2FBE] mb-1">Step-by-Step</p>
              <p className="text-[11px] sm:text-xs text-brand-muted">Structured Publication Journey</p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="font-heading text-lg sm:text-2xl font-bold text-[#7B2FBE] mb-1">Formal Agreement</p>
              <p className="text-[11px] sm:text-xs text-brand-muted">Transparent Consultancy Terms</p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="font-heading text-lg sm:text-2xl font-bold text-[#7B2FBE] mb-1">Post-Submission</p>
              <p className="text-[11px] sm:text-xs text-brand-muted">Full Peer-Review Navigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 2: SIX-STEP PUBLICATION PROCESS                     */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section id="process" className="py-16 sm:py-20 lg:py-28 bg-[#FAF9FC] relative overflow-hidden">
        {/* Subtle background flourishes (clipped) */}
        <div
          className="absolute top-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#7B2FBE]/5 rounded-full blur-3xl pointer-events-none -ml-32 sm:-ml-40"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#9333EA]/5 rounded-full blur-3xl pointer-events-none -mr-32 sm:-mr-40"
          aria-hidden="true"
        />

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3">
              <span className="h-0.5 w-6 sm:w-8 bg-[#7B2FBE] rounded-full" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#7B2FBE] font-bold">
                STRUCTURED PUBLICATION METHODOLOGY
              </span>
              <span className="h-0.5 w-6 sm:w-8 bg-[#7B2FBE] rounded-full" />
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-brand-dark font-bold leading-tight mb-3 sm:mb-4 break-words">
              A Proven Six-Step Pathway to <span className="text-[#7B2FBE]">Publication</span>
            </h2>
            <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our structured, step-by-step approach simplifies the complex publishing journey,
              improving manuscript quality and guiding you through submission, peer review, and final release.
            </p>
          </div>

          {/* Connected Vertical Timeline */}
          <div className="relative">
            {/* Vertical timeline spine (hidden on mobile, visible on md+) */}
            <div
              className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#7B2FBE] via-[#A855F7] to-[#7B2FBE]"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-14">
              {/* ────────────────────────── STEP 1 ────────────────────────── */}
              <div className="relative md:pl-24">
                {/* Timeline Node Badge */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2FBE] to-[#9333EA] text-white items-center justify-center font-heading font-bold text-xl shadow-[0_6px_20px_rgba(123,47,190,0.3)] z-10">
                  01
                </div>

                <div className="bg-white border border-[#EBE7F2] rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(123,47,190,0.04)] hover:shadow-[0_8px_32px_rgba(123,47,190,0.08)] transition-all">
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#7B2FBE] text-white font-heading font-bold text-xs flex-shrink-0 mt-0.5 sm:mt-0">
                        01
                      </span>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE]">
                          STEP 1
                        </span>
                        <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-brand-dark leading-tight">
                          Initial Manuscript Evaluation
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs italic text-[#7B2FBE] font-medium bg-[#F3EAFF] px-3 py-1 rounded-[10px] sm:rounded-full self-start sm:self-auto">
                      Start Your Publication Journey with an Expert Assessment
                    </span>
                  </div>

                  <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed mb-6">
                    Submit your research manuscript along with your preferred target journal (if already selected)
                    for an initial evaluation by our subject experts.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
                    {/* Left: Criteria List */}
                    <div className="lg:col-span-7 bg-[#FAF9FC] border border-[#F0ECF8] rounded-[18px] sm:rounded-[20px] p-4 sm:p-6">
                      <h4 className="font-heading font-semibold text-xs sm:text-base text-brand-dark mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#7B2FBE] rounded-full" />
                        Our team will assess your manuscript based on:
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-brand-dark font-body">
                        {[
                          "Research quality and originality",
                          "Relevance to the target journal's scope",
                          "Academic structure and presentation",
                          "Journal-specific author guidelines",
                          "Potential areas requiring improvement",
                        ].map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: What We Provide Card */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-[#F5EDFD] to-[#FAF7FE] border border-[#E9DFF7] rounded-[18px] sm:rounded-[20px] p-4 sm:p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-semibold text-xs sm:text-base text-[#7B2FBE] mb-3">
                          Following Evaluation, if Suitable:
                        </h4>
                        <ol className="space-y-2.5 text-xs sm:text-sm text-brand-dark font-body">
                          <li className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#7B2FBE] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              1
                            </span>
                            <span>A detailed consultancy invoice.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#7B2FBE] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              2
                            </span>
                            <span>A formal service agreement signed by our organization.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#7B2FBE] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              3
                            </span>
                            <span>A clear outline of the proposed services.</span>
                          </li>
                        </ol>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E5DCF2] text-[11px] text-brand-muted leading-relaxed">
                        Upon confirmation and payment of the agreed consultancy fee, we will initiate the publication support process.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ────────────────────────── STEP 2 ────────────────────────── */}
              <div className="relative md:pl-24">
                {/* Timeline Node Badge */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2FBE] to-[#9333EA] text-white items-center justify-center font-heading font-bold text-xl shadow-[0_6px_20px_rgba(123,47,190,0.3)] z-10">
                  02
                </div>

                <div className="bg-white border border-[#EBE7F2] rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(123,47,190,0.04)] hover:shadow-[0_8px_32px_rgba(123,47,190,0.08)] transition-all">
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#7B2FBE] text-white font-heading font-bold text-xs flex-shrink-0 mt-0.5 sm:mt-0">
                        02
                      </span>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE]">
                          STEP 2
                        </span>
                        <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-brand-dark leading-tight">
                          Expert Manuscript Review &amp; Editorial Improvements
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs italic text-[#7B2FBE] font-medium bg-[#F3EAFF] px-3 py-1 rounded-[10px] sm:rounded-full self-start sm:self-auto">
                      Enhancing Your Manuscript to Meet Journal Standards
                    </span>
                  </div>

                  <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed mb-6">
                    Our editorial team will carefully review your manuscript and identify areas that may require improvement.
                  </p>

                  {/* 2-Column Editorial Services Grid */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-[#7B2FBE] font-bold mb-3">
                      Depending on your requirements, our services may include:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      {[
                        "Academic language and grammar refinement.",
                        "Improvement of manuscript structure and presentation.",
                        "Enhancement of clarity, coherence and readability.",
                        "Formatting according to journal-specific guidelines.",
                        "Professional proofreading and editorial corrections.",
                        "Assistance in addressing identified reviewer or editorial concerns.",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 bg-[#FAF9FC] border border-[#F0ECF8] rounded-[16px] text-xs sm:text-sm text-brand-dark font-body"
                        >
                          <div className="w-5 h-5 rounded-md bg-[#F3EAFF] flex items-center justify-center text-[#7B2FBE] flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Approval Guarantee Callout */}
                  <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#FAF7FE] to-white border-l-4 border-[#7B2FBE] rounded-r-[16px] text-xs sm:text-sm text-brand-dark font-body flex items-start sm:items-center gap-3">
                    <svg className="w-5 h-5 text-[#7B2FBE] flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>
                      <strong className="font-semibold text-[#7B2FBE]">Author Approval Guaranteed:</strong> All proposed revisions will be discussed with you, and editorial work will proceed with your approval.
                    </span>
                  </div>
                </div>
              </div>

              {/* ────────────────────────── STEP 3 ────────────────────────── */}
              <div className="relative md:pl-24">
                {/* Timeline Node Badge */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2FBE] to-[#9333EA] text-white items-center justify-center font-heading font-bold text-xl shadow-[0_6px_20px_rgba(123,47,190,0.3)] z-10">
                  03
                </div>

                <div className="bg-white border border-[#EBE7F2] rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(123,47,190,0.04)] hover:shadow-[0_8px_32px_rgba(123,47,190,0.08)] transition-all">
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#7B2FBE] text-white font-heading font-bold text-xs flex-shrink-0 mt-0.5 sm:mt-0">
                        03
                      </span>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE]">
                          STEP 3
                        </span>
                        <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-brand-dark leading-tight">
                          Preparation of Journal Submission Documents
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs italic text-[#7B2FBE] font-medium bg-[#F3EAFF] px-3 py-1 rounded-[10px] sm:rounded-full self-start sm:self-auto">
                      Everything You Need for a Professional Submission
                    </span>
                  </div>

                  <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed mb-6">
                    We prepare the essential supporting documents required by your selected target journal.
                  </p>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-[#7B2FBE] font-bold mb-3">
                      Depending on the journal&apos;s requirements, these may include:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                      {[
                        { title: "Professional Cover Letter", num: "1" },
                        { title: "Graphical Abstract", num: "2" },
                        { title: "Research Highlights", num: "3" },
                        { title: "Letter to the Editor", num: "4" },
                        { title: "Author Contribution Statement", num: "5" },
                        { title: "Conflict of Interest Declaration", num: "6" },
                        { title: "Funding & Acknowledgement Statements", num: "7" },
                        { title: "Other Journal-Specific Documents", num: "8" },
                      ].map((doc, idx) => (
                        <div
                          key={idx}
                          className="bg-[#FAF9FC] border border-[#F0ECF8] rounded-[14px] sm:rounded-[16px] p-3.5 sm:p-4 flex flex-col justify-between hover:border-[#7B2FBE]/40 transition-colors"
                        >
                          <span className="w-6 h-6 rounded-full bg-[#F3EAFF] text-[#7B2FBE] font-mono font-bold text-xs flex items-center justify-center mb-2">
                            {doc.num}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-brand-dark font-body leading-snug">
                            {doc.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#FAF7FE] border border-[#EBE7F2] rounded-[16px] p-3.5 sm:p-4 text-xs sm:text-sm text-brand-dark font-body flex items-start sm:items-center gap-3">
                    <svg className="w-5 h-5 text-[#7B2FBE] flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
                      Once finalized, the complete submission package will be shared with you for review and approval before submission.
                    </span>
                  </div>
                </div>
              </div>

              {/* ────────────────────────── STEP 4 ────────────────────────── */}
              <div className="relative md:pl-24">
                {/* Timeline Node Badge */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2FBE] to-[#9333EA] text-white items-center justify-center font-heading font-bold text-xl shadow-[0_6px_20px_rgba(123,47,190,0.3)] z-10">
                  04
                </div>

                <div className="bg-white border-2 border-[#7B2FBE]/30 rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 lg:p-9 shadow-[0_8px_30px_rgba(123,47,190,0.06)]">
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#7B2FBE] text-white font-heading font-bold text-xs flex-shrink-0 mt-0.5 sm:mt-0">
                        04
                      </span>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE]">
                          STEP 4
                        </span>
                        <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-brand-dark leading-tight">
                          Journal Submission Assistance
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs italic text-[#7B2FBE] font-medium bg-[#F3EAFF] px-3 py-1 rounded-[10px] sm:rounded-full self-start sm:self-auto">
                      A Smooth and Organized Submission Experience
                    </span>
                  </div>

                  <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed mb-6 sm:mb-8">
                    We offer two convenient submission options, allowing you to choose the approach that best suits your preference.
                  </p>

                  {/* SIDE-BY-SIDE DUAL PANELS FOR OPTION A & OPTION B */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {/* OPTION A: Author-Led Submission */}
                    <div className="bg-[#FAF9FC] border border-[#EBE7F2] rounded-[18px] sm:rounded-[22px] p-5 sm:p-7 flex flex-col justify-between hover:border-[#7B2FBE]/50 transition-all">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DEF8] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE] mb-3 sm:mb-4">
                          <span>OPTION A</span>
                        </div>
                        <h4 className="font-heading text-lg sm:text-xl font-bold text-brand-dark mb-1.5 sm:mb-2">
                          Author-Led Submission
                        </h4>
                        <p className="text-xs italic text-[#7B2FBE] font-medium mb-3 sm:mb-4">
                          Prefer to submit your manuscript independently?
                        </p>
                        <p className="text-xs sm:text-sm text-brand-muted font-body leading-relaxed mb-5 sm:mb-6">
                          We will provide you with the finalized manuscript and all necessary submission documents.
                          You can then complete the submission directly through the journal&apos;s official submission portal.
                        </p>
                      </div>

                      <div className="p-3.5 sm:p-4 bg-white border border-[#F0ECF8] rounded-[14px] text-xs text-brand-dark font-body leading-relaxed">
                        <strong className="text-[#7B2FBE] block font-semibold mb-1">
                          Next Step After Submission:
                        </strong>
                        Once submitted, please share the manuscript identification number (Manuscript ID) with our team
                        so that we can continue providing editorial and peer-review support.
                      </div>
                    </div>

                    {/* OPTION B: Submission Assistance by Our Team */}
                    <div className="bg-gradient-to-br from-[#FAF5FF] via-white to-[#F5EDFD] border-2 border-[#7B2FBE] rounded-[18px] sm:rounded-[22px] p-5 sm:p-7 flex flex-col justify-between shadow-[0_6px_24px_rgba(123,47,190,0.08)] relative">
                      <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#7B2FBE] text-white rounded-full">
                        RECOMMENDED
                      </div>

                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B2FBE] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3 sm:mb-4">
                          <span>OPTION B</span>
                        </div>
                        <h4 className="font-heading text-lg sm:text-xl font-bold text-brand-dark mb-1.5 sm:mb-2">
                          Submission Assistance by Our Team
                        </h4>
                        <p className="text-xs italic text-[#7B2FBE] font-medium mb-3 sm:mb-4">
                          Would you prefer professional assistance with the submission process?
                        </p>
                        <p className="text-xs sm:text-sm text-brand-dark font-body leading-relaxed mb-3 sm:mb-4">
                          With your authorization and subject to the journal&apos;s policies, our team can assist with the online submission process, including:
                        </p>

                        <ul className="space-y-2 text-xs sm:text-sm text-brand-dark font-body mb-5 sm:mb-6">
                          {[
                            "Entering manuscript details.",
                            "Uploading the manuscript and supporting documents.",
                            "Providing the required submission information.",
                            "Reviewing submission details before final confirmation.",
                          ].map((subItem, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3.5 sm:p-4 bg-white/90 border border-[#E9DFF7] rounded-[14px] text-xs text-brand-dark font-body leading-relaxed">
                        <strong className="text-[#7B2FBE] block font-semibold mb-1">
                          Full Author Visibility:
                        </strong>
                        You will remain informed and involved throughout the process. All relevant submission
                        confirmations and manuscript tracking details will be shared with you.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ────────────────────────── STEP 5 ────────────────────────── */}
              <div className="relative md:pl-24">
                {/* Timeline Node Badge */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2FBE] to-[#9333EA] text-white items-center justify-center font-heading font-bold text-xl shadow-[0_6px_20px_rgba(123,47,190,0.3)] z-10">
                  05
                </div>

                <div className="bg-white border border-[#EBE7F2] rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(123,47,190,0.04)] hover:shadow-[0_8px_32px_rgba(123,47,190,0.08)] transition-all">
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#7B2FBE] text-white font-heading font-bold text-xs flex-shrink-0 mt-0.5 sm:mt-0">
                        05
                      </span>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE]">
                          STEP 5
                        </span>
                        <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-brand-dark leading-tight">
                          Peer-Review &amp; Editorial Support
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs italic text-[#7B2FBE] font-medium bg-[#F3EAFF] px-3 py-1 rounded-[10px] sm:rounded-full self-start sm:self-auto">
                      Professional Assistance Throughout the Review Process
                    </span>
                  </div>

                  <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed mb-6">
                    Our support does not end with manuscript submission. We remain available to assist you during
                    the journal&apos;s editorial and peer-review process.
                  </p>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-[#7B2FBE] font-bold mb-3">
                      Our services may include:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
                      {[
                        "Assistance with journal correspondence.",
                        "Guidance in understanding editorial decisions.",
                        "Preparation of responses to reviewers' comments.",
                        "Assistance with revised manuscript preparation.",
                        "Language editing and proofreading of revised manuscripts.",
                        "Formatting and resubmission assistance.",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 sm:p-4 bg-[#FAF9FC] border border-[#F0ECF8] rounded-[16px] text-xs sm:text-sm text-brand-dark font-body flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE] flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-5 bg-[#FAF7FE] border border-[#E9DFF7] rounded-[16px] sm:rounded-[18px] text-xs sm:text-sm text-brand-dark font-body flex items-start sm:items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F3EAFF] text-[#7B2FBE] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>
                      <strong className="text-[#7B2FBE] font-semibold">Our Objective:</strong> To help you address editorial and reviewer feedback professionally while maintaining the academic integrity of your research.
                    </span>
                  </div>
                </div>
              </div>

              {/* ────────────────────────── STEP 6 ────────────────────────── */}
              <div className="relative md:pl-24">
                {/* Timeline Node Badge */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2FBE] to-[#9333EA] text-white items-center justify-center font-heading font-bold text-xl shadow-[0_6px_20px_rgba(123,47,190,0.3)] z-10">
                  06
                </div>

                <div className="bg-white border border-[#EBE7F2] rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(123,47,190,0.04)] hover:shadow-[0_8px_32px_rgba(123,47,190,0.08)] transition-all">
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#7B2FBE] text-white font-heading font-bold text-xs flex-shrink-0 mt-0.5 sm:mt-0">
                        06
                      </span>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE]">
                          STEP 6
                        </span>
                        <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-brand-dark leading-tight">
                          Final Publication Assistance
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs italic text-[#7B2FBE] font-medium bg-[#F3EAFF] px-3 py-1 rounded-[10px] sm:rounded-full self-start sm:self-auto">
                      Supporting You Through the Final Stages
                    </span>
                  </div>

                  <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed mb-6">
                    Once your manuscript progresses through the journal&apos;s review process, we can provide further assistance with:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 mb-6">
                    {[
                      "Final manuscript proofreading.",
                      "Production-stage formatting support.",
                      "Assistance with publication-related queries.",
                      "Guidance regarding copyright and publication documentation.",
                      "Understanding proofs and final editorial communications.",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-4 bg-[#FAF9FC] border border-[#F0ECF8] rounded-[16px] text-xs sm:text-sm text-brand-dark font-body flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-md bg-[#F3EAFF] flex items-center justify-center text-[#7B2FBE] flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white border border-[#EBE7F2] rounded-[16px] text-xs sm:text-sm text-brand-muted font-body flex items-start sm:items-center gap-3">
                    <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
                      We remain available to guide you through the final stages of the publication process, subject to the journal&apos;s decisions and requirements.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 3: WHY CHOOSE EDUNAAZ PUBLICATION?                  */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#7B2FBE] font-bold">
                ACADEMIC EXCELLENCE &amp; TRUST
              </span>
              <span className="h-0.5 w-8 sm:w-12 bg-[#7B2FBE] rounded-full" />
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-brand-dark font-bold leading-tight mb-3 sm:mb-4 break-words">
              Why Choose <span className="text-[#7B2FBE]">EDUNAAZ PUBLICATION?</span>
            </h2>
            <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed">
              We combine editorial precision, scholar-centered mentorship, and transparent consultancy to deliver
              an ethical pathway to prestigious academic publication.
            </p>
          </div>

          {/* Clean Two-Column Editorial Layout with Large Subtle Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 sm:gap-y-12">
            {[
              {
                num: "01",
                title: "Expert Guidance",
                desc: "Subject-oriented manuscript evaluation and editorial assistance.",
              },
              {
                num: "02",
                title: "Personalized Support",
                desc: "Services tailored to your manuscript and target journal.",
              },
              {
                num: "03",
                title: "Transparent Process",
                desc: "Clear consultancy charges and formal service agreements.",
              },
              {
                num: "04",
                title: "Comprehensive Assistance",
                desc: "Support from initial evaluation to the final publication stages.",
              },
              {
                num: "05",
                title: "Author Involvement",
                desc: "You remain informed and retain control over your research and submission decisions.",
              },
              {
                num: "06",
                title: "Professional Communication",
                desc: "Dedicated assistance throughout the editorial journey.",
              },
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-4 sm:gap-6 group">
                {/* Large subtle number */}
                <span className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#DDD6F3] group-hover:text-[#7B2FBE] transition-colors duration-300 leading-none select-none flex-shrink-0 w-11 sm:w-14">
                  {reason.num}
                </span>

                <div className="flex-1 pb-4 sm:pb-6 border-b border-[#F0ECF8] group-hover:border-[#7B2FBE]/30 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span className="h-[2px] w-3.5 sm:w-4 bg-[#7B2FBE] rounded-full group-hover:w-6 transition-all duration-300" />
                    <h3 className="font-heading text-base sm:text-xl font-bold text-brand-dark">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-brand-muted font-body text-xs sm:text-base leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 4: FINAL CALL-TO-ACTION SECTION                     */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#2D114D] via-[#3B1566] to-[#1F0B36] text-white relative overflow-hidden">
        {/* Ambient background orbs (contained) */}
        <div
          className="absolute top-0 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#9333EA]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-[#7B2FBE]/25 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#E9DFF7] font-semibold mb-5 sm:mb-6">
            <span>LET&apos;S TAKE YOUR RESEARCH FORWARD!</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4 sm:mb-6 max-w-3xl mx-auto break-words">
            Your research deserves professional attention and the right editorial guidance.
          </h2>

          {/* Description */}
          <p className="text-white/80 font-body text-xs sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Submit your manuscript to <strong className="text-white font-semibold">EDUNAAZ PUBLICATION OPC PRIVATE LIMITED</strong> and take the next step towards your academic publishing goals.
          </p>

          {/* Prominent CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-md sm:max-w-none mx-auto">
            <button
              type="button"
              onClick={() => openModal("Research Publication Manuscript Submission")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-[#FAF7FE] text-[#7B2FBE] font-bold text-xs uppercase tracking-wider rounded-[14px] transition-all duration-200 group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_36px_rgba(255,255,255,0.25)] hover:scale-[1.02] cursor-pointer"
            >
              <span>SUBMIT YOUR MANUSCRIPT</span>
              <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>

            <Link
              href="/contact?type=consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white font-bold text-xs uppercase tracking-wider rounded-[14px] backdrop-blur-sm transition-all duration-200 text-center"
            >
              <span>SCHEDULE A CONSULTATION</span>
            </Link>
          </div>

          {/* Organization Verification & Link */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-white/60 gap-2 sm:gap-3">
            <span>EDUNAAZ PUBLICATION OPC PRIVATE LIMITED</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://edunaazpublication.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              https://edunaazpublication.com/
            </a>
            <span className="hidden sm:inline">•</span>
            <span>Registered Under MCA, Government of India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
