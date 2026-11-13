import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import InquiryButton from "@/components/ui/InquiryButton";
import IsbnPublicationSections from "@/components/sections/IsbnPublicationSections";
import WritingEditingServices from "@/components/sections/WritingEditingServices";
import ResearchPublicationPageContent from "@/components/sections/ResearchPublicationPageContent";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "research-publication") {
    return {
      title: "Research Publication Consultancy | Scopus & SCIE Journal Support | Edunaaz",
      description:
        "Professional publication consultancy and editorial support for researchers, academicians and scholars seeking to publish in Scopus, SCIE, SSCI and other indexed journals.",
    };
  }

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (service.slug === "research-publication") {
    return <ResearchPublicationPageContent />;
  }

  const isIsbn = service.slug === "isbn-book-publication";
  const isWritingEditing = service.slug === "writing-and-editing";

  return (
    <main>
      <PageHero
        eyebrow="SERVICE DETAILS"
        title={service.title}
        accentWord={service.heroAccentWord}
        intro={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Main Content Section */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Atmospheric: faint top-left curved lines */}
        <div className="pointer-events-none absolute top-0 left-0 w-[280px] h-[280px] opacity-[0.06]">
          <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 240 Q100 100 240 0" stroke="#7B2FBE" strokeWidth="40" fill="none" strokeLinecap="round" />
            <path d="M0 280 Q120 120 280 0" stroke="#7B2FBE" strokeWidth="30" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Atmospheric: soft purple wave bottom-right */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-[520px] h-[320px] opacity-[0.07]">
          <svg viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M520 320 C400 260, 300 160, 180 200 C60 240, 0 180, 0 320 Z" fill="#7B2FBE" />
            <path d="M520 320 C420 280, 340 200, 220 240 C100 280, 40 220, 40 320 Z" fill="#A855F7" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Scope & Deliverables */}
            <div className="lg:col-span-8">
              {isIsbn ? (
                <>
                  {/* Top Header Row with Book Stack Illustration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                    <div className="max-w-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7B2FBE] font-semibold font-body">
                          SERVICE OVERVIEW
                        </p>
                        <span className="h-0.5 w-12 bg-[#7B2FBE] rounded-full" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-heading leading-tight mb-4">
                        Comprehensive Support for <br />
                        <span className="text-[#7B2FBE]">ISBN Book Publication</span>
                      </h2>
                      <p className="text-brand-muted font-body text-base leading-relaxed">
                        {service.fullDescription}
                      </p>
                    </div>

                    {/* Stylized Book Stack Illustration */}
                    <div className="relative flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center self-center sm:self-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EDE0FF] to-[#FAF5FF] opacity-90 blur-[2px]" />
                      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full drop-shadow-md">
                        {/* Green leaf sprig */}
                        <path d="M42 90 C35 70, 50 55, 60 50 C62 65, 55 80, 42 90 Z" fill="#65A30D" />
                        <path d="M42 90 Q50 68 60 50" stroke="#4D7C0F" strokeWidth="1.5" />
                        <path d="M35 110 C25 95, 35 80, 48 80 C48 95, 42 105, 35 110 Z" fill="#84CC16" />
                        <path d="M35 110 Q42 95 48 80" stroke="#4D7C0F" strokeWidth="1.5" />

                        {/* Bottom book (deep purple) */}
                        <g transform="translate(48, 98)">
                          <rect x="0" y="16" width="128" height="6" rx="3" fill="#4A154B" />
                          <rect x="3" y="2" width="122" height="15" rx="1" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="1" />
                          <line x1="8" y1="6" x2="120" y2="6" stroke="#EDE0FF" strokeWidth="1" />
                          <line x1="8" y1="10" x2="120" y2="10" stroke="#EDE0FF" strokeWidth="1" />
                          <line x1="8" y1="14" x2="120" y2="14" stroke="#EDE0FF" strokeWidth="1" />
                          <rect x="0" y="0" width="128" height="5" rx="2.5" fill="#6620A0" />
                          <path d="M0 2.5 C-4 2.5, -4 19.5, 0 19.5 Z" fill="#4A154B" />
                        </g>

                        {/* Middle book (warm beige/gold) */}
                        <g transform="translate(54, 76)">
                          <rect x="0" y="16" width="122" height="6" rx="3" fill="#D4A373" />
                          <rect x="3" y="2" width="116" height="15" rx="1" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="1" />
                          <line x1="8" y1="6" x2="114" y2="6" stroke="#F5EBE0" strokeWidth="1" />
                          <line x1="8" y1="10" x2="114" y2="10" stroke="#F5EBE0" strokeWidth="1" />
                          <line x1="8" y1="14" x2="114" y2="14" stroke="#F5EBE0" strokeWidth="1" />
                          <rect x="0" y="0" width="122" height="5" rx="2.5" fill="#E6BE8A" />
                          <path d="M0 2.5 C-4 2.5, -4 19.5, 0 19.5 Z" fill="#C89666" />
                        </g>

                        {/* Top book (vibrant royal purple) */}
                        <g transform="translate(58, 54)">
                          <rect x="0" y="16" width="116" height="6" rx="3" fill="#6620A0" />
                          <rect x="3" y="2" width="110" height="15" rx="1" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="1" />
                          <line x1="8" y1="6" x2="108" y2="6" stroke="#EDE0FF" strokeWidth="1" />
                          <line x1="8" y1="10" x2="108" y2="10" stroke="#EDE0FF" strokeWidth="1" />
                          <line x1="8" y1="14" x2="108" y2="14" stroke="#EDE0FF" strokeWidth="1" />
                          <rect x="0" y="0" width="116" height="5" rx="2.5" fill="#7B2FBE" />
                          <path d="M0 2.5 C-4 2.5, -4 19.5, 0 19.5 Z" fill="#6620A0" />
                          <path d="M85 0 L85 18 L89 15 L93 18 L93 0 Z" fill="#C084FC" />
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Key Deliverables & Scope - 4 Card Rows */}
                  <div className="mb-14">
                    <h3 className="font-heading text-xl sm:text-2xl text-brand-dark font-semibold mb-6">
                      Key Deliverables &amp; Scope
                    </h3>

                    <div className="space-y-3.5">
                      {[
                        {
                          title: "ISBN application assistance",
                          icon: (
                            <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          ),
                        },
                        {
                          title: "Book formatting & layout design",
                          icon: (
                            <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                          ),
                        },
                        {
                          title: "Cover design support",
                          icon: (
                            <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          ),
                        },
                        {
                          title: "Publication and distribution support",
                          icon: (
                            <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          ),
                        },
                      ].map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="bg-white border border-[#EBE7F2] rounded-[18px] p-4 sm:p-5 flex items-center justify-between shadow-[0_2px_12px_rgba(123,47,190,0.04)] hover:shadow-[0_4px_20px_rgba(123,47,190,0.08)] hover:border-[#C084FC] transition-all group cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <span className="w-11 h-11 rounded-[13px] bg-[#F3EAFF] flex items-center justify-center flex-shrink-0">
                              {del.icon}
                            </span>
                            <span className="font-body font-semibold text-sm sm:text-base text-brand-dark">
                              {del.title}
                            </span>
                          </div>
                          <span className="text-brand-muted group-hover:text-[#7B2FBE] group-hover:translate-x-1 transition-all text-sm font-semibold">
                            →
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
                    SERVICE OVERVIEW
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-heading leading-tight mb-6" data-split="lines">
                    {isWritingEditing
                      ? "Comprehensive Academic Writing & Editing Support"
                      : `Comprehensive Support for ${service.title}`}
                  </h2>
                  <p className="text-brand-muted font-body text-base leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>

                  <div className="hairline-divider mb-8" data-line />

                  {/* Six Expandable Service Rows for Writing & Editing Excellence */}
                  {isWritingEditing ? (
                    <WritingEditingServices />
                  ) : (
                    <>
                      <h3 className="font-heading text-xl text-brand-dark mb-6">
                        Key Deliverables &amp; Scope
                      </h3>

                      <ul className="space-y-4 mb-10" role="list" data-stagger>
                        {service.items.map((item, index) => (
                          <li
                            key={index}
                            data-reveal="up"
                            className="p-4 bg-brand-bgGray border border-brand-borderHairline flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="w-1.5 h-1.5 bg-[#7B2FBE] flex-shrink-0" />
                              <span className="text-sm font-body text-brand-dark font-medium">
                                {item}
                              </span>
                            </div>
                            <span className="font-mono text-xs text-[#7B2FBE] font-semibold">
                              0{index + 1}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}

              {/* Enhanced Sections for ISBN Book Publication */}
              {isIsbn && <IsbnPublicationSections />}

              {/* Consultation / Direct Action */}
              <div className="bg-[#3F4056] text-white p-8 rounded-[20px] shadow-sm" data-reveal="up">
                <p className="text-xs uppercase tracking-eyebrow text-[#C084FC] font-medium mb-2">
                  START YOUR SUBMISSION
                </p>
                <h3 className="font-heading text-2xl text-white mb-3">
                  {isWritingEditing
                    ? "Need Professional Support for Your Research Manuscript?"
                    : `Have a manuscript ready for ${service.title}?`}
                </h3>
                <p className="text-white/80 font-body text-sm leading-relaxed mb-6 font-light">
                  {isWritingEditing
                    ? "Get in touch with our editorial team to discuss your manuscript requirements and receive preliminary guidance."
                    : "Get in touch with our editorial board to schedule a preliminary review and scope evaluation."}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact?type=consultation"
                    className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 group shadow-[0_0_15px_rgba(123,47,190,0.4)]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>BOOK A CONSULTANT</span>
                    <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </Link>
                  <InquiryButton
                    category={service.title}
                    className="inline-flex items-center justify-center px-7 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white font-bold text-xs uppercase tracking-wider rounded-lg backdrop-blur-sm transition-all duration-200 group cursor-pointer"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>INQUIRE NOW</span>
                    <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </InquiryButton>
                </div>
              </div>
            </div>

            {/* Right Column: Other Services Navigation */}
            <div className="lg:col-span-4" data-reveal="up">
              <div className="bg-white border border-[#EBE7F2] rounded-[24px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(123,47,190,0.06)] sticky top-28">
                <h3 className="font-heading text-sm font-semibold text-brand-dark uppercase tracking-wider mb-5">
                  ALL SERVICES
                </h3>
                <ul className="space-y-2.5 font-body text-sm">
                  {[
                    {
                      slug: "research-publication",
                      title: "Research Publication",
                      icon: (
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      ),
                    },
                    {
                      slug: "writing-and-editing",
                      title: "Writing & Editing Excellence",
                      icon: (
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      ),
                    },
                    {
                      slug: "isbn-book-publication",
                      title: "ISBN Book Publication",
                      icon: (
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      ),
                    },
                    {
                      slug: "editorial-support",
                      title: "Editorial Support",
                      isExternal: true,
                      href: "/contact",
                      icon: (
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                    },
                  ].map((item) => {
                    const isCurrent = item.slug === service.slug;
                    const href = item.href || `/services/${item.slug}`;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={href}
                          className={`flex items-center justify-between p-3.5 rounded-[14px] transition-all ${
                            isCurrent
                              ? "bg-[#7B2FBE] text-white shadow-[0_4px_16px_rgba(123,47,190,0.25)] font-semibold"
                              : "text-brand-dark hover:bg-[#FAF9FC] hover:text-[#7B2FBE]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={isCurrent ? "text-white" : "text-[#7B2FBE]"}>
                              {item.icon}
                            </span>
                            <span className="text-sm">{item.title}</span>
                          </div>
                          <span className={`text-xs ${isCurrent ? "text-white" : "text-brand-muted"}`}>
                            ›
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-t border-[#EBE7F2] pt-6 mt-6">
                  <div className="space-y-2.5">
                    <h4 className="font-heading text-xs font-bold text-brand-dark uppercase tracking-wider">
                      EDITORIAL SUPPORT
                    </h4>
                    <p className="text-xs text-brand-muted font-body leading-relaxed">
                      {isWritingEditing
                        ? "Have questions regarding academic writing, editing, or manuscript preparation? Our editorial team is available to assist you with your requirements."
                        : "Have questions regarding journal scope or indexing? Our editors are available 24x7 for author inquiries."}
                    </p>
                    <Link
                      href="/contact"
                      className="text-[#7B2FBE] font-semibold hover:text-[#6620A0] hover:underline text-xs inline-flex items-center gap-1 pt-1"
                    >
                      Contact Editorial Office →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        description={
          isWritingEditing
            ? "Get expert guidance for your manuscript, from initial preparation to final submission."
            : undefined
        }
      />
    </main>
  );
}
