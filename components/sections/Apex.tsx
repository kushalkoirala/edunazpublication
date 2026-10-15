import Link from "next/link";

export default function Apex() {
  return (
    /* BEGIN: ApexProgramSection */
    <section className="py-24 bg-white" id="apex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Academic Photo with Square Gold Offset Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Square Gold Offset Border Behind Image */}
              <div
                data-reveal="clip-left"
                className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold z-0 pointer-events-none"
              />
              {/* Actual Image */}
              <div
                data-reveal="clip-up"
                className="relative z-10 w-full h-[400px] overflow-hidden border border-brand-borderHairline shadow-none"
              >
                <img
                  data-parallax="0.08"
                  alt="Institutional Mentorship & Research Program"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8SykcoqvFrV2J_Uzthc2tluoOUvgKD3zdM6lpkVpFA6yn9YRIrsaXP1nLNDrt_xmXdlz_-VBxMap6gpY5GYNcxpjf4eezENULgagWpyL3vRitVr3_66lojJdsC-cEfRZDp5T_ybthzx0M8dEKmtZNUHn_Hn57p_uqFESLaQ74MBdcOc5GltlV_jRI8_tAaC0YQEB-J94ea7NJ8PflvjNXiRZUShCfWPvKSgsoFVT2FW8IwRpXwyw"
                />
              </div>
            </div>
          </div>
          {/* Right Column: Program Details */}
          <div className="lg:col-span-6">
            <p data-reveal="up" className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
              APEX PROGRAM
            </p>
            <h2 data-split="lines" className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-6">
              Institutional Research <span className="text-brand-gold font-normal">Acceleration</span>
            </h2>
            <p data-reveal="up" className="text-brand-muted font-body text-sm leading-relaxed mb-6">
              The APEX Program by Edunaaz Publication is a structured institutional mentorship and
              publication acceleration initiative. Designed specifically for colleges, universities, and
              departmental research centers, APEX provides faculty members and postgraduate candidates
              with hands-on manuscript clinics, indexing literacy workshops, and dedicated publication
              pipelines.
            </p>
            <ul data-stagger className="space-y-3 mb-8 text-xs text-brand-dark font-medium">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-gold" />
                <span className="">Dedicated Institutional Coordinator & Editorial Liaison</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-gold" />
                <span className="">Workshops on UGC CARE, Scopus & Web of Science Compliance</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-brand-gold" />
                <span className="">
                  Priority Manuscript Formatting and Conference Proceeding Publication
                </span>
              </li>
            </ul>
            {/* Primary Button Style */}
            <div className="inline-flex">
              <Link
                data-magnetic
                className="inline-flex items-stretch bg-brand-gold hover:bg-brand-goldHover transition-colors duration-150 text-brand-dark group shadow-none"
                href="/apex"
              >
                <span className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center">
                  LEARN MORE
                </span>
                <span className="w-11 bg-white border-l border-brand-gold flex items-center justify-center text-brand-dark transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    /* END: ApexProgramSection */
  );
}
