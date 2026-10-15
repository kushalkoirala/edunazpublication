import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "APEX Program",
  description:
    "Structured institutional mentorship and research publication acceleration program designed for colleges, universities, departmental research centers, faculty members, and postgraduate candidates.",
};

const whoItIsForItems = [
  {
    title: "Colleges & Universities",
    description:
      "Institutions seeking to enhance overall scholarly output, establish accredited publication pipelines, and foster departmental research compliance.",
  },
  {
    title: "Departmental Research Centers",
    description:
      "Specialized research laboratories and academic departments aiming to publish peer-reviewed monographs, symposium proceedings, and indexed journals.",
  },
  {
    title: "Faculty Members",
    description:
      "Academic professors and teaching faculty requiring hands-on manuscript clinics, peer-review rebuttal guidance, and citation indexing alignment.",
  },
  {
    title: "Postgraduate Candidates",
    description:
      "Doctoral scholars and Master's researchers preparing their first high-impact journal submissions, review papers, and dissertations.",
  },
];

export default function ApexPage() {
  return (
    <main>
      <PageHero
        eyebrow="APEX PROGRAM"
        title="Institutional Research Acceleration"
        accentWord="Acceleration"
        intro="A structured institutional mentorship and publication acceleration initiative."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "APEX Program" },
        ]}
      />

      {/* Main APEX Program Section (matching Home section styling) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Academic Photo with Square Gold Offset Accent */}
            <div className="lg:col-span-6 relative">
              <div className="relative max-w-lg mx-auto overflow-hidden">
                <div
                  className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold z-0 pointer-events-none"
                  data-reveal="clip-left"
                />
                <img
                  alt="Institutional Mentorship & Research Program"
                  className="relative z-10 w-full h-[400px] object-cover border border-brand-borderHairline shadow-none"
                  data-parallax="0.1"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8SykcoqvFrV2J_Uzthc2tluoOUvgKD3zdM6lpkVpFA6yn9YRIrsaXP1nLNDrt_xmXdlz_-VBxMap6gpY5GYNcxpjf4eezENULgagWpyL3vRitVr3_66lojJdsC-cEfRZDp5T_ybthzx0M8dEKmtZNUHn_Hn57p_uqFESLaQ74MBdcOc5GltlV_jRI8_tAaC0YQEB-J94ea7NJ8PflvjNXiRZUShCfWPvKSgsoFVT2FW8IwRpXwyw"
                />
              </div>
            </div>

            {/* Right Column: Program Details */}
            <div className="lg:col-span-6" data-reveal="up">
              <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
                INSTITUTIONAL MENTORSHIP
              </p>
              <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-6" data-split="lines">
                Institutional Research <span className="text-brand-gold font-normal">Acceleration</span>
              </h2>
              <p className="text-brand-muted font-body text-sm leading-relaxed mb-6">
                The APEX Program by Edunaaz Publication is a structured institutional mentorship and
                publication acceleration initiative. Designed specifically for colleges, universities, and
                departmental research centers, APEX provides faculty members and postgraduate candidates
                with hands-on manuscript clinics, indexing literacy workshops, and dedicated publication
                pipelines.
              </p>

              <ul className="space-y-3 mb-8 text-xs text-brand-dark font-medium" data-stagger>
                <li className="flex items-center space-x-3" data-reveal="up">
                  <span className="w-1.5 h-1.5 bg-brand-gold" />
                  <span>Dedicated Institutional Coordinator &amp; Editorial Liaison</span>
                </li>
                <li className="flex items-center space-x-3" data-reveal="up">
                  <span className="w-1.5 h-1.5 bg-brand-gold" />
                  <span>Workshops on UGC CARE, Scopus &amp; Web of Science Compliance</span>
                </li>
                <li className="flex items-center space-x-3" data-reveal="up">
                  <span className="w-1.5 h-1.5 bg-brand-gold" />
                  <span>Priority Manuscript Formatting and Conference Proceeding Publication</span>
                </li>
              </ul>

              <div className="inline-flex" data-magnetic>
                <Link
                  className="inline-flex items-stretch bg-brand-gold hover:bg-brand-goldHover transition-colors duration-150 text-brand-dark group shadow-none"
                  href="/contact"
                >
                  <span className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center">
                    ENQUIRE ABOUT APEX
                  </span>
                  <span className="w-11 bg-white border-l border-brand-gold flex items-center justify-center text-brand-dark transition-transform duration-200 group-hover:translate-x-0.5">
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
        </div>
      </section>

      {/* "Who It Is For" Section (drawn strictly from existing copy) */}
      <section className="py-24 bg-brand-bgGray border-t border-brand-borderHairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16" data-reveal="up">
            <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
              TARGET AUDIENCE
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight" data-split="lines">
              Who <span className="text-brand-gold font-normal">APEX</span> Is For
            </h2>
            <p className="text-brand-muted font-body text-sm mt-3 leading-relaxed">
              Tailored academic mentorship built to serve diverse tiers within higher education and research ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger>
            {whoItIsForItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-brand-borderHairline flex flex-col justify-between"
                data-reveal="up"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="w-2 h-2 bg-brand-gold inline-block" />
                    <h3 className="font-heading text-xl text-brand-dark">
                      {item.title}
                    </h3>
                  </div>
                  <div className="hairline-divider my-4" data-line />
                  <p className="text-sm font-body text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
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
