import Link from "next/link";

export default function FeaturedJournals() {
  return (
    /* BEGIN: FeaturedJournalsSection */
    <section className="py-24 bg-brand-bgGray" id="journals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
            OUR JOURNALS
          </p>
          <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight">
            Featured <span className="text-brand-gold font-normal">Academic</span> Journals
          </h2>
        </div>
        {/* 3 Flat White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Journal 1 */}
          <div className="bg-white p-8 border border-brand-borderHairline flex flex-col justify-between">
            <div>
              <span
                className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-2"
              >PEER
                REVIEWED</span>
              <h3 className="font-heading text-xl text-brand-dark mb-2">
                International Journal of Advanced Engineering &amp; Scientific Research
              </h3>
              <p className="text-xs font-mono text-brand-muted mb-4">ISSN: [258X-XXXX (Online)]</p>
              <div className="hairline-divider my-4"></div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Bi-annual multidisciplinary publication dedicated to contemporary engineering designs,
                computational innovations, and technological models.
              </p>
            </div>
            <div className="pt-8">
              <Link
                className="text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-dark transition-colors flex items-center group"
                href="/contact"
              >
                SUBMIT ARTICLE <span
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >→</span>
              </Link>
            </div>
          </div>
          {/* Journal 2 */}
          <div className="bg-white p-8 border border-brand-borderHairline flex flex-col justify-between">
            <div>
              <span
                className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-2"
              >OPEN
                ACCESS</span>
              <h3 className="font-heading text-xl text-brand-dark mb-2">
                Edunaaz Review of Global Management &amp; Applied Economics
              </h3>
              <p className="text-xs font-mono text-brand-muted mb-4">ISSN: [258X-XXXX (Online)]</p>
              <div className="hairline-divider my-4"></div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Focuses on empirical investigations, financial strategy, public policy, econometric
                forecasting, and emerging market paradigms.
              </p>
            </div>
            <div className="pt-8">
              <Link
                className="text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-dark transition-colors flex items-center group"
                href="/contact"
              >
                SUBMIT ARTICLE <span
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >→</span>
              </Link>
            </div>
          </div>
          {/* Journal 3 */}
          <div className="bg-white p-8 border border-brand-borderHairline flex flex-col justify-between">
            <div>
              <span
                className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-2"
              >SCHOLARLY
                FORUM</span>
              <h3 className="font-heading text-xl text-brand-dark mb-2">
                Journal of Modern Interdisciplinary Science &amp; Humanities
              </h3>
              <p className="text-xs font-mono text-brand-muted mb-4">ISSN: [258X-XXXX (Online)]</p>
              <div className="hairline-divider my-4"></div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Platform fostering collaborative discourse across social sciences, applied sciences,
                education, and cultural research initiatives.
              </p>
            </div>
            <div className="pt-8">
              <Link
                className="text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-dark transition-colors flex items-center group"
                href="/contact"
              >
                SUBMIT ARTICLE <span
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    /* END: FeaturedJournalsSection */
  );
}
