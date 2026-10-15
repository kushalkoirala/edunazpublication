export default function Indexing() {
  return (
    /* BEGIN: IndexingDatabasesSection */
    <section className="py-12 bg-white border-t border-b border-brand-borderHairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Row of Indexing Names with hairline dividers */}
        <div data-stagger className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base font-heading text-brand-muted uppercase tracking-wider">
          <span className="hover:text-brand-dark transition-colors">Google Scholar</span>
          <span className="text-brand-borderHairline font-mono">/</span>
          <span className="hover:text-brand-dark transition-colors">Scopus</span>
          <span className="text-brand-borderHairline font-mono">/</span>
          <span className="hover:text-brand-dark transition-colors">DOAJ</span>
          <span className="text-brand-borderHairline font-mono">/</span>
          <span className="hover:text-brand-dark transition-colors">PubMed</span>
          <span className="text-brand-borderHairline font-mono">/</span>
          <span className="hover:text-brand-dark transition-colors">ResearchGate</span>
        </div>
        <p data-reveal="fade" className="text-[11px] text-brand-muted font-body mt-3 font-normal">
          Indexing and repository archival status varies by specific journal and volume.
        </p>
      </div>
    </section>
    /* END: IndexingDatabasesSection */
  );
}
