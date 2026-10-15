import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { PLACEHOLDERS, COMPANY_INFO } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Edunaaz Publication (OPC) Private Limited, registered under the Ministry of Corporate Affairs, Government of India. Supporting scholars and professionals in academic publishing.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT EDUNAAZ"
        title="Your Trusted Partner in Academic Publishing"
        accentWord="Trusted"
        intro="Advancing academic rigor and research dissemination across global platforms."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Main Editorial & Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Information */}
            <div className="lg:col-span-7" data-reveal="up">
              <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
                EDITORIAL INTEGRITY
              </p>
              <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-6" data-split="lines">
                Scholarly Press <span className="text-brand-gold font-normal">Dedicated</span> to Rigor
              </h2>
              <p className="text-brand-muted font-body text-sm leading-relaxed mb-6">
                EDUNAAZ PUBLICATION (OPC) PRIVATE LIMITED is registered under the Ministry of Corporate
                Affairs, Government of India. We support scholars and professionals with publication-ready
                research articles, review papers and theses, guiding authors through journal selection,
                manuscript preparation, formatting and submission.
              </p>
              <p className="text-brand-muted font-body text-sm leading-relaxed mb-8">
                CIN: <span className="text-brand-dark font-mono font-medium">{COMPANY_INFO.cin}</span>. Our team of multi-disciplinary editors and doctoral reviewers brings dedicated expertise across engineering, pure sciences, management, and medicine to assist researchers at every phase of publication.
              </p>
              <div className="hairline-divider mb-8" data-line />
              {/* Founder Signature & Small Caps Subtitle */}
              <div className="flex flex-col items-start" data-reveal="clip-left">
                {/* TODO: Replace with official signature and confirmed name of founder */}
                <span className="font-signature text-3xl sm:text-4xl text-brand-gold tracking-wide leading-none pb-1">
                  {PLACEHOLDERS.FOUNDER_NAME}
                </span>
                <span className="text-[11px] font-body tracking-[0.2em] uppercase text-brand-muted font-medium mt-1">
                  FOUNDER &amp; MANAGING DIRECTOR, EDUNAAZ
                </span>
              </div>
            </div>

            {/* Right Column: Scholar Portrait with 15+ Badge Overlay */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden" data-reveal="clip-up">
                <img
                  alt="Academic Scholar and Researcher"
                  className="w-full h-[460px] object-cover object-top border border-brand-borderHairline shadow-none"
                  data-parallax="0.1"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkYUdG8bQEbSQimBDMA6FJKmqiIbqH8IZEe2CILqUScj_UAIvx7peT3HlqEM6oUBzmbctMldrQPPXXEIx6MAP49-tB-wkSaWir9y5h8mjfiXPpi1Ubjtw2aOfgQpKDsIl33mDHpZAO3KFE9OUzBy2L4K9TPSfl1lfERu6qEKATcKvTQ4zyxVWSttTWGxrOdSpRkfP4c4MhiIZeWiwtQW8lcjXfl_o4g1BeoqNLS8VO3yj00XwUrk0"
                />
                <div
                  className="absolute bottom-6 -left-4 sm:-left-8 bg-brand-bgGray border border-brand-borderHairline px-6 py-4 flex items-center space-x-3 shadow-none"
                  data-reveal="scale"
                >
                  <span className="font-heading text-3xl sm:text-4xl text-brand-gold leading-none font-normal">
                    15+
                  </span>
                  <span className="text-[10px] tracking-widest font-body uppercase text-brand-dark font-semibold leading-tight">
                    SKILLED<br />PROFESSIONALS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Band */}
      <section className="relative py-20 bg-[#3F4056] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none grayscale"
          data-parallax="0.15"
          style={{ backgroundImage: "var(--img-library)" }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger>
            <div className="border-l-2 border-[#D9A93F] pl-6" data-reveal="up">
              <div
                className="font-heading text-4xl sm:text-5xl text-[#D9A93F] leading-none mb-2"
                data-count="15"
                data-suffix="+"
              >
                15+
              </div>
              <p className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium">
                Skilled professionals
              </p>
            </div>
            <div className="border-l-2 border-[#D9A93F] pl-6" data-reveal="up">
              <div
                className="font-heading text-4xl sm:text-5xl text-[#D9A93F] leading-none mb-2"
                data-count="10"
                data-suffix="+"
              >
                10+
              </div>
              <p className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium">
                Years&apos; experience of our experts
              </p>
            </div>
            <div className="border-l-2 border-[#D9A93F] pl-6 sm:col-span-2 lg:col-span-1" data-reveal="up">
              <div className="font-heading text-4xl sm:text-5xl text-[#D9A93F] leading-none mb-2">
                24x7
              </div>
              <p className="font-body text-[12px] uppercase tracking-[0.12em] text-white/80 font-medium">
                Enquiry support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distinct Advantages (Why Choose Us) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16" data-reveal="up">
            <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
              DISTINCT ADVANTAGES
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading text-brand-dark leading-tight" data-split="lines">
              Why <span className="text-brand-gold font-normal">Choose</span> Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 border-t border-b border-brand-borderHairline" data-stagger>
            {/* Item 1 */}
            <div className="p-8 border-b lg:border-b border-brand-borderHairline md:border-r" data-reveal="up">
              <div className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6" data-reveal="scale">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-brand-dark mb-2">Skilled Multi-Disciplinary Professionals</h3>
              <p className="text-xs text-brand-muted font-body leading-relaxed">
                Subject experts covering Engineering, Pure Sciences, Medicine, and Management disciplines.
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-8 border-b lg:border-b border-brand-borderHairline lg:border-r" data-reveal="up">
              <div className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6" data-reveal="scale">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-brand-dark mb-2">Plagiarism Report Included</h3>
              <p className="text-xs text-brand-muted font-body leading-relaxed">
                Transparent similarity score analytics via licensed software prior to journal dispatch.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-8 border-b lg:border-b border-brand-borderHairline" data-reveal="up">
              <div className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6" data-reveal="scale">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-brand-dark mb-2">Experts with 10+ Years&apos; Experience</h3>
              <p className="text-xs text-brand-muted font-body leading-relaxed">
                Guidance overseen by seasoned doctoral reviewers and published academic authors.
              </p>
            </div>

            {/* Item 4 */}
            <div className="p-8 md:border-r border-brand-borderHairline border-b md:border-b-0" data-reveal="up">
              <div className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6" data-reveal="scale">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-brand-dark mb-2">Rigorous Quality Review</h3>
              <p className="text-xs text-brand-muted font-body leading-relaxed">
                Every deliverable goes through peer editorial check-loops before final handover.
              </p>
            </div>

            {/* Item 5 */}
            <div className="p-8 lg:border-r border-brand-borderHairline border-b md:border-b-0" data-reveal="up">
              <div className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6" data-reveal="scale">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-brand-dark mb-2">Conference Call Support</h3>
              <p className="text-xs text-brand-muted font-body leading-relaxed">
                One-on-one virtual coordination to discuss revisions, reviewer feedback and author queries.
              </p>
            </div>

            {/* Item 6 */}
            <div className="p-8" data-reveal="up">
              <div className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold mb-6" data-reveal="scale">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-brand-dark mb-2">Proofreading &amp; Structuring</h3>
              <p className="text-xs text-brand-muted font-body leading-relaxed">
                Precision grammar enhancement, LaTeX syntax fixes, IEEE/APA reference standardization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
