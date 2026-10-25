import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { SERVICES_DATA } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Writing, editing and publication support for scholars, researchers and professionals. Explore our research publication, editing, and book publication services.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="WHAT WE DO"
        title="Services for Every Stage of Your Research"
        accentWord="Research"
        intro="Writing, editing and publication support for scholars, researchers and professionals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-7 items-stretch" data-stagger>
            {SERVICES_DATA.map((service, index) => {
              const isMiddle = service.slug === "writing-and-editing";
              const numberStr = `0${index + 1}`;

              return (
                <article
                  key={service.slug}
                  data-reveal={isMiddle ? "clip-up" : "up"}
                  className={`p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 rounded-[24px] ${
                    isMiddle
                      ? "bg-[#0B1E36] border border-[#142A4A] text-white shadow-[0_24px_55px_rgba(11,30,54,0.30)] lg:-translate-y-2 hover:-translate-y-3"
                      : "bg-[#FAF8F5] border border-[#EFEAE2] text-brand-dark shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                  }`}
                  style={{ borderRadius: "24px" }}
                >
                  {/* Watermark Number */}
                  <span
                    className={`font-heading text-8xl sm:text-9xl font-normal leading-none absolute top-3 right-5 pointer-events-none select-none z-0 ${
                      isMiddle ? "text-[#142944]" : "text-[#EDE4D5]/70"
                    }`}
                    aria-hidden="true"
                  >
                    {numberStr}
                  </span>

                  <div className="relative z-10">
                    {/* Outline icon badge */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 border ${
                        isMiddle
                          ? "border-[#C084FC]/70 text-[#C084FC] bg-white/5 backdrop-blur-sm"
                          : "border-[#7B2FBE]/60 text-[#7B2FBE] bg-white/60 backdrop-blur-sm"
                      }`}
                      style={{ borderRadius: "9999px" }}
                    >
                      {service.iconName === "publication" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      )}
                      {service.iconName === "editing" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      )}
                      {service.iconName === "isbn" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Eyebrow */}
                    <span
                      className={`text-[11px] font-bold tracking-[0.2em] uppercase mb-2.5 block ${
                        isMiddle ? "text-[#C084FC]" : "text-[#7B2FBE]"
                      }`}
                    >
                      — {service.slug === "isbn-book-publication" ? "ISBN BOOK PUBLICATION" : service.slug.replace("-", " ").toUpperCase()}
                    </span>

                    <h2 className="font-heading text-3xl sm:text-[32px] leading-tight mb-4" data-split="lines">
                      {isMiddle ? (
                        <>
                          Writing &amp;<br />
                          <span className="text-[#C084FC]">Editing Excellence</span>
                        </>
                      ) : (
                        service.title
                      )}
                    </h2>

                    <p
                      className={`text-xs sm:text-[13px] font-body leading-relaxed mb-6 ${
                        isMiddle ? "text-white/70" : "text-brand-muted"
                      }`}
                    >
                      {service.shortDescription}
                    </p>

                    <ul className="space-y-0" role="list">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className={`py-3 flex items-center gap-3.5 border-b ${
                            isMiddle ? "border-white/10" : "border-[#EBE3D6]"
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isMiddle
                                ? "border border-white/20 text-[#C084FC]"
                                : "bg-[#7B2FBE]/10 text-[#7B2FBE]"
                            }`}
                            style={{ borderRadius: "9999px" }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span
                            className={`text-xs sm:text-[13px] font-body font-medium ${
                              isMiddle ? "text-white/90" : "text-brand-dark"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-8 mt-auto relative z-10">
                    {isMiddle ? (
                      <Link
                        href={`/services/${service.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(123,47,190,0.4)] hover:shadow-[0_0_25px_rgba(123,47,190,0.6)] transition-all duration-200 group"
                        style={{ borderRadius: "12px" }}
                      >
                        <span>DISCOVER THIS SERVICE</span>
                        <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
                      </Link>
                    ) : (
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7B2FBE] hover:text-[#6620A0] transition-colors group"
                      >
                        <span>DISCOVER THIS SERVICE</span>
                        <span className="transition-transform group-hover:translate-x-1 font-mono">→</span>
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publication Process Section */}
      <section className="py-24 bg-brand-bgGray border-t border-brand-borderHairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16" data-reveal="up">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight" data-split="lines">
              Our <span className="text-[#7B2FBE] font-normal">Publication</span> Process
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-brand-borderHairline border-t border-b border-brand-borderHairline bg-white"
            data-stagger
          >
            <div className="py-10 px-6 text-left flex flex-col justify-between" data-reveal="up">
              <div>
                <div className="overflow-hidden mb-4">
                  <span className="font-heading text-4xl text-[#7B2FBE] block" data-roll>01</span>
                </div>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Submit</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Authors transmit initial draft, data tables, and specific scope requirements.
                </p>
              </div>
            </div>
            <div className="py-10 px-6 text-left flex flex-col justify-between" data-reveal="up">
              <div>
                <div className="overflow-hidden mb-4">
                  <span className="font-heading text-4xl text-[#7B2FBE] block" data-roll>02</span>
                </div>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Review</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Preliminary evaluation for novelty, citation accuracy, and plagiarism checks.
                </p>
              </div>
            </div>
            <div className="py-10 px-6 text-left flex flex-col justify-between" data-reveal="up">
              <div>
                <div className="overflow-hidden mb-4">
                  <span className="font-heading text-4xl text-[#7B2FBE] block" data-roll>03</span>
                </div>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Edit &amp; Format</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Academic proofreading, LaTeX/Word layout, and journal style formatting.
                </p>
              </div>
            </div>
            <div className="py-10 px-6 text-left flex flex-col justify-between" data-reveal="up">
              <div>
                <div className="overflow-hidden mb-4">
                  <span className="font-heading text-4xl text-[#7B2FBE] block" data-roll>04</span>
                </div>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Journal Selection</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Targeting appropriate UGC CARE, Scopus, or peer-reviewed international avenues.
                </p>
              </div>
            </div>
            <div className="py-10 px-6 text-left flex flex-col justify-between" data-reveal="up">
              <div>
                <div className="overflow-hidden mb-4">
                  <span className="font-heading text-4xl text-[#7B2FBE] block" data-roll>05</span>
                </div>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Submission &amp; Follow-up</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Submission portal assistance, tracking, and peer review revision management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
