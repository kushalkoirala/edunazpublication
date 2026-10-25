import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { JOURNALS_DATA } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academic Journals",
  description:
    "Explore peer-reviewed and open-access journals published by Edunaaz Publication covering engineering, management, applied economics, and interdisciplinary sciences.",
};

export default function JournalsPage() {
  return (
    <main>
      <PageHero
        eyebrow="OUR JOURNALS"
        title="Featured Academic Journals"
        accentWord="Academic"
        intro="Bi-annual multidisciplinary and open-access peer-reviewed publications."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Journals" },
        ]}
      />

      {/* Journals Listing Grid */}
      <section className="py-24 bg-brand-bgGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16" data-reveal="up">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              PUBLICATIONS
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight" data-split="lines">
              Peer-Reviewed <span className="text-[#7B2FBE] font-normal">Scholarly</span> Outlets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-stagger>
            {JOURNALS_DATA.map((journal) => (
              <div
                key={journal.slug}
                className="bg-white p-8 border border-brand-borderHairline flex flex-col justify-between"
                data-reveal="up"
                data-hover="journal-card"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#7B2FBE] font-semibold block mb-2">
                    {journal.badge}
                  </span>
                  <h3 className="font-heading text-xl text-brand-dark mb-2 leading-snug">
                    <Link
                      href={`/journals/${journal.slug}`}
                      className="hover:text-[#7B2FBE] transition-colors"
                    >
                      {journal.title}
                    </Link>
                  </h3>
                  <p className="text-xs font-mono text-brand-muted mb-4">
                    ISSN: {journal.issn}
                  </p>
                  <div className="hairline-divider my-4" data-line />
                  <p className="text-xs text-brand-muted leading-relaxed font-body">
                    {journal.description}
                  </p>
                </div>

                <div className="pt-8 mt-auto flex flex-col space-y-3">
                  <Link
                    className="text-xs font-semibold uppercase tracking-wider text-[#7B2FBE] hover:text-brand-dark transition-colors flex items-center group"
                    href={`/journals/${journal.slug}`}
                  >
                    VIEW JOURNAL DETAILS{" "}
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    className="text-xs font-semibold uppercase tracking-wider text-brand-muted hover:text-[#7B2FBE] transition-colors flex items-center group"
                    href="/contact"
                  >
                    SUBMIT ARTICLE{" "}
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
