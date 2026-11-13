import AboutCollage from "@/components/sections/AboutCollage";

export default function About() {
  return (
    /* BEGIN: AboutSection */
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Information */}
          <div id="about-text-col" className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-2.5 mb-3" data-reveal="up">
              <span className="w-5 h-[1.5px] bg-[#7B2FBE] inline-block"></span>
              <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-semibold">
                ABOUT EDUNAAZ
              </p>
            </div>
            {/* Headline with purple accent */}
            <h2 data-split="lines" className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-6">
              Your <span className="text-[#7B2FBE] font-normal">Trusted</span> Partner in Academic Publishing
            </h2>
            {/* Paragraph */}
            <p data-reveal="up" className="text-brand-muted font-body text-sm leading-relaxed mb-8">
              EDUNAAZ PUBLICATION (OPC) PRIVATE LIMITED is registered under the Ministry of Corporate
              Affairs, Government of India. We support scholars and professionals with publication-ready
              research articles, review papers and thesis, guiding authors through journal selection,
               Manuscript preperation, Formatting, Submission, upto final Publication.
            </p>
            <div data-line className="hairline-divider mb-8"></div>
            {/* CTA Button */}
            <div data-reveal="up">
              <a
                href="/about"
                className="inline-flex items-center gap-3 bg-[#7B2FBE] text-white font-body font-semibold text-sm tracking-widest uppercase px-7 py-4 rounded-md hover:bg-[#6A25A8] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                ABOUT US →
              </a>
            </div>
          </div>
          {/* Right Column: Three-Image Visual Composition with 15+ Badge */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <AboutCollage />
          </div>
        </div>
      </div>
    </section>
    /* END: AboutSection */
  );
}
