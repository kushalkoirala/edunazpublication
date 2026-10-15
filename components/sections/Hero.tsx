import Link from "next/link";

export default function Hero() {
  return (
    /* BEGIN: HeroSection */
    <section className="relative overflow-visible lg:mb-[140px]" id="hero">
      {/* Hero Outer Frame with desktop height ~720px */}
      <div className="relative bg-[#3F4056] min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden">
        {/* Background Photography with subject positioned at 70% center and moody filter */}
        <div id="hero-bg-wrapper" className="absolute inset-0 z-0 overflow-hidden">
          <div id="hero-image-wrapper" className="absolute inset-0 w-full h-full">
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
        </div>

        {/* Main Hero Content Column */}
        <div
          className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-[130px] lg:pt-[150px] pb-32 lg:pb-36"
        >
          <div id="hero-text-col" className="max-w-full lg:max-w-[760px] text-left">
            {/* Eyebrow with gold dash prefix */}
            <div className="flex items-center space-x-2.5 mb-5">
              <span id="hero-eyebrow-dash" className="w-6 h-[1.5px] bg-[#D9A93F] inline-block origin-left"></span>
              <p id="hero-eyebrow-text" className="text-[12px] uppercase tracking-[0.2em] text-[#D9A93F] font-body font-medium">
                RESEARCH MADE EASIER
              </p>
            </div>

            {/* Marcellus Two-Line Headline (~68px on desktop) */}
            <h1
              id="hero-title"
              aria-label="Research That Reaches The World"
              className="text-4xl sm:text-5xl lg:text-[68px] lg:whitespace-nowrap text-white font-heading font-normal tracking-tight leading-[1.12] mb-6"
            >
              <span className="block overflow-hidden">
                <span className="hero-title-line block">Research That</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-title-line block">
                  <span className="text-[#D9A93F] font-normal">Reaches</span> The World
                </span>
              </span>
            </h1>

            {/* Body Description Paragraph */}
            <p id="hero-paragraph" className="text-white/90 font-body text-[15px] leading-relaxed mb-8 max-w-[440px] font-light">
              Expert writing, editing and publication support for scholars, researchers and professionals.
            </p>

            {/* Primary Button with attached white square icon box */}
            <div id="hero-button" className="inline-flex">
              <Link
                data-magnetic
                className="inline-flex items-stretch bg-[#D9A93F] hover:bg-[#C4942B] transition-colors duration-150 text-brand-dark group shadow-none"
                href="/#contact"
              >
                <span
                  className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center"
                >
                  SUBMIT MANUSCRIPT
                </span>
                <span
                  className="w-11 bg-white flex items-center justify-center text-brand-dark transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter"
                      strokeWidth="2"></path>
                  </svg>
                </span>
              </Link>
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
              className="bg-[#F3F3F3] p-8 border border-[#E5E5E5] flex flex-col justify-between rounded-none shadow-none h-auto lg:h-full"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-10 h-10 border border-brand-dark/20 flex items-center justify-center text-brand-dark flex-shrink-0"
                  >
                    <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor"
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
                  Guidance on journal selection, manuscript preparation and submission.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-gold flex items-center group transition-colors"
                  href="/services/research-publication"
                >
                  GET STARTED <span
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Writing & Editorial Support (Solid Gold #D9A93F) */}
            <div
              id="hero-card-2"
              className="bg-[#D9A93F] p-8 border border-[#D9A93F] flex flex-col justify-between rounded-none shadow-none h-auto lg:h-full"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-10 h-10 border border-brand-dark/40 flex items-center justify-center text-brand-dark flex-shrink-0"
                  >
                    <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading text-[20px] text-brand-dark leading-snug">
                    Writing &amp;<br />Editing
                  </h3>
                </div>
                <div className="hairline-divider bg-black/20 my-3.5"></div>
                <p className="text-[12px] text-brand-dark/90 leading-relaxed font-normal">
                  Writing and editing support for research articles, review papers and theses.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  className="text-[11px] font-semibold uppercase tracking-wider text-brand-dark hover:text-white flex items-center group transition-colors"
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
              className="bg-[#F3F3F3] p-8 border border-[#E5E5E5] flex flex-col justify-between rounded-none shadow-none h-auto lg:h-full"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-10 h-10 border border-brand-dark/20 flex items-center justify-center text-brand-dark flex-shrink-0"
                  >
                    <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor"
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
                  className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-gold flex items-center group transition-colors"
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
    </section>
    /* END: HeroSection */
  );
}
