import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the terms, service policies and refund conditions for Edunaaz Publication's research publication assistance services.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="LEGAL INFORMATION"
        title="Terms & Conditions"
        accentWord="Conditions"
        intro="Please review our terms, service policies and refund conditions carefully before availing services from Edunaaz Publication."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── PRIVACY POLICY ── */}
          <div className="mb-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7B2FBE] font-semibold font-body mb-2">
                Section 01
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-brand-dark leading-snug">
                Terms &amp; <span className="text-[#7B2FBE] font-normal">Policies</span>
              </h2>
              <div className="w-12 h-[2px] bg-[#7B2FBE] mt-4" />
            </div>

            <p className="font-body text-sm text-brand-muted leading-relaxed mb-10">
              At EduNaaz Publication, we are committed to protecting the privacy and confidentiality of our users.
              This Privacy Policy outlines how we collect, use, and safeguard your personal information.
              By using our service, you consent to the practices described herein.
            </p>

            <div className="space-y-10">
              {/* Information Collection */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Information Collection</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  We may collect certain personal information from users, including name, contact details
                  (email address, phone number), institutional affiliation, and academic qualifications.
                  This data is voluntarily provided by users during the registration and consultation process.
                </p>
              </div>

              {/* Use of Information */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Use of Information</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  The personal information we collect is used to provide the research publication assistance
                  service to our users effectively. We use this information to identify the user, communicate
                  with them, and tailor our service to meet their specific needs.
                </p>
              </div>

              {/* Data Security */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Data Security</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  We employ reasonable security measures to protect the personal information provided by users.
                  However, please be aware that no data transmission over the internet or electronic storage
                  method is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
                </p>
              </div>

              {/* Information Sharing */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Information Sharing</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  We do not disclose or share users&apos; personal information with third parties without explicit
                  consent, except when required by law or to comply with legal processes. Your personal information
                  is used solely for the purpose of providing the research publication assistance service.
                </p>
              </div>

              {/* Retention */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Retention</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  We will retain your personal information for as long as necessary to fulfil the purpose for
                  which it was collected and to comply with legal obligations. Afterward, your data will be
                  securely deleted or anonymized.
                </p>
              </div>

              {/* Cookies and Tracking */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Cookies and Tracking</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Our website may use cookies or similar technologies to enhance user experience and gather
                  non-personal information such as browser type, IP address, and pages visited. Users can
                  adjust their browser settings to disable cookies if desired.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Third-Party Links</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the
                  privacy practices of these external sites. We encourage users to review the privacy policies
                  of linked websites before providing any personal information.
                </p>
              </div>

              {/* Changes to the Privacy Policy */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Changes to the Privacy Policy</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  We reserve the right to update or modify this Privacy Policy from time to time. Any changes
                  will be posted on our website, and the revised policy will be effective immediately upon posting.
                </p>
              </div>
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className="border-t-2 border-brand-borderHairline my-16" />

          {/* ── REFUND POLICY ── */}
          <div className="mb-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7B2FBE] font-semibold font-body mb-2">
                Section 02
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-brand-dark leading-snug">
                Refund <span className="text-[#7B2FBE] font-normal">Policy</span>
              </h2>
              <div className="w-12 h-[2px] bg-[#7B2FBE] mt-4" />
            </div>

            <p className="font-body text-sm text-brand-muted leading-relaxed mb-10">
              At EduNaaz Publication, we are committed to providing exceptional publication assistance and services
              to our valued authors. This Refund Policy outlines the terms and conditions under which refunds can be
              granted for our services. Please carefully review the following points:
            </p>

            <div className="space-y-10">
              {/* Journal Unavailability */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Journal Unavailability</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  In the event that an author&apos;s specific journal preference cannot be accommodated by EduNaaz
                  Publication, the author is entitled to withdraw their article from our services without incurring
                  any charges. We understand the importance of matching authors with their preferred journals, and
                  we strive to fulfill these preferences to the best of our abilities.
                </p>
              </div>

              {/* Publication Charges */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Publication Charges</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Should an author find that the publication charges associated with their chosen service exceed
                  their budgetary constraints, they have the option to withdraw their article from our services
                  without any financial implications. We understand that financial considerations are important,
                  and we aim to support authors within their means.
                </p>
              </div>

              {/* Direct Submission */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Direct Submission After Provision of Target Journal</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  If EduNaaz Publication successfully provides the author with a journal that meets their requirements
                  and the author subsequently decides to directly submit their article to the target journal, resulting
                  in the withdrawal of the article from EduNaaz Publication, the author will not be eligible for a
                  withdrawal and may be subject to penalties as outlined in our terms and conditions.
                </p>
              </div>

              {/* Article Acceptance */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Article Acceptance</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Once an article has been accepted by the target journal, the author will not be eligible to cancel
                  or withdraw the article from our services. At this stage, the article is considered to be in the
                  final stages of publication, and no refunds or withdrawals will be granted.
                </p>
              </div>

              {/* Post-Selection Withdrawal */}
              <div className="border-l-2 border-[#7B2FBE]/30 pl-6">
                <h3 className="font-heading text-lg text-brand-dark mb-3">Post-Selection Withdrawal</h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Once an article has progressed to the point where it has been processed for acceptance and a
                  targeted journal has been selected, any requests for withdrawal will not be entertained. Authors
                  are obligated to proceed with the publication process at this stage, and withdrawal will not be permitted.
                </p>
              </div>
            </div>

            {/* General notice */}
            <div className="mt-10 p-6 bg-[#F3F3F3] border-l-4 border-[#7B2FBE]">
              <p className="font-body text-sm text-brand-muted leading-relaxed">
                It is important to note that our Refund Policy is aligned with our commitment to providing timely
                and effective publication services to our authors. By availing our services, authors acknowledge and
                agree to abide by the terms and conditions outlined in this policy.
              </p>
              <p className="font-body text-sm text-brand-muted leading-relaxed mt-4">
                For any further clarification or inquiries regarding our refund policy, please do not hesitate to
                contact our customer support team.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mt-10 border-l-2 border-[#7B2FBE]/30 pl-6">
              <h3 className="font-heading text-lg text-brand-dark mb-3">Policy Updates</h3>
              <p className="font-body text-sm text-brand-muted leading-relaxed">
                EduNaaz Publication reserves the right to update or modify this refund policy at any time without
                prior notice. The terms and conditions in effect at the time of an author&apos;s service request will apply.
              </p>
            </div>
          </div>

          {/* ── CONTACT NOTE ── */}
          <div className="border-t border-brand-borderHairline pt-10 mt-4">
            <p className="font-body text-xs text-brand-muted leading-relaxed">
              For questions about these policies, please contact us at{" "}
              <a
                href="mailto:edunazpublication@gmail.com"
                className="text-[#7B2FBE] hover:underline"
              >
                edunazpublication@gmail.com
              </a>
              {" "}or visit the{" "}
              <a href="/contact" className="text-[#7B2FBE] hover:underline">
                Contact page
              </a>
              .
            </p>
          </div>

        </div>
      </section>

      <CtaBand />
    </main>
  );
}
