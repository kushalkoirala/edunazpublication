import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { PLACEHOLDERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for publishing services at Edunaaz Publication.",
  robots: {
    index: false,
    follow: false,
  },
};

const termsSections = [
  {
    number: "01",
    title: "Acceptance of Terms",
  },
  {
    number: "02",
    title: "Publishing Services & Scope of Guidance",
  },
  {
    number: "03",
    title: "Manuscript Submission & Author Obligations",
  },
  {
    number: "04",
    title: "Intellectual Property Rights & Copyright",
  },
  {
    number: "05",
    title: "Peer Review Independence & Acceptance Disclaimers",
  },
  {
    number: "06",
    title: "Fees, Invoicing & Refund Policies",
  },
  {
    number: "07",
    title: "Limitation of Liability",
  },
  {
    number: "08",
    title: "Governing Law & Jurisdiction",
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="LEGAL POLICIES"
        title="Terms & Conditions"
        accentWord="Conditions"
        intro="General terms and agreements governing author services and publishing support."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last updated notice */}
          <div className="border-b border-brand-borderHairline pb-4 mb-10 text-xs font-mono text-brand-muted">
            Last updated: {PLACEHOLDERS.LEGAL_LAST_UPDATED}
          </div>

          <div className="space-y-12">
            {termsSections.map((sec) => (
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
                  {/* TODO: Client to provide legal terms */}
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
