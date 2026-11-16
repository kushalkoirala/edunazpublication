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
        eyebrow="JOURNALS"
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
                  {/* Badge */}
                  <span className="text-[10px] uppercase tracking-widest text-[#7B2FBE] font-semibold block mb-2">
                    {journal.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-xl text-brand-dark mb-2 leading-snug">
                    <Link
                      href={`/journals/${journal.slug}`}
                      className="hover:text-[#7B2FBE] transition-colors"
                    >
                      {journal.title}
                    </Link>
                  </h3>

                  {/* ISSN */}
                  {journal.issn && (
                    <p className="text-xs font-mono text-brand-muted mb-2">
                      {journal.issn}
                    </p>
                  )}

                  {/* Publication details row: Frequency + Indexing */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                    {journal.frequency && (
                      <p className="text-xs font-medium text-brand-dark">
                        Frequency:{" "}
                        <span className="font-semibold text-[#7B2FBE]">{journal.frequency}</span>
                      </p>
                    )}
                    {journal.indexing && (
                      <p className="text-xs font-medium text-brand-dark">
                        Indexing:{" "}
                        <span className="font-semibold text-[#7B2FBE]">{journal.indexing}</span>
                      </p>
                    )}
                  </div>

                  {/* Metrics row: CiteScore + SNIP + SJR */}
                  {(journal.citeScore || journal.snip || journal.sjr) && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                      {journal.citeScore && (
                        <p className="text-xs font-medium text-brand-dark">
                          CiteScore:{" "}
                          <span className="font-semibold text-brand-dark">{journal.citeScore}</span>
                        </p>
                      )}
                      {journal.snip && (
                        <p className="text-xs font-medium text-brand-dark">
                          SNIP:{" "}
                          <span className="font-semibold text-brand-dark">{journal.snip}</span>
                        </p>
                      )}
                      {journal.sjr && (
                        <p className="text-xs font-medium text-brand-dark">
                          SJR:{" "}
                          <span className="font-semibold text-brand-dark">{journal.sjr}</span>
                        </p>
                      )}
                    </div>
                  )}

                  <div className="hairline-divider my-4" data-line />

                  {/* Description */}
                  <p className="text-xs text-brand-muted leading-relaxed font-body mb-3">
                    {journal.description}
                  </p>

                  {/* Subject Area */}
                  {journal.scope && (
                    <div className="pt-2">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-[#7B2FBE] mb-1">
                        Subject Area:
                      </p>
                      <p className="text-xs text-brand-muted leading-relaxed font-body">
                        {journal.scope}
                      </p>
                    </div>
                  )}

                  {/* Indexed In (detailed, if separate from indexing) */}
                  {journal.indexedIn && (
                    <div className="pt-2">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-[#7B2FBE] mb-1">
                        Indexed In:
                      </p>
                      <p className="text-xs text-brand-muted leading-relaxed font-body">
                        {journal.indexedIn}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Links */}
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
