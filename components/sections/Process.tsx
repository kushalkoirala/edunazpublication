export default function Process() {
  return (
    /* BEGIN: PublicationProcessSection */
    <section className="py-24 bg-white border-b border-brand-borderHairline" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3" data-reveal="up">
            <span className="w-5 h-[1.5px] bg-[#7B2FBE]"></span>
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-semibold">
              HOW IT WORKS
            </p>
            <span className="w-5 h-[1.5px] bg-[#7B2FBE]"></span>
          </div>
          <h2 data-split="lines" className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight">
            Our <span className="text-[#7B2FBE] font-normal">Publication</span> Process
          </h2>
        </div>
        {/* 5 Steps In Horizontal Row Separated by Thin Vertical Hairlines */}
        <div
          data-stagger
          className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-brand-borderHairline border-t border-b border-brand-borderHairline"
        >
          {/* Step 1 */}
          <div className="py-10 px-6 text-left flex flex-col justify-between">
            <div>
              <span className="block overflow-hidden mb-4">
                <span data-roll className="font-heading text-4xl text-[#7B2FBE] block">01</span>
              </span>
              <h4 className="font-heading text-lg text-brand-dark mb-2">Submit</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-normal">
                Authors transmit initial draft, data tables, and specific scope requirements.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="py-10 px-6 text-left flex flex-col justify-between">
            <div>
              <span className="block overflow-hidden mb-4">
                <span data-roll className="font-heading text-4xl text-[#7B2FBE] block">02</span>
              </span>
              <h4 className="font-heading text-lg text-brand-dark mb-2">Review</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-normal">
                Preliminary evaluation for novelty, citation accuracy, and plagiarism checks.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="py-10 px-6 text-left flex flex-col justify-between">
            <div>
              <span className="block overflow-hidden mb-4">
                <span data-roll className="font-heading text-4xl text-[#7B2FBE] block">03</span>
              </span>
              <h4 className="font-heading text-lg text-brand-dark mb-2">Edit &amp; Format</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-normal">
                Academic proofreading, LaTeX/Word layout, and journal style formatting.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="py-10 px-6 text-left flex flex-col justify-between">
            <div>
              <span className="block overflow-hidden mb-4">
                <span data-roll className="font-heading text-4xl text-[#7B2FBE] block">04</span>
              </span>
              <h4 className="font-heading text-lg text-brand-dark mb-2">Journal Selection</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-normal">
                Targeting appropriate UGC CARE, Scopus, or peer-reviewed international avenues.
              </p>
            </div>
          </div>
          {/* Step 5 */}
          <div className="py-10 px-6 text-left flex flex-col justify-between">
            <div>
              <span className="block overflow-hidden mb-4">
                <span data-roll className="font-heading text-4xl text-[#7B2FBE] block">05</span>
              </span>
              <h4 className="font-heading text-lg text-brand-dark mb-2">Submission &amp; Follow-up</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-normal">
                Submission portal assistance, tracking, and peer review revision management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    /* END: PublicationProcessSection */
  );
}
