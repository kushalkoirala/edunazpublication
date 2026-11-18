import Link from "next/link";
import InquiryButton from "@/components/ui/InquiryButton";

export default function Hero() {
  return (
    /* BEGIN: HeroSection */
    <section className="relative overflow-x-clip lg:overflow-visible lg:mb-[140px]" id="hero">
      {/* Hero Outer Frame with desktop height ~720px */}
      <div className="relative bg-[#3F4056] min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden">
        {/* Background Photography with subject positioned at 70% center and moody filter */}
        <div id="hero-bg-wrapper" className="absolute inset-0 z-0 overflow-hidden">
          <div id="hero-image-wrapper" className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="hero-image"
              alt="Scholarly Classical Library Architecture"
              className="w-full h-full object-cover"
              style={{ objectPosition: "70% center", filter: "grayscale(1) contrast(1.1)" }}
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2400&q=80"
            />
          </div>
          {/* Precise Linear Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(15,15,25,.85) 0%, rgba(15,15,25,.72) 50%, rgba(15,15,25,.60) 100%)" }}
          ></div>
          {/* Purple logo glow accent bottom-right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 80% 100%, rgba(123,47,190,0.18) 0%, transparent 70%)" }}
          ></div>
        </div>

        {/* Main Hero Content Column */}
        <div
          className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-[130px] lg:pt-[150px] pb-32 lg:pb-36"
        >
          <div id="hero-text-col" className="max-w-full lg:max-w-[760px] text-left">
            {/* Eyebrow with purple gradient dash prefix */}
            <div className="flex items-center space-x-2.5 mb-5">
              <span id="hero-eyebrow-dash" className="w-6 h-[2px] bg-gradient-to-r from-[#7B2FBE] to-[#C084FC] inline-block origin-left shadow-[0_0_8px_rgba(123,47,190,0.5)]"></span>
              <p id="hero-eyebrow-text" className="text-[12px] uppercase tracking-[0.2em] text-[#C084FC] font-body font-medium">
                RESEARCH MADE EASIER
              </p>
            </div>

            {/* Marcellus Two-Line Headline (~68px on desktop) */}
            <h1
              id="hero-title"
              aria-label="Research That Reaches The World"
              className="text-[32px] sm:text-5xl lg:text-[68px] lg:whitespace-nowrap text-white font-heading font-normal tracking-tight leading-[1.12] mb-6 break-words"
            >
              <span className="block overflow-hidden">
                <span className="hero-title-line block">Research That</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-title-line block">
                  <span className="text-[#C084FC] font-normal">Reaches</span> The World
                </span>
              </span>
            </h1>

            {/* Body Description Paragraph */}
            <p id="hero-paragraph" className="text-white/90 font-body text-[15px] leading-relaxed mb-8 max-w-[440px] font-light">
              Expert writing, editing and publication support for scholars, researchers and professionals.
            </p>

            {/* Dual Action Buttons: Book a Consultant & Inquire Now */}
            <div id="hero-button" className="flex flex-wrap items-center gap-4">
              <Link
                data-magnetic
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-[0.16em] transition-all duration-200 rounded-lg shadow-[0_0_20px_rgba(123,47,190,0.4)] group"
                style={{ borderRadius: "8px" }}
                href="/contact?type=consultation"
              >
                <span>BOOK A CONSULTANT</span>
                <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <InquiryButton
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-[#7B2FBE]/25 text-white border border-[#7B2FBE]/50 hover:border-[#C084FC] font-bold text-xs uppercase tracking-[0.16em] backdrop-blur-sm transition-all duration-200 rounded-lg group cursor-pointer shadow-[0_0_12px_rgba(123,47,190,0.2)] hover:shadow-[0_0_20px_rgba(123,47,190,0.4)]"
                style={{ borderRadius: "8px" }}
              >
                <span>INQUIRE NOW</span>
                <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </InquiryButton>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Overlapping Bridging Cards Straddling the Bottom Edge of Hero */}
      <div className="relative z-20 -mt-16 lg:mt-0 lg:absolute lg:left-0 lg:right-0 lg:bottom-0 lg:translate-y-1/2">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div id="hero-cards-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:h-[280px] shadow-none">
            {/* Card 1: Research Publication (#F3F3F3 background) */}
            <div
              id="hero-card-1"
              className="bg-[#F3F3F3] p-8 border border-[#E5E5E5] flex flex-col justify-between rounded-none shadow-none h-auto lg:h-full group hover:border-[#7B2FBE]/40 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-10 h-10 border border-[#7B2FBE]/50 bg-[#7B2FBE]/5 flex items-center justify-center text-[#7B2FBE] flex-shrink-0 transition-colors group-hover:border-[#7B2FBE] group-hover:bg-[#7B2FBE]/10"
                  >
                    <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading text-[20px] text-brand-dark leading-snug">
                    Research<br />Publication
                  </h3>
                </div>
                <div className="hairline-divider my-3.5"></div>
                <p className="text-[12px] text-brand-muted leading-relaxed font-normal">
                  Guidance on journal selection, manuscript preparation, submission & publication.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted hover:text-[#7B2FBE] flex items-center group transition-colors"
                  href="/services/research-publication"
                >
                  GET STARTED <span
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Writing & Editorial Support (Solid Purple #7B2FBE) */}
            <div
              id="hero-card-2"
              className="bg-gradient-to-b from-[#7B2FBE] to-[#5D1B9C] p-8 border border-[#7B2FBE] flex flex-col justify-between rounded-none shadow-[0_12px_32px_rgba(123,47,190,0.35)] h-auto lg:h-full group"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-10 h-10 border border-white/40 bg-white/10 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading text-[20px] text-white leading-snug">
                    Writing &amp;<br />Editing
                  </h3>
                </div>
                <div className="hairline-divider bg-white/20 my-3.5"></div>
                <p className="text-[12px] text-white/90 leading-relaxed font-normal">
                  Writing and editing support for research articles, review papers and thesis.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  className="text-[11px] font-semibold uppercase tracking-wider text-white hover:text-[#C084FC] flex items-center group transition-colors"
                  href="/services/writing-and-editing"
                >
                  GET STARTED <span
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: ISBN Book & Monograph Publication (#F3F3F3 background) */}
            <div
              id="hero-card-3"
              className="bg-[#F3F3F3] p-8 border border-[#E5E5E5] flex flex-col justify-between rounded-none shadow-none h-auto lg:h-full group hover:border-[#7B2FBE]/40 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-10 h-10 border border-[#7B2FBE]/50 bg-[#7B2FBE]/5 flex items-center justify-center text-[#7B2FBE] flex-shrink-0 transition-colors group-hover:border-[#7B2FBE] group-hover:bg-[#7B2FBE]/10"
                  >
                    <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading text-[20px] text-brand-dark leading-snug">
                    ISBN Book<br />Publication
                  </h3>
                </div>
                <div className="hairline-divider my-3.5"></div>
                <p className="text-[12px] text-brand-muted leading-relaxed font-normal">
                  Support for publishing academic books and monographs with an ISBN.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted hover:text-[#7B2FBE] flex items-center group transition-colors"
                  href="/services/isbn-book-publication"
                >
                  GET STARTED <span
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purple shimmer hairline: visual connection between hero and body */}
      <div className="purple-hairline mt-0" aria-hidden="true" />
    </section>
    /* END: HeroSection */
  );
}
