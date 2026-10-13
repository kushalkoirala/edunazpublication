export default function WhyChooseUs() {
  return (
    /* BEGIN: WhyChooseUsSection */
    <section className="py-24 bg-brand-slate text-white relative overflow-hidden">
      {/* Faint Academic Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          alt="Library shelves background"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdpPzrm64dt9SUwg8K22_HK-p10GlRnTry5vxU_Pc4g4kxvF9UzkzqLA4qilhKp-KtFGzKl2uQyHVX5sqpr3Qq62XK3nQoD_cxA_z_I7PoQn-Ev1aT92VHg6Akc1cd-u_zCRKEfahkaHyTIJGq95cR0eQ73bHTZyDuRKPy61ELvzuOIIFEtjSZcsJ3Ns6yElnBAmKflscO5tt2PDKpIhZOoU_8-_u9TgDQ2KZbW0dWe_1enGfoW3E"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
            DISTINCT ADVANTAGES
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading text-white leading-tight">
            Why <span className="text-brand-gold font-normal">Choose</span> Us
          </h2>
        </div>
        {/* 3x2 Grid separated by thin hairlines */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 border-t border-b border-white/15"
        >
          {/* Item 1 */}
          <div className="p-8 border-b lg:border-b border-white/15 md:border-r border-white/15">
            <div
              className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h4 className="font-heading text-lg text-white mb-2">Skilled Multi-Disciplinary Professionals</h4>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Subject experts covering Engineering, Pure Sciences, Medicine, and Management disciplines.
            </p>
          </div>
          {/* Item 2 */}
          <div className="p-8 border-b lg:border-b border-white/15 lg:border-r border-white/15">
            <div
              className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="square"
                  strokeLinejoin="miter" strokeWidth="1.5"></path>
              </svg>
            </div>
            <h4 className="font-heading text-lg text-white mb-2">Plagiarism Report Included</h4>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Transparent similarity score analytics via licensed software prior to journal dispatch.
            </p>
          </div>
          {/* Item 3 */}
          <div className="p-8 border-b lg:border-b border-white/15">
            <div
              className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="square"
                  strokeLinejoin="miter" strokeWidth="1.5"></path>
              </svg>
            </div>
            <h4 className="font-heading text-lg text-white mb-2">Experts with 10+ Years&apos; Experience</h4>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Guidance overseen by seasoned doctoral reviewers and published academic authors.
            </p>
          </div>
          {/* Item 4 */}
          <div className="p-8 md:border-r border-white/15 border-b md:border-b-0">
            <div
              className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h4 className="font-heading text-lg text-white mb-2">Rigorous Quality Review</h4>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Every deliverable goes through peer editorial check-loops before final handover.
            </p>
          </div>
          {/* Item 5 */}
          <div className="p-8 lg:border-r border-white/15 border-b md:border-b-0">
            <div
              className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h4 className="font-heading text-lg text-white mb-2">Conference Call Support</h4>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              One-on-one virtual coordination to discuss revisions, reviewer feedback and author queries.
            </p>
          </div>
          {/* Item 6 */}
          <div className="p-8">
            <div
              className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h4 className="font-heading text-lg text-white mb-2">Proofreading &amp; Structuring</h4>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Precision grammar enhancement, LaTeX syntax fixes, IEEE/APA reference standardization.
            </p>
          </div>
        </div>
      </div>
    </section>
    /* END: WhyChooseUsSection */
  );
}
