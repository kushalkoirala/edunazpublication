import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import InquiryButton from "@/components/ui/InquiryButton";
import AboutCollage from "@/components/sections/AboutCollage";
import { COMPANY_INFO } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "EDUNAAZ PUBLICATION OPC PRIVATE LIMITED is an India-based academic research support and publication consultancy company. Empowering Research. Connecting Knowledge. Creating Opportunities.",
};

const SERVICES_LIST = [
  {
    number: "01",
    title: "Research Publication Assistance",
    description:
      "Support for Scopus, SCIE, SSCI, and other indexed journal publication processes.",
    icon: (
      <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Manuscript Preparation",
    description:
      "Research article development, structuring, formatting, and improvement.",
    icon: (
      <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Professional Editing & Proofreading",
    description:
      "Language enhancement, grammar correction, and academic refinement.",
    icon: (
      <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 18h1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Journal Selection & Submission Support",
    description:
      "Assistance in identifying suitable journals and preparing submissions.",
    icon: (
      <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Peer-Review & Revision Assistance",
    description:
      "Support with reviewer comments, response preparation, and manuscript revisions.",
    icon: (
      <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Plagiarism Checking",
    description:
      "Similarity assessment and originality improvement guidance.",
    icon: (
      <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "ISBN Book Publication",
    description:
      "Assistance with book preparation, formatting, and ISBN-related publishing requirements.",
    icon: (
      <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── 1. HERO SECTION ── */}
      <PageHero
        eyebrow="ABOUT US"
        title="Empowering Research. Connecting Knowledge. Creating Opportunities."
        accentWord="Knowledge"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* ── 2. WHO WE ARE SECTION ── */}
      <section className="py-20 sm:py-24 bg-white" id="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Who We Are Content */}
            <div className="lg:col-span-7" data-reveal="up">
              <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-6" data-split="lines">
                Who <span className="text-[#7B2FBE] font-normal">We Are</span>
              </h2>

              <div className="space-y-4 text-brand-muted font-body text-sm sm:text-[15px] leading-relaxed">
                <p>
                  <strong className="text-brand-dark font-medium italic">EDUNAAZ PUBLICATION OPC PRIVATE LIMITED</strong> is an India-based academic research support and publication consultancy company dedicated to assisting researchers, academicians, scholars, and professionals in their scholarly publishing journey.
                </p>
                <p>
                  We provide professional academic services designed to improve manuscript quality, strengthen research presentation, and help authors navigate international journal publication requirements.
                </p>
                <p>
                  With a commitment to quality, transparency, and academic integrity, we support researchers across diverse disciplines and help them explore suitable publication opportunities in reputed national and international journals.
                </p>
              </div>
            </div>

            {/* Right Column: Existing Image Collage (Preserved) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <AboutCollage />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR SERVICES SECTION ── */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-b border-brand-borderHairline" id="our-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="up">
            <h2 className="text-3xl sm:text-4xl font-heading text-brand-dark leading-tight mb-4" data-split="lines">
              Our <span className="text-[#7B2FBE] font-normal">Services</span>
            </h2>
            <p className="text-sm font-body text-brand-muted leading-relaxed">
              We offer comprehensive academic and publication support services, including:
            </p>
          </div>

          {/* 7 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.number}
                className="p-6 sm:p-7 bg-white border border-brand-borderHairline transition-all duration-200 hover:-translate-y-1 hover:border-[#7B2FBE]/50 hover:shadow-[0_8px_24px_rgba(123,47,190,0.06)] flex flex-col justify-between"
                data-reveal="up"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-[#7B2FBE] tracking-wider">
                      {srv.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#FAF7FD] flex items-center justify-center">
                      {srv.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-brand-dark font-medium leading-snug mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR COMMITMENT SECTION ── */}
      <section className="py-20 sm:py-24 bg-white" id="our-commitment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal="up">
          <h2 className="text-3xl sm:text-4xl font-heading text-brand-dark leading-tight mb-6" data-split="lines">
            Our <span className="text-[#7B2FBE] font-normal">Commitment</span>
          </h2>

          <div className="space-y-4 text-brand-muted font-body text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              We believe every research contribution deserves professional attention and responsible academic presentation. Our objective is to make research publication support more accessible through quality-driven services, transparent communication, and personalized assistance.
            </p>
            <p>
              We respect academic originality, authorship responsibilities, and ethical publishing practices. Journal acceptance and publication decisions remain solely with the respective journals and their editorial teams.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. CORPORATE INFORMATION SECTION ── */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-b border-brand-borderHairline" id="corporate-info">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="up">
            <h2 className="text-3xl sm:text-4xl font-heading text-brand-dark leading-tight" data-split="lines">
              Corporate <span className="text-[#7B2FBE] font-normal">Information</span>
            </h2>
          </div>

          {/* Corporate Details Grid */}
          <div
            className="bg-white border border-brand-borderHairline shadow-[0_4px_20px_rgba(0,0,0,0.02)] divide-y divide-brand-borderHairline"
            data-reveal="up"
          >
            {/* Row 1: Legal Name & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-borderHairline">
              <div className="p-5 sm:p-6">
                <span className="block text-[11px] font-body uppercase tracking-wider text-brand-muted mb-1">
                  Legal Company Name
                </span>
                <span className="text-sm sm:text-base font-body font-semibold text-brand-dark select-all">
                  EDUNAAZ PUBLICATION OPC PRIVATE LIMITED
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <span className="block text-[11px] font-body uppercase tracking-wider text-brand-muted mb-1">
                  Country of Registration
                </span>
                <span className="text-sm sm:text-base font-body font-semibold text-brand-dark">
                  India
                </span>
              </div>
            </div>

            {/* Row 2: CIN & PAN */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-borderHairline">
              <div className="p-5 sm:p-6">
                <span className="block text-[11px] font-body uppercase tracking-wider text-brand-muted mb-1">
                  Corporate Identification Number (CIN)
                </span>
                <span className="text-sm sm:text-base font-mono font-medium text-brand-dark tracking-wide select-all">
                  U85499AS2025OPC028933
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <span className="block text-[11px] font-body uppercase tracking-wider text-brand-muted mb-1">
                  Permanent Account Number (PAN)
                </span>
                <span className="text-sm sm:text-base font-mono font-medium text-brand-dark tracking-wide select-all">
                  AAJCE1571E
                </span>
              </div>
            </div>

            {/* Row 3: GSTIN & Udyam */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-borderHairline">
              <div className="p-5 sm:p-6">
                <span className="block text-[11px] font-body uppercase tracking-wider text-brand-muted mb-1">
                  Goods and Services Tax Identification Number (GSTIN)
                </span>
                <span className="text-sm sm:text-base font-mono font-medium text-brand-dark tracking-wide select-all">
                  18AAJCE1571E1ZQ
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <span className="block text-[11px] font-body uppercase tracking-wider text-brand-muted mb-1">
                  Udyam Registration Number
                </span>
                <span className="text-sm sm:text-base font-mono font-medium text-brand-dark tracking-wide select-all">
                  UDYAM-AS-02-0046078
                </span>
              </div>
            </div>

            {/* Row 4: IEC Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-borderHairline">
              <div className="p-5 sm:p-6">
                <span className="block text-[11px] font-body uppercase tracking-wider text-brand-muted mb-1">
                  Importer-Exporter Code (IEC)
                </span>
                <span className="text-sm sm:text-base font-mono font-medium text-brand-dark tracking-wide select-all">
                  AAJCE1571E
                </span>
              </div>
              <div className="p-5 sm:p-6 bg-brand-bgGray/40 flex items-center">
                <p className="text-xs font-body text-brand-muted italic leading-relaxed">
                  Registered under the Ministry of Corporate Affairs, Government of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LET'S GROW TOGETHER (FINAL CTA) ── */}
      <section className="relative py-24 bg-brand-slate text-white overflow-hidden" id="cta-grow">
        {/* Full-Width Background Photo with Slate Overlay */}
        <div data-parallax="0.1" className="absolute inset-0 z-0 pointer-events-none scale-105">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Books in academic library"
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuAeCSgWJ3Yt_AjZxwKcLHNd1oW2I91bhHyrWOEUHyqQNmlwAPP854uZWnAflbuDwTaVvW-qW1LDl1WazAF_XM4tee6lP1mLtlCc4JwKBzwASciNA0wor0cLdicTOsTcXF0k8l6HczVuw1CB6lHhlBKNL1aoCJMY9KLGedf_04eHUcFnTXxKe0fSez95qHcPZ8J9hE0uvHl_zoanVFC3m3Unbkfw4Uki6MTL3gu9-kGYspIA4tG88"
          />
          <div className="absolute inset-0 bg-[#3F4056]/90" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 5% 50%, rgba(123,47,190,0.22) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p data-reveal="up" className="text-xs uppercase tracking-eyebrow text-[#C084FC] font-medium mb-3">
            LET&apos;S GROW TOGETHER
          </p>

          <p data-reveal="up" className="text-white/80 font-body text-sm sm:text-base max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Whether you are a researcher, academician, doctoral scholar, or research professional, we are here to support your publication journey.
          </p>

          <p data-reveal="up" className="text-xs uppercase tracking-[0.2em] text-[#C084FC] font-body font-semibold mb-3">
            EDUNAAZ PUBLICATION OPC PRIVATE LIMITED
          </p>

          <h2 data-split="lines" className="text-2xl sm:text-3xl lg:text-4xl font-heading text-white mb-8">
            Your Research. Our Expertise. <span className="text-[#C084FC] font-normal">A World of Possibilities.</span>
          </h2>

          <div data-reveal="up" className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <Link
              data-magnetic
              href="/contact?type=consultation"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 group shadow-[0_0_20px_rgba(123,47,190,0.4)]"
              style={{ borderRadius: "8px" }}
            >
              <span>BOOK A CONSULTANT</span>
              <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
            <InquiryButton
              category="General Academic Inquiry"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white font-bold text-xs uppercase tracking-wider rounded-lg backdrop-blur-sm transition-all duration-200 group cursor-pointer"
              style={{ borderRadius: "8px" }}
            >
              <span>INQUIRE NOW</span>
              <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </InquiryButton>
          </div>

          <div className="inline-flex items-center space-x-2 text-white/90 text-xs font-medium">
            <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.275-.102-.475-.15-.676.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.235-.244-.589-.493-.51-.676-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.032-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.996h-.008c-1.776 0-3.517-.478-5.045-1.383l-.362-.215-3.75 1.002.999-3.65-.236-.375c-1.005-1.6-1.536-3.456-1.536-5.36 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.186 1.042 7.076 2.932s2.93 4.405 2.928 7.08c-.002 5.52-4.492 10.01-10.014 10.01zM19.78 4.22A11.002 11.002 0 0 0 12.04 1C5.975 1 1.025 5.95 1.022 12.018c0 1.938.505 3.832 1.464 5.495l-1.558 5.69 5.83-1.528A10.98 10.98 0 0 0 12.04 23c6.066 0 11.015-4.95 11.018-11.018 0-2.94-1.144-5.706-3.278-7.762z" />
            </svg>
            <span>Chat on WhatsApp:</span>
            <a
              className="text-[#C084FC] hover:text-white hover:underline font-semibold transition-colors"
              href={COMPANY_INFO.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
