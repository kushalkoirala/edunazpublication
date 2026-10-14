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
        intro={`ISSN: ${journal.issn} | Publication Frequency: ${journal.frequency}`}
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
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
                  OVERVIEW
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4">
                  About the Journal
                </h2>
                <div className="hairline-divider mb-6" />
                <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed mb-4">
                  {journal.description}
                </p>
                <div className="bg-brand-bgGray p-4 border border-brand-borderHairline flex flex-wrap gap-6 text-xs font-body text-brand-dark">
                  <div>
                    <span className="text-brand-muted uppercase tracking-wider block mb-1">
                      Status
                    </span>
                    <span className="font-semibold text-brand-gold">{journal.badge}</span>
                  </div>
                  <div>
                    <span className="text-brand-muted uppercase tracking-wider block mb-1">
                      Frequency
                    </span>
                    <span className="font-medium">{journal.frequency}</span>
                  </div>
                  <div>
                    <span className="text-brand-muted uppercase tracking-wider block mb-1">
                      ISSN
                    </span>
                    <span className="font-mono">{journal.issn}</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Scope */}
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
                  AIMS &amp; FOCUS
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4">
                  Aims &amp; Scope
                </h2>
                <div className="hairline-divider mb-6" />
                <p className="text-brand-muted font-body text-sm sm:text-base leading-relaxed">
                  {journal.scope}
                </p>
              </div>

              {/* Section 3: Author Guidelines */}
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
                  SUBMISSION INSTRUCTIONS
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4">
                  Author Guidelines
                </h2>
                <div className="hairline-divider mb-6" />
                <div className="p-6 bg-brand-bgGray border border-brand-borderHairline">
                  {/* TODO: Author guidelines to be provided by client */}
                  <p className="text-sm font-body text-brand-muted italic">
                    {PLACEHOLDERS.JOURNAL_GUIDELINES}
                  </p>
                </div>
              </div>

              {/* Section 4: Editorial Board */}
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
                  GOVERNANCE
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4">
                  Editorial Board
                </h2>
                <div className="hairline-divider mb-6" />
                <div className="p-6 bg-brand-bgGray border border-brand-borderHairline">
                  {/* TODO: Editorial board list to be provided by client */}
                  <p className="text-sm font-body text-brand-muted italic">
                    {PLACEHOLDERS.JOURNAL_EDITORIAL_BOARD}
                  </p>
                </div>
              </div>

              {/* Section 5: Submit Article */}
              <div className="bg-[#3F4056] text-white p-8">
                <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-2">
                  MANUSCRIPT SUBMISSION
                </p>
                <h3 className="font-heading text-2xl text-white mb-3">
                  Submit to {journal.title}
                </h3>
                <p className="text-white/80 font-body text-sm leading-relaxed mb-6 font-light">
                  Authors interested in submitting their research to this journal can transmit their manuscript details directly to our editorial liaison team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-stretch bg-[#D9A93F] hover:bg-[#C4942B] transition-colors duration-150 text-brand-dark group shadow-none"
                >
                  <span className="px-7 py-3 text-xs font-semibold uppercase tracking-wider flex items-center">
                    SUBMIT ARTICLE
                  </span>
                  <span className="w-10 bg-white border-l border-[#D9A93F] flex items-center justify-center text-brand-dark transition-transform duration-200 group-hover:translate-x-0.5">
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

            {/* Right Sidebar: All Journals */}
            <div className="lg:col-span-4">
              <div className="bg-brand-bgGray border border-brand-borderHairline p-6 lg:p-8">
                <h3 className="font-heading text-lg text-brand-dark uppercase tracking-wider mb-4 border-b border-brand-borderHairline pb-3">
                  All Journals
                </h3>
                <ul className="space-y-4 font-body text-sm">
                  {JOURNALS_DATA.map((j) => {
                    const isCurrent = j.slug === journal.slug;
                    return (
                      <li key={j.slug}>
                        <Link
                          href={`/journals/${j.slug}`}
                          className={`block p-3 transition-colors ${
                            isCurrent
                              ? "bg-white border-l-2 border-brand-gold text-brand-dark font-medium shadow-none"
                              : "text-brand-muted hover:text-brand-dark hover:bg-white"
                          }`}
                        >
                          <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold block mb-1">
                            {j.badge}
                          </span>
                          <span className="leading-snug block">{j.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="hairline-divider my-6" />

                <div className="text-xs text-brand-muted space-y-2">
                  <p className="font-semibold text-brand-dark uppercase tracking-wider">
                    Peer Review Policy
                  </p>
                  <p className="leading-relaxed">
                    All manuscripts submitted undergo rigorous peer review and similarity auditing prior to editorial acceptance.
                  </p>
                  <Link
                    href="/contact"
                    className="text-brand-gold font-semibold hover:underline inline-block pt-1"
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
