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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SERVICES_DATA.map((service) => {
              const isMiddle = service.slug === "writing-and-editing";

              return (
                <article
                  key={service.slug}
                  className={`p-6 lg:p-10 flex flex-col justify-between h-full text-left rounded-none shadow-none ${
                    isMiddle
                      ? "bg-[#3F4056] text-white lg:-translate-y-6 lg:h-[calc(100%+48px)] relative z-10"
                      : "bg-[#F3F3F3] border border-[#E5E5E5] text-brand-dark"
                  }`}
                >
                  <div>
                    {/* Outline box with icon */}
                    <div
                      className={`w-12 h-12 flex items-center justify-center flex-shrink-0 mb-6 rounded-none border ${
                        isMiddle
                          ? "border-[#D9A93F] text-[#D9A93F]"
                          : "border-[#3F4056] text-[#3F4056]"
                      }`}
                    >
                      {service.iconName === "publication" && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                      {service.iconName === "editing" && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                      {service.iconName === "isbn" && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15zM8 7h8m-8 4h8"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                    </div>

                    <h2 className="font-heading text-[28px] leading-snug mb-4">
                      {service.title}
                    </h2>

                    <div
                      className={`h-[1px] w-full mb-4 ${
                        isMiddle ? "bg-white/20" : "bg-[#E5E5E5]"
                      }`}
                    />

                    <p
                      className={`text-sm font-body leading-relaxed mb-6 ${
                        isMiddle ? "text-white/80" : "text-brand-muted"
                      }`}
                    >
                      {service.shortDescription}
                    </p>

                    <ul className="divide-y-0" role="list">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className={`py-3.5 px-2 -mx-2 flex items-center border-b transition-colors duration-200 ${
                            isMiddle
                              ? "border-white/20 hover:bg-white/[0.08] text-white"
                              : "border-[#E5E5E5] hover:bg-white text-brand-dark"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0 mr-3 inline-block rounded-none" />
                          <span className="text-sm font-body font-normal">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`inline-flex items-center text-[12px] uppercase tracking-[0.1em] font-medium font-body hover:underline hover:decoration-[#D9A93F] hover:decoration-1 underline-offset-4 transition-colors duration-200 ${
                        isMiddle ? "text-white" : "text-brand-dark"
                      }`}
                    >
                      View Service Details{" "}
                      <span className={`ml-1.5 font-mono ${isMiddle ? "text-[#D9A93F]" : ""}`}>
                        →
                      </span>
                    </Link>
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
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight">
              Our <span className="text-brand-gold font-normal">Publication</span> Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-brand-borderHairline border-t border-b border-brand-borderHairline bg-white">
            <div className="py-10 px-6 text-left flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl text-brand-gold block mb-4">01</span>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Submit</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Authors transmit initial draft, data tables, and specific scope requirements.
                </p>
              </div>
            </div>
            <div className="py-10 px-6 text-left flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl text-brand-gold block mb-4">02</span>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Review</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Preliminary evaluation for novelty, citation accuracy, and plagiarism checks.
                </p>
              </div>
            </div>
            <div className="py-10 px-6 text-left flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl text-brand-gold block mb-4">03</span>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Edit &amp; Format</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Academic proofreading, LaTeX/Word layout, and journal style formatting.
                </p>
              </div>
            </div>
            <div className="py-10 px-6 text-left flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl text-brand-gold block mb-4">04</span>
                <h3 className="font-heading text-lg text-brand-dark mb-2">Journal Selection</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  Targeting appropriate UGC CARE, Scopus, or peer-reviewed international avenues.
                </p>
              </div>
            </div>
            <div className="py-10 px-6 text-left flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl text-brand-gold block mb-4">05</span>
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
