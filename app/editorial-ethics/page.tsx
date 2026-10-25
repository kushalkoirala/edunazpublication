import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { PLACEHOLDERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Editorial Ethics",
  description: "Editorial ethics, peer review rigor, and publication standards of Edunaaz Publication.",
  robots: {
    index: false,
    follow: false,
  },
};

const ethicsSections = [
  {
    number: "01",
    title: "Editorial Independence & Governance",
  },
  {
    number: "02",
    title: "Blind Peer Review Integrity",
  },
  {
    number: "03",
    title: "Plagiarism, Similarity & Originality Auditing",
  },
  {
    number: "04",
    title: "Authorship, Contributorship & Acknowledgments",
  },
  {
    number: "05",
    title: "Conflicts of Interest & Financial Disclosures",
  },
  {
    number: "06",
    title: "Data Integrity, Reproducibility & Fabrication",
  },
  {
    number: "07",
    title: "Post-Publication Corrections, Errata & Retractions",
  },
  {
    number: "08",
    title: "Whistleblowing & Academic Misconduct Inquiries",
  },
];

export default function EditorialEthicsPage() {
  return (
    <main>
      <PageHero
        eyebrow="PUBLISHING STANDARDS"
        title="Editorial Ethics & Standards"
        accentWord="Ethics"
        intro="Principles governing peer review rigor, originality verification, and editorial independence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Editorial Ethics" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last updated notice */}
          <div className="border-b border-brand-borderHairline pb-4 mb-10 text-xs font-mono text-brand-muted">
            Last updated: {PLACEHOLDERS.LEGAL_LAST_UPDATED}
          </div>

          <div className="space-y-12">
            {ethicsSections.map((sec) => (
              <div key={sec.number} className="space-y-3">
                <div className="flex items-baseline space-x-3">
                  <span className="font-mono text-xs text-brand-purple font-semibold">
                    {sec.number}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl text-brand-dark">
                    {sec.title}
                  </h2>
                </div>
                <div className="p-6 bg-brand-bgGray border border-brand-borderHairline">
                  {/* TODO: Client to provide editorial ethics content */}
                  <p className="text-sm font-body text-brand-muted italic">
                    {PLACEHOLDERS.LEGAL_BODY_CONTENT}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
