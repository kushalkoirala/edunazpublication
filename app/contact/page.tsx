import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { COMPANY_INFO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Edunaaz Publication (OPC) Private Limited. Registered office address, phone, email, and manuscript enquiry form.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Contact Our Editorial Office"
        accentWord="Editorial"
        intro="Get expert guidance for your manuscript, from first draft to submission."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Office & Communication Channels */}
            <div className="lg:col-span-5 space-y-8" data-reveal="up">
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
                  COMMUNICATION CHANNELS
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4" data-split="lines">
                  Registered <span className="text-[#7B2FBE] font-normal">Headquarters</span>
                </h2>
                <p className="text-sm font-body text-brand-muted leading-relaxed">
                  Our editorial and customer assistance desks are available to address author queries, journal scope questions, and institutional partnerships.
                </p>
              </div>

              <div className="hairline-divider" data-line />

              <div className="space-y-6 text-xs sm:text-sm font-body" data-stagger>
                {/* Registered Address */}
                <div data-reveal="up">
                  <h3 className="font-heading text-sm text-brand-dark uppercase tracking-wider mb-2">
                    Registered Office
                  </h3>
                  <address className="not-italic text-brand-muted leading-relaxed">
                    {COMPANY_INFO.address}
                  </address>
                </div>

                {/* Email */}
                <div data-reveal="up">
                  <h3 className="font-heading text-sm text-brand-dark uppercase tracking-wider mb-2">
                    Email Correspondence
                  </h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-brand-dark hover:text-[#7B2FBE] transition-colors font-medium block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>

                {/* Phone */}
                <div data-reveal="up">
                  <h3 className="font-heading text-sm text-brand-dark uppercase tracking-wider mb-2">
                    Telephone
                  </h3>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-brand-dark hover:text-[#7B2FBE] transition-colors font-medium block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                {/* WhatsApp */}
                <div data-reveal="up">
                  <h3 className="font-heading text-sm text-brand-dark uppercase tracking-wider mb-2">
                    Instant Messaging
                  </h3>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-medium inline-flex items-center gap-1.5"
                  >
                    Chat on WhatsApp: {COMPANY_INFO.phone}
                  </a>
                </div>

                {/* Registration Details */}
                <div className="pt-2" data-reveal="up">
                  <div className="p-4 bg-brand-bgGray border border-brand-borderHairline text-xs text-brand-muted leading-relaxed">
                    <p className="font-mono text-brand-dark font-medium mb-1">
                      CIN: {COMPANY_INFO.cin}
                    </p>
                    <p>{COMPANY_INFO.mcaRegistration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7" data-reveal="up">
              <div className="bg-white border border-brand-borderHairline p-8 sm:p-10 shadow-none">
                <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
                  MANUSCRIPT INQUIRY
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-2" data-split="lines">
                  Send Your <span className="text-[#7B2FBE] font-normal">Manuscript</span> Details
                </h2>
                <p className="text-xs text-brand-muted font-body mb-8">
                  Fill in your academic and manuscript details below. An editor will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
