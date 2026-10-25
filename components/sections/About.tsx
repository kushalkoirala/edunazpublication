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
              research articles, review papers and theses, guiding authors through journal selection,
              manuscript preparation, formatting and submission.
            </p>
            <div data-line className="hairline-divider mb-8"></div>
            {/* Founder Signature & Small Caps Subtitle */}
            <div className="flex flex-col items-start">
              <span
                id="about-signature"
                data-reveal="clip-left"
                className="font-signature text-3xl sm:text-4xl text-[#7B2FBE] tracking-wide leading-none pb-1"
              >
                Owners name
              </span>
              <span
                data-reveal="up"
                className="text-[11px] font-body tracking-[0.2em] uppercase text-brand-muted font-medium mt-1"
              >
                FOUNDER &amp; MANAGING DIRECTOR, EDUNAAZ
              </span>
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
