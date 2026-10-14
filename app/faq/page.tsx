import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about manuscript acceptance policies, turnaround times, similarity checking, and review support at Edunaaz Publication.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="KNOWLEDGE BASE"
        title="Frequently Asked Questions"
        accentWord="Questions"
        intro="Answers to common inquiries regarding manuscript submission, editorial cycles, and indexing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight">
              Common <span className="text-brand-gold font-normal">Questions</span>
            </h2>
            <p className="text-brand-muted font-body text-sm mt-3 leading-relaxed">
              Transparent guidance for scholars, authors, and institutional partners.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
