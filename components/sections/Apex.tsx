import Link from "next/link";

export default function Apex() {
  return (
    /* BEGIN: ApexProgramSection */
    <section className="py-24 bg-[#F7F3EE] relative overflow-hidden" id="apex">
      {/* Decorative radial blobs */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 opacity-50"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(123,47,190,0.15) 0%, transparent 70%)", borderRadius: "50%" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 opacity-40"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(123,47,190,0.15) 0%, transparent 70%)", borderRadius: "50%" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Academic Photo with Gold Offset Border ── */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Purple offset border behind image */}
              <div
                data-reveal="clip-left"
                className="absolute -top-4 -left-4 w-full h-full border-2 border-[#7B2FBE] z-0 pointer-events-none shadow-[0_0_15px_rgba(123,47,190,0.25)]"
              />
              {/* Image */}
              <div
                data-reveal="clip-up"
                className="relative z-10 w-full h-[420px] overflow-hidden border border-brand-borderHairline"
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

          {/* ── Right Column: Program Details ── */}
          <div className="lg:col-span-7">

            {/* Eyebrow with trailing purple rule */}
            <div data-reveal="up" className="flex items-center gap-3 mb-4">
              <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-semibold whitespace-nowrap">
                APEX PROGRAM
              </p>
              <div className="h-px bg-[#7B2FBE] opacity-60 w-16" />
            </div>

            {/* Headline */}
            <h2
              data-split="lines"
              className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-5"
            >
              Institutional Research{" "}
              <span className="text-[#7B2FBE] font-normal">Acceleration</span>
            </h2>

            {/* Description */}
            <p data-reveal="up" className="text-brand-muted font-body text-sm leading-relaxed mb-8 max-w-xl">
              The APEX Program by Edunaaz Publication is a structured institutional mentorship and
              publication acceleration initiative. Designed specifically for colleges, universities, and
              departmental research centers, APEX provides faculty members and postgraduate candidates
              with hands-on manuscript clinics, indexing literacy workshops, and dedicated publication
              pipelines.
            </p>

            {/* Feature list with icon badges */}
            <ul data-stagger className="space-y-4 mb-10">

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 border border-[#7B2FBE]/50 bg-[#7B2FBE]/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </span>
                <span className="pt-2.5 text-sm text-brand-dark font-medium">
                  Dedicated Institutional Coordinator &amp; Editorial Liaison
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 border border-[#7B2FBE]/60 bg-[#7B2FBE]/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </span>
                <span className="pt-2.5 text-sm text-brand-dark font-medium">
                  Workshops on UGC CARE, Scopus &amp; Web of Science Compliance
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 border border-[#7B2FBE]/50 bg-[#7B2FBE]/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </span>
                <span className="pt-2.5 text-sm text-brand-dark font-medium">
                  Priority Manuscript Formatting and Conference Proceeding Publication
                </span>
              </li>

            </ul>

            {/* CTA Button */}
            <Link
              data-magnetic
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] transition-colors duration-200 text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider group shadow-[0_0_15px_rgba(123,47,190,0.35)]"
              href="/apex"
            >
              LEARN MORE
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
    /* END: ApexProgramSection */
  );
}
