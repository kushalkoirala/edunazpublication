import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { PLACEHOLDERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection principles of Edunaaz Publication.",
  robots: {
    index: false,
    follow: false,
  },
};

const privacySections = [
  {
    number: "01",
    title: "Information We Collect",
  },
  {
    number: "02",
    title: "How We Use Author Information",
  },
  {
    number: "03",
    title: "Manuscript Data & Academic Confidentiality",
  },
  {
    number: "04",
    title: "Data Retention & Storage Standards",
  },
  {
    number: "05",
    title: "Third-Party Disclosure & Peer Reviewers",
  },
  {
    number: "06",
    title: "Cookies & Website Analytics",
  },
  {
    number: "07",
    title: "Author Rights, Data Access & Deletion",
  },
  {
    number: "08",
    title: "Privacy Inquiries & Data Protection Contact",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="LEGAL POLICIES"
        title="Privacy Policy"
        accentWord="Privacy"
        intro="How we collect, protect, and handle scholar data and research manuscripts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last updated notice */}
          <div className="border-b border-brand-borderHairline pb-4 mb-10 text-xs font-mono text-brand-muted">
            Last updated: {PLACEHOLDERS.LEGAL_LAST_UPDATED}
          </div>

          <div className="space-y-12">
            {privacySections.map((sec) => (
              <div key={sec.number} className="space-y-3">
                <div className="flex items-baseline space-x-3">
                  <span className="font-mono text-xs text-brand-gold font-semibold">
                    {sec.number}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl text-brand-dark">
                    {sec.title}
                  </h2>
                </div>
                <div className="p-6 bg-brand-bgGray border border-brand-borderHairline">
                  {/* TODO: Client to provide privacy policy */}
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
