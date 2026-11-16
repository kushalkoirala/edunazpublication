import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { JOURNALS_DATA, getJournalBySlug, PLACEHOLDERS } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return JOURNALS_DATA.map((journal) => ({
    slug: journal.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const journal = getJournalBySlug(slug);

  if (!journal) {
    return {
      title: "Journal Not Found",
    };
  }

  return {
    title: journal.title,
    description: journal.description,
  };
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const journal = getJournalBySlug(slug);

  if (!journal) {
    notFound();
  }

  return (
    <main>
      <PageHero
        eyebrow={journal.badge}
        title={journal.title}
        accentWord={journal.heroAccentWord}
        intro={journal.issn ? `ISSN: ${journal.issn} | Publication Frequency: ${journal.frequency}` : `Publication Frequency: ${journal.frequency}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Journals", href: "/journals" },
          { label: journal.title },
        ]}
      />

      {/* Main Structural Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Section 1: About the Journal */}
              <div data-reveal="up">
                <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
                  OVERVIEW
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4" data-split="lines">
                  About the Journal
                </h2>
                <div className="hairline-divider mb-6" data-line />
                <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed mb-4">
                  {journal.description}
                </p>
                <div className="bg-brand-bgGray p-4 border border-brand-borderHairline flex flex-wrap gap-6 text-xs font-body text-brand-dark">
                  <div>
                    <span className="text-brand-muted uppercase tracking-wider block mb-1">
                      Indexing
                    </span>
                    <span className="font-semibold text-[#7B2FBE]">
                      {journal.indexing || journal.badge}
                    </span>
                  </div>
                  {journal.citeScore && (
                    <div>
                      <span className="text-brand-muted uppercase tracking-wider block mb-1">
                        CiteScore
                      </span>
                      <span className="font-semibold text-brand-dark">{journal.citeScore}</span>
                    </div>
                  )}
                  {journal.snip && (
                    <div>
                      <span className="text-brand-muted uppercase tracking-wider block mb-1">
                        SNIP
                      </span>
                      <span className="font-semibold text-brand-dark">{journal.snip}</span>
                    </div>
                  )}
                  {journal.sjr && (
                    <div>
                      <span className="text-brand-muted uppercase tracking-wider block mb-1">
                        SJR
                      </span>
                      <span className="font-semibold text-brand-dark">{journal.sjr}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-brand-muted uppercase tracking-wider block mb-1">
                      Frequency
                    </span>
                    <span className="font-medium">{journal.frequency}</span>
                  </div>
                  {journal.publisher && (
                    <div>
                      <span className="text-brand-muted uppercase tracking-wider block mb-1">
                        Publisher
                      </span>
                      <span className="font-medium">{journal.publisher}</span>
                    </div>
                  )}
                  {journal.issn && (
                    <div>
                      <span className="text-brand-muted uppercase tracking-wider block mb-1">
                        ISSN
                      </span>
                      <span className="font-mono">{journal.issn}</span>
                    </div>
                  )}
                  {journal.websiteUrl && (
                    <div>
                      <span className="text-brand-muted uppercase tracking-wider block mb-1">
                        Journal Website
                      </span>
                      <a
                        href={journal.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#7B2FBE] hover:text-[#6620A0] hover:underline transition-colors"
                      >
                        Visit Journal ↗
                      </a>
                    </div>
                  )}
                </div>
                {/* Indexed In (detailed list) */}
                {journal.indexedIn && (
                  <div className="mt-4 bg-brand-bgGray p-4 border border-brand-borderHairline text-xs font-body text-brand-dark">
                    <span className="text-brand-muted uppercase tracking-wider block mb-1">
                      Indexed In
                    </span>
                    <span className="leading-relaxed">{journal.indexedIn}</span>
                  </div>
                )}
                {/* Discrepancy / data note */}
                {journal.note && (
                  <div className="mt-4 flex gap-3 bg-amber-50 border border-amber-200 p-4">
                    <svg
                      className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs text-amber-700 leading-relaxed font-body italic">
                      {journal.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Section 2: Scope */}
              <div data-reveal="up">
                <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
                  AIMS &amp; FOCUS
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4">
                  Aims &amp; Scope
                </h2>
                <div className="hairline-divider mb-6" data-line />
                <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed">
                  {journal.scope}
                </p>
              </div>

              {/* Section 3: Author Guidelines */}
              <div data-reveal="up">
                <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
                  SUBMISSION INSTRUCTIONS
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4">
                  Author Guidelines
                </h2>
                <div className="hairline-divider mb-6" data-line />
                <div className="p-6 bg-brand-bgGray border border-brand-borderHairline">
                  {/* TODO: Author guidelines to be provided by client */}
                  <p className="text-sm font-body text-brand-muted italic">
                    {PLACEHOLDERS.JOURNAL_GUIDELINES}
                  </p>
                </div>
              </div>

              {/* Section 4: Editorial Board */}
              <div data-reveal="up">
                <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
                  GOVERNANCE
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4">
                  Editorial Board
                </h2>
                <div className="hairline-divider mb-6" data-line />
                <div className="p-6 bg-brand-bgGray border border-brand-borderHairline">
                  {/* TODO: Editorial board list to be provided by client */}
                  <p className="text-sm font-body text-brand-muted italic">
                    {PLACEHOLDERS.JOURNAL_EDITORIAL_BOARD}
                  </p>
                </div>
              </div>

              {/* Section 5: Submit Article */}
              <div className="bg-[#3F4056] text-white p-8" data-reveal="up">
                <p className="text-xs uppercase tracking-eyebrow text-[#C084FC] font-medium mb-2">
                  MANUSCRIPT SUBMISSION
                </p>
                <h3 className="font-heading text-2xl text-white mb-3">
                  Submit to {journal.title}
                </h3>
                <p className="text-white/80 font-body text-sm leading-relaxed mb-6 font-light">
                  Authors interested in submitting their research to this journal can transmit their manuscript details directly to our editorial liaison team.
                </p>
                <div className="inline-flex" data-magnetic>
                  <Link
                    href="/contact"
                    className="inline-flex items-stretch bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] transition-all duration-200 text-white rounded-lg overflow-hidden shadow-[0_0_15px_rgba(123,47,190,0.4)] group"
                  >
                    <span className="px-7 py-3 text-xs font-semibold uppercase tracking-wider flex items-center">
                      SUBMIT ARTICLE
                    </span>
                    <span className="w-10 bg-white/10 border-l border-white/20 flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M9 5l7 7-7 7"
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar: All Journals */}
            <div className="lg:col-span-4" data-reveal="up">
              <div className="bg-brand-bgGray border border-brand-borderHairline p-6 lg:p-8">
                <h3 className="font-heading text-lg text-brand-dark uppercase tracking-wider mb-4 border-b border-brand-borderHairline pb-3">
                  All Journals
                </h3>
                <ul className="space-y-4 font-body text-sm" data-stagger>
                  {JOURNALS_DATA.map((j) => {
                    const isCurrent = j.slug === journal.slug;
                    return (
                      <li key={j.slug} data-reveal="up">
                        <Link
                          href={`/journals/${j.slug}`}
                          className={`block p-3 transition-colors ${
                            isCurrent
                              ? "bg-white border-l-2 border-[#7B2FBE] text-brand-dark font-medium shadow-none"
                              : "text-brand-muted hover:text-brand-dark hover:bg-white"
                          }`}
                        >
                          <span className="text-[10px] uppercase tracking-wider text-[#7B2FBE] font-semibold block mb-1">
                            {j.badge}
                          </span>
                          <span className="leading-snug block">{j.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="hairline-divider my-6" data-line />

                <div className="text-xs text-brand-muted space-y-2">
                  <p className="font-semibold text-brand-dark uppercase tracking-wider">
                    Peer Review Policy
                  </p>
                  <p className="leading-relaxed">
                    All manuscripts submitted undergo rigorous peer review and similarity auditing prior to editorial acceptance.
                  </p>
                  <Link
                    href="/contact"
                    className="text-[#7B2FBE] font-semibold hover:text-[#6620A0] hover:underline inline-block pt-1"
                  >
                    Contact Editorial Liaison →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
