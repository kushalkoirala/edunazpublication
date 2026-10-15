export default function About() {
  return (
    /* BEGIN: AboutSection */
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Information */}
          <div id="about-text-col" className="lg:col-span-7">
            {/* Eyebrow */}
            <p data-reveal="up" className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
              ABOUT EDUNAAZ
            </p>
            {/* Headline with gold accent */}
            <h2 data-split="lines" className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-6">
              Your <span className="text-brand-gold font-normal">Trusted</span> Partner in Academic Publishing
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
                className="font-signature text-3xl sm:text-4xl text-brand-gold tracking-wide leading-none pb-1"
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
          {/* Right Column: Scholar Portrait with 15+ Badge Overlay */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div
                id="about-portrait-wrap"
                data-reveal="clip-up"
                className="w-full h-[460px] overflow-hidden"
              >
                <img
                  id="about-portrait-img"
                  data-parallax="0.08"
                  alt="Academic Scholar and Researcher"
                  className="w-full h-full object-cover object-top border border-brand-borderHairline"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkYUdG8bQEbSQimBDMA6FJKmqiIbqH8IZEe2CILqUScj_UAIvx7peT3HlqEM6oUBzmbctMldrQPPXXEIx6MAP49-tB-wkSaWir9y5h8mjfiXPpi1Ubjtw2aOfgQpKDsIl33mDHpZAO3KFE9OUzBy2L4K9TPSfl1lfERu6qEKATcKvTQ4zyxVWSttTWGxrOdSpRkfP4c4MhiIZeWiwtQW8lcjXfl_o4g1BeoqNLS8VO3yj00XwUrk0"
                />
              </div>
              {/* Exact replica of "20+ YEARS EXPERIENCE" square badge */}
              <div
                id="about-badge"
                data-reveal="scale"
                className="absolute bottom-6 -left-4 sm:-left-8 bg-brand-bgGray border border-brand-borderHairline px-6 py-4 flex items-center space-x-3 shadow-none z-10"
              >
                <span
                  className="font-heading text-3xl sm:text-4xl text-brand-gold leading-none font-normal"
                >
                  15+
                </span>
                <span
                  className="text-[10px] tracking-widest font-body uppercase text-brand-dark font-semibold leading-tight"
                >
                  SKILLED<br />PROFESSIONALS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    /* END: AboutSection */
  );
}
