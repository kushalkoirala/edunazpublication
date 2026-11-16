import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InquiryButton from "@/components/ui/InquiryButton";
import { APEX_STAGES, getApexStageBySlug } from "@/lib/apex-stages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return APEX_STAGES.map((stage) => ({
    slug: stage.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stage = getApexStageBySlug(slug);

  if (!stage) {
    return {
      title: "Stage Not Found – APEX Program",
    };
  }

  return {
    title: `${stage.stageNumber}: ${stage.title} | APEX 12-Week Mentorship – EduNaaz Publication`,
    description: stage.shortDescription,
  };
}

export default async function ApexStageDetailPage({ params }: Props) {
  const { slug } = await params;
  const stage = getApexStageBySlug(slug);

  if (!stage) {
    notFound();
  }

  // Find previous and next stages for navigation
  const currentIndex = APEX_STAGES.findIndex((s) => s.id === stage.id);
  const prevStage = currentIndex > 0 ? APEX_STAGES[currentIndex - 1] : null;
  const nextStage = currentIndex < APEX_STAGES.length - 1 ? APEX_STAGES[currentIndex + 1] : null;

  return (
    <main className="bg-white min-h-screen">
      {/* ────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                           */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#180828] text-white pt-[140px] pb-16 sm:pb-24 overflow-hidden">
        {/* Atmospheric purple glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 85% 20%, rgba(168,85,247,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 15% 85%, rgba(123,47,190,0.35) 0%, transparent 65%)",
          }}
        />

        {/* Decorative corner waves */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[220px] opacity-[0.12]">
          <svg viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M420 220 C320 180, 240 100, 140 140 C40 180, 0 120, 0 220 Z" fill="#A855F7" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-body text-white/60">
              <li>
                <Link href="/" className="hover:text-[#C084FC] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="/apex" className="hover:text-[#C084FC] transition-colors">
                  APEX Program
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white/80">12-Week Mentorship</li>
              <li className="text-white/40">/</li>
              <li className="text-[#C084FC] font-medium">{stage.stageNumber}</li>
            </ol>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#7B2FBE] text-white rounded-full text-xs font-semibold tracking-wide shadow-[0_2px_10px_rgba(123,47,190,0.5)]">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {stage.month}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-[#E9D5FF] rounded-full text-xs font-semibold tracking-wide">
              {stage.stageNumber}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 rounded-full text-xs font-semibold tracking-wide">
              {stage.duration}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5 max-w-4xl">
            {stage.title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-body leading-relaxed max-w-3xl mb-8">
            {stage.shortDescription}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <InquiryButton
              category="APEX Program Mentorship"
              className="px-7 py-3.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-[12px] shadow-[0_4px_20px_rgba(123,47,190,0.4)] transition-all cursor-pointer"
            >
              Enquire About This Stage →
            </InquiryButton>
            <Link
              href="/apex#timeline"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/25 rounded-[12px] font-semibold text-xs uppercase tracking-wider transition-all"
            >
              ← Back to All Stages
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 2. OVERVIEW & HIGHLIGHT STATS                             */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-[#FAF9FC] border-b border-[#EBE7F2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#7B2FBE]" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#7B2FBE]">
                  STAGE OVERVIEW
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-brand-dark mb-4">
                What Happens in {stage.stageNumber}?
              </h2>
              <p className="text-brand-muted font-body text-base leading-relaxed mb-6">
                {stage.overview}
              </p>

              {/* Stats pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 bg-white border border-[#EBE7F2] rounded-[14px]">
                  <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider block mb-1">
                    Timeline
                  </span>
                  <span className="font-heading text-base font-semibold text-brand-dark">
                    {stage.duration}
                  </span>
                </div>
                <div className="p-4 bg-white border border-[#EBE7F2] rounded-[14px]">
                  <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider block mb-1">
                    Guidance Model
                  </span>
                  <span className="font-heading text-base font-semibold text-brand-dark">
                    {stage.typeBadge}
                  </span>
                </div>
                <div className="p-4 bg-white border border-[#EBE7F2] rounded-[14px]">
                  <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider block mb-1">
                    Target APC
                  </span>
                  <span className="font-heading text-base font-semibold text-[#7B2FBE]">
                    ₹0 / Zero APC
                  </span>
                </div>
                <div className="p-4 bg-white border border-[#EBE7F2] rounded-[14px]">
                  <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider block mb-1">
                    Mentorship
                  </span>
                  <span className="font-heading text-base font-semibold text-brand-dark">
                    1-on-1 Dedicated
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Key Focus Card */}
            <div className="lg:col-span-4">
              <div className="bg-white border border-[#EBE7F2] p-6 sm:p-7 rounded-[22px] shadow-[0_4px_24px_rgba(123,47,190,0.06)]">
                <div className="inline-block px-3 py-1 bg-[#F3EAFF] text-[#7B2FBE] text-xs font-bold uppercase tracking-wider rounded-[8px] mb-4">
                  Key Focus Areas
                </div>
                <ul className="space-y-3.5">
                  {stage.focusAreas.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-[#7B2FBE] text-[#7B2FBE] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-sm font-body text-brand-dark leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 3. DETAILED WEEK-BY-WEEK BREAKDOWN                        */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EBE7F2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#7B2FBE]" />
              <p className="text-xs uppercase tracking-[0.16em] text-[#7B2FBE] font-semibold">
                BI-WEEKLY ROADMAP
              </p>
              <span className="h-px w-8 bg-[#7B2FBE]" />
            </div>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-3">
              Detailed Week-by-Week Execution
            </h2>
            <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed">
              Every two weeks deliver tangible, verifiable progress. Here is the exact curriculum and activity scope for {stage.stageNumber}.
            </p>
          </div>

          {/* Week Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {stage.weeks.map((week, wIdx) => (
              <div
                key={wIdx}
                className="bg-white border border-[#EBE7F2] rounded-[24px] p-7 sm:p-9 shadow-[0_4px_24px_rgba(123,47,190,0.06)] hover:border-[#C084FC] hover:shadow-[0_8px_32px_rgba(123,47,190,0.12)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1.5 bg-[#7B2FBE] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {week.badge}
                    </span>
                    <span className="text-xs font-mono text-brand-muted">
                      Part 0{wIdx + 1} of 02
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl text-brand-dark font-semibold leading-snug mb-3">
                    {week.title}
                  </h3>

                  <p className="text-sm text-brand-muted font-body leading-relaxed mb-6">
                    {week.description}
                  </p>

                  {/* Core Activities */}
                  <div className="mb-6">
                    <h4 className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#7B2FBE] mb-3">
                      Core Activities &amp; Mentorship Scope:
                    </h4>
                    <ul className="space-y-2.5">
                      {week.activities.map((act, actIdx) => (
                        <li key={actIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-brand-dark">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE] flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tangible Deliverables Box */}
                <div className="mt-4 pt-5 border-t border-[#EBE7F2] bg-[#FAF9FC] -mx-7 -mb-7 sm:-mx-9 sm:-mb-9 p-6 rounded-b-[24px]">
                  <h4 className="text-[10px] uppercase tracking-[0.14em] font-bold text-brand-dark mb-2.5 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tangible Deliverables You Receive:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-brand-muted font-body">
                    {week.deliverables.map((del, delIdx) => (
                      <li key={delIdx} className="flex items-center gap-2">
                        <span className="text-[#7B2FBE] font-bold">•</span>
                        <span className="text-brand-dark font-medium">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 4. EXPECTED OUTCOMES & TOOLS                              */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FC] border-b border-[#EBE7F2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Outcomes */}
            <div className="bg-white border border-[#EBE7F2] rounded-[22px] p-7 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl text-brand-dark mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-[10px] bg-[#EDE0FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Expected Outcomes of {stage.stageNumber}
              </h3>
              <ul className="space-y-3 font-body text-xs sm:text-sm text-brand-dark">
                {stage.outcomes.map((out, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDE0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Standards */}
            <div className="bg-white border border-[#EBE7F2] rounded-[22px] p-7 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl text-brand-dark mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-[10px] bg-[#EDE0FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Tools &amp; Methodologies Leveraged
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {stage.toolsUsed.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#FAF9FC] border border-[#EBE7F2] rounded-[12px] flex items-center gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#7B2FBE]" />
                    <span className="text-xs font-semibold text-brand-dark font-body">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand-muted leading-relaxed italic border-t border-[#EBE7F2] pt-4">
                All guidance conforms to Committee on Publication Ethics (COPE) guidelines and verified indexing standards for Scopus and Web of Science subscription journals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 5. STAGE-TO-STAGE NAVIGATION                              */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-[#EBE7F2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevStage ? (
              <Link
                href={`/apex/stage/${prevStage.slug}`}
                className="w-full sm:w-auto p-4 rounded-[16px] border border-[#EBE7F2] hover:border-[#7B2FBE] hover:shadow-md transition-all flex items-center gap-3 text-left group"
              >
                <span className="w-9 h-9 rounded-full bg-[#F3EAFF] group-hover:bg-[#7B2FBE] text-[#7B2FBE] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-muted block">
                    Previous Stage
                  </span>
                  <span className="text-sm font-semibold text-brand-dark font-heading">
                    {prevStage.stageNumber}: {prevStage.title}
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                href="/apex#timeline"
                className="text-xs font-semibold uppercase text-brand-muted hover:text-[#7B2FBE] transition-colors"
              >
                ← Back to APEX Overview
              </Link>
            )}

            <Link
              href="/apex#timeline"
              className="text-xs font-bold uppercase tracking-wider text-[#7B2FBE] hover:underline"
            >
              View Full 12-Week Roadmap
            </Link>

            {nextStage ? (
              <Link
                href={`/apex/stage/${nextStage.slug}`}
                className="w-full sm:w-auto p-4 rounded-[16px] border border-[#EBE7F2] hover:border-[#7B2FBE] hover:shadow-md transition-all flex items-center justify-end gap-3 text-right group"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-muted block">
                    Next Stage
                  </span>
                  <span className="text-sm font-semibold text-brand-dark font-heading">
                    {nextStage.stageNumber}: {nextStage.title}
                  </span>
                </div>
                <span className="w-9 h-9 rounded-full bg-[#F3EAFF] group-hover:bg-[#7B2FBE] text-[#7B2FBE] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ) : (
              <Link
                href="/apex"
                className="text-xs font-semibold uppercase text-brand-muted hover:text-[#7B2FBE] transition-colors"
              >
                Explore APEX Program →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 6. INQUIRY & CONTACT CALL TO ACTION                       */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#180828] via-[#2D0F4A] to-[#180828] text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <span className="px-3 py-1 bg-white/10 text-[#C084FC] border border-white/20 text-xs font-bold uppercase tracking-wider rounded-full mb-4 inline-block">
            READY TO PUBLISH?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Enroll in APEX &amp; Begin {stage.stageNumber}
          </h2>
          <p className="text-white/80 font-body text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Discuss your research with program mentor and receive immediate diagnostic guidance on manuscript readiness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <InquiryButton
              category="APEX Program Mentorship"
              className="px-8 py-4 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-[14px] shadow-[0_4px_25px_rgba(123,47,190,0.5)] transition-all cursor-pointer"
            >
              Inquire About APEX Now →
            </InquiryButton>
            <a
              href="https://wa.me/919395707581"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-[14px] font-semibold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.275-.102-.475-.15-.676.15-.2.301-.776.98-.95 1.18-.175.199-.35.224-.65.075-.3-.15-1.266-.467-2.411-1.488-.891-.796-1.492-1.78-1.667-2.08-.175-.3-.019-.463.13-.612.136-.134.301-.35.451-.525.15-.175.2-.299.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.925-2.23-.242-.585-.487-.506-.671-.515-.173-.008-.371-.01-.57-.01-.199 0-.523.075-.797.375-.274.3-1.047 1.026-1.047 2.501 0 1.476 1.072 2.9 1.222 3.1.15.199 2.11 3.22 5.111 4.516.714.309 1.272.493 1.706.63.717.227 1.37.195 1.886.118.576-.086 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.2-.576-.35z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.521 5.842L.053 23.513l5.836-1.53C7.545 23.18 9.697 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.84c-1.897 0-3.666-.546-5.166-1.488l-.37-.232-3.834 1.006 1.024-3.738-.255-.406A9.799 9.799 0 012.16 12c0-5.426 4.414-9.84 9.84-9.84s9.84 4.414 9.84 9.84c0 5.426-4.414 9.84-9.84 9.84z" />
              </svg>
              WhatsApp Mentor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

