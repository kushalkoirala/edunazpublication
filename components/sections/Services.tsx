import Link from "next/link";

export default function Services() {
  return (
    /* BEGIN: ServicesSection */
    <section className="py-24 bg-white" id="areas">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] text-brand-dark font-heading leading-tight mb-4">
            Services for Every Stage of Your Research
          </h2>
          <p className="text-brand-muted font-body text-sm leading-relaxed font-normal">
            Writing, editing and publication support for scholars, researchers and professionals.
          </p>
        </div>

        {/* Three Service Cards (1200px container, 24px gap, stacked on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Research Publication */}
          <article
            className="bg-[#F3F3F3] border border-[#E5E5E5] p-6 lg:p-10 flex flex-col justify-between h-full text-left rounded-none shadow-none"
          >
            <div>
              {/* 1. 48px square outline box with thin line slate icon */}
              <div
                className="w-12 h-12 border border-[#3F4056] flex items-center justify-center flex-shrink-0 mb-6 text-[#3F4056] rounded-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
              {/* 2. Title in Marcellus 28px */}
              <h3 className="font-heading text-[28px] text-brand-dark leading-snug mb-4">
                Research Publication
              </h3>
              {/* 3. 1px hairline */}
              <div className="h-[1px] bg-[#E5E5E5] w-full mb-4"></div>
              {/* 4. One-sentence description, 14px Jost, muted */}
              <p className="text-sm font-body text-brand-muted leading-relaxed mb-6">
                Guidance through journal selection, manuscript preparation, formatting and submission.
              </p>
              {/* 5. List of 4 service rows */}
              <ul className="divide-y-0" role="list">
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-white flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-brand-dark transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Journal selection guidance
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-white flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-brand-dark transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Manuscript preparation
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-white flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-brand-dark transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Formatting to journal requirements
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-white flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-brand-dark transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Submission support
                  </span>
                </li>
              </ul>
            </div>
            {/* 6. Bottom text link */}
            <div className="pt-8 mt-auto">
              <Link
                href="/services/research-publication"
                className="inline-flex items-center text-[12px] uppercase tracking-[0.1em] font-medium font-body text-brand-dark hover:underline hover:decoration-[#D9A93F] hover:decoration-1 underline-offset-4 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
              >
                Explore this service <span className="ml-1.5 font-mono">→</span>
              </Link>
            </div>
          </article>

          {/* Card 2: Writing & Editing (Middle Card) */}
          <article
            className="bg-[#3F4056] text-white p-6 lg:p-10 lg:pb-16 flex flex-col justify-between h-full lg:-translate-y-6 lg:h-[calc(100%+48px)] text-left relative z-10 rounded-none shadow-none"
          >
            <div>
              {/* 1. 48px square outline box with thin line gold icon */}
              <div
                className="w-12 h-12 border border-[#D9A93F] flex items-center justify-center flex-shrink-0 mb-6 text-[#D9A93F] rounded-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
              {/* 2. Title in Marcellus 28px */}
              <h3 className="font-heading text-[28px] text-white leading-snug mb-4">
                Writing &amp; Editing
              </h3>
              {/* 3. 1px hairline (white at 20%) */}
              <div className="h-[1px] bg-white/20 w-full mb-4"></div>
              {/* 4. One-sentence description, 14px Jost, muted (white at 80%) */}
              <p className="text-sm font-body text-white/80 leading-relaxed mb-6">
                Writing and editing support for research articles, review papers and theses.
              </p>
              {/* 5. List of 4 service rows */}
              <ul className="divide-y-0" role="list">
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-white/20 transition-colors duration-200 hover:bg-white/[0.08] flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-white transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Research articles
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-white/20 transition-colors duration-200 hover:bg-white/[0.08] flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-white transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Review papers
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-white/20 transition-colors duration-200 hover:bg-white/[0.08] flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-white transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Theses
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-white/20 transition-colors duration-200 hover:bg-white/[0.08] flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-white transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Proofreading and editing
                  </span>
                </li>
              </ul>
            </div>
            {/* 6. Bottom text link */}
            <div className="pt-8 mt-auto">
              <Link
                href="/services/writing-and-editing"
                className="inline-flex items-center text-[12px] uppercase tracking-[0.1em] font-medium font-body text-white hover:underline hover:decoration-[#D9A93F] hover:decoration-1 underline-offset-4 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
              >
                Explore this service <span className="ml-1.5 font-mono text-[#D9A93F]">→</span>
              </Link>
            </div>
          </article>

          {/* Card 3: ISBN Book Publication */}
          <article
            className="bg-[#F3F3F3] border border-[#E5E5E5] p-6 lg:p-10 flex flex-col justify-between h-full text-left rounded-none shadow-none"
          >
            <div>
              {/* 1. 48px square outline box with thin line slate icon */}
              <div
                className="w-12 h-12 border border-[#3F4056] flex items-center justify-center flex-shrink-0 mb-6 text-[#3F4056] rounded-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15zM8 7h8m-8 4h8"
                    strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
              {/* 2. Title in Marcellus 28px */}
              <h3 className="font-heading text-[28px] text-brand-dark leading-snug mb-4">
                ISBN Book Publication
              </h3>
              {/* 3. 1px hairline */}
              <div className="h-[1px] bg-[#E5E5E5] w-full mb-4"></div>
              {/* 4. One-sentence description, 14px Jost, muted */}
              <p className="text-sm font-body text-brand-muted leading-relaxed mb-6">
                Support for publishing academic books and monographs with an ISBN.
              </p>
              {/* 5. List of 4 service rows */}
              <ul className="divide-y-0" role="list">
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-white flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-brand-dark transition-transform duration-200 group-hover:translate-x-1"
                  >
                    [Add detail]
                    {/* TODO: take these four points from the client's ISBN Book Publication page */}
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-white flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-brand-dark transition-transform duration-200 group-hover:translate-x-1"
                  >
                    [Add detail]
                    {/* TODO: take these four points from the client's ISBN Book Publication page */}
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-white flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-brand-dark transition-transform duration-200 group-hover:translate-x-1"
                  >
                    [Add detail]
                    {/* TODO: take these four points from the client's ISBN Book Publication page */}
                  </span>
                </li>
                <li
                  className="group py-3.5 px-2 -mx-2 border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-white flex items-center cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
                  tabIndex={0}
                >
                  <span
                    className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none"
                  ></span>
                  <span
                    className="text-sm font-body font-normal text-brand-dark transition-transform duration-200 group-hover:translate-x-1"
                  >
                    [Add detail]
                    {/* TODO: take these four points from the client's ISBN Book Publication page */}
                  </span>
                </li>
              </ul>
            </div>
            {/* 6. Bottom text link */}
            <div className="pt-8 mt-auto">
              <Link
                href="/services/isbn-book-publication"
                className="inline-flex items-center text-[12px] uppercase tracking-[0.1em] font-medium font-body text-brand-dark hover:underline hover:decoration-[#D9A93F] hover:decoration-1 underline-offset-4 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A93F]"
              >
                Explore this service <span className="ml-1.5 font-mono">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
    /* END: ServicesSection */
  );
}
