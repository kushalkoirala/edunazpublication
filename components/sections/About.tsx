export default function About() {
  return (
    /* BEGIN: AboutSection */
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
              ABOUT EDUNAAZ
            </p>
            {/* Headline with gold accent */}
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-6">
              Your <span className="text-brand-gold font-normal">Trusted</span> Partner in Academic Publishing
            </h2>
            {/* Paragraph */}
            <p className="text-brand-muted font-body text-sm leading-relaxed mb-8">
              EDUNAAZ PUBLICATION (OPC) PRIVATE LIMITED is registered under the Ministry of Corporate
              Affairs, Government of India. We support scholars and professionals with publication-ready
              research articles, review papers and theses, guiding authors through journal selection,
              manuscript preparation, formatting and submission.
            </p>
            <div className="hairline-divider mb-8"></div>
            {/* Founder Signature & Small Caps Subtitle */}
            <div className="flex flex-col items-start">
              <span
                className="font-signature text-3xl sm:text-4xl text-brand-gold tracking-wide leading-none pb-1"
              >
                Owners name
              </span>
              <span
                className="text-[11px] font-body tracking-[0.2em] uppercase text-brand-muted font-medium mt-1"
              >
                FOUNDER &amp; MANAGING DIRECTOR, EDUNAAZ
              </span>
            </div>
          </div>
          {/* Right Column: Scholar Portrait with 15+ Badge Overlay */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                alt="Academic Scholar and Researcher"
                className="w-full h-[460px] object-cover object-top border border-brand-borderHairline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkYUdG8bQEbSQimBDMA6FJKmqiIbqH8IZEe2CILqUScj_UAIvx7peT3HlqEM6oUBzmbctMldrQPPXXEIx6MAP49-tB-wkSaWir9y5h8mjfiXPpi1Ubjtw2aOfgQpKDsIl33mDHpZAO3KFE9OUzBy2L4K9TPSfl1lfERu6qEKATcKvTQ4zyxVWSttTWGxrOdSpRkfP4c4MhiIZeWiwtQW8lcjXfl_o4g1BeoqNLS8VO3yj00XwUrk0"
              />
              {/* Exact replica of "20+ YEARS EXPERIENCE" square badge */}
              <div
                className="absolute bottom-6 -left-4 sm:-left-8 bg-brand-bgGray border border-brand-borderHairline px-6 py-4 flex items-center space-x-3 shadow-none"
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
