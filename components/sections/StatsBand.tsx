export default function StatsBand() {
  return (
    /* BEGIN: StatsBandSection */
    <section
      className="relative py-20 bg-[#3F4056] text-white overflow-hidden"
      id="stats-band"
    >
      {/* Faint library photo background (~10% opacity) with light parallax */}
      <div
        data-parallax="0.1"
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none scale-105"
        style={{ backgroundImage: "var(--img-library)" }}
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div data-stagger className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Stat 1: 15+ Skilled professionals */}
          <div
            className="border-r border-b lg:border-b-0 border-white/15 pr-4 sm:pr-6 lg:px-8 py-6 lg:py-0 text-left"
          >
            <div className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#D9A93F] leading-none mb-3">
              <span className="stat-num" data-count data-target="15" data-suffix="+">15+</span>
            </div>
            <div data-line className="w-8 h-[1px] bg-[#D9A93F] mb-3"></div>
            <p
              className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium leading-relaxed"
            >
              Skilled professionals
            </p>
          </div>

          {/* Stat 2: 10+ Years' experience of our experts */}
          <div
            className="border-b lg:border-b-0 lg:border-r border-white/15 pl-4 sm:pl-6 lg:px-8 py-6 lg:py-0 text-left"
          >
            <div className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#D9A93F] leading-none mb-3">
              <span className="stat-num" data-count data-target="10" data-suffix="+">10+</span>
            </div>
            <div data-line className="w-8 h-[1px] bg-[#D9A93F] mb-3"></div>
            <p
              className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium leading-relaxed"
            >
              Years&apos; experience of our experts
            </p>
          </div>

          {/* Stat 3: 24x7 Enquiry support */}
          <div className="border-r border-white/15 pr-4 sm:pr-6 lg:px-8 py-6 lg:py-0 text-left">
            <div className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#D9A93F] leading-none mb-3">
              <span className="stat-num">24x7</span>
            </div>
            <div data-line className="w-8 h-[1px] bg-[#D9A93F] mb-3"></div>
            <p
              className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium leading-relaxed"
            >
              Enquiry support
            </p>
          </div>

          {/* Stat 4: [Add figure] | [Add label] */}
          {/* TODO: only fill in with a number the client can prove */}
          <div className="pl-4 sm:pl-6 lg:px-8 py-6 lg:py-0 text-left">
            <div className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#D9A93F] leading-none mb-3">
              <span className="stat-num">[--]</span>
            </div>
            <div data-line className="w-8 h-[1px] bg-[#D9A93F] mb-3"></div>
            <p
              className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium leading-relaxed"
            >
              [Add label, e.g. Manuscripts supported]
            </p>
          </div>
        </div>
      </div>
    </section>
    /* END: StatsBandSection */
  );
}
