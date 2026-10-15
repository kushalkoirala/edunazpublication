import FaqAccordion from "@/components/ui/FaqAccordion";

export default function Faq() {
  return (
    /* BEGIN: FAQAccordionSection */
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p data-reveal="up" className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
            FAQ
          </p>
          <h2 data-split="lines" className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight">
            Common <span className="text-brand-gold font-normal">Questions</span>
          </h2>
        </div>
        {/* Accordion Container */}
        <FaqAccordion />
      </div>
    </section>
    /* END: FAQAccordionSection */
  );
}
