import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isIsbn = service.slug === "isbn-book-publication";

  return (
    <main>
      <PageHero
        eyebrow="SERVICE DETAILS"
        title={service.title}
        accentWord={service.heroAccentWord}
        intro={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Scope & Deliverables */}
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
                SERVICE OVERVIEW
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-heading leading-tight mb-6">
                Comprehensive Support for {service.title}
              </h2>
              <p className="text-brand-muted font-body text-base leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              <div className="hairline-divider mb-8" />

              <h3 className="font-heading text-xl text-brand-dark mb-6">
                Key Deliverables &amp; Scope
              </h3>

              <ul className="space-y-4 mb-10" role="list">
                {service.items.map((item, index) => (
                  <li
                    key={index}
                    className="p-4 bg-brand-bgGray border border-brand-borderHairline flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 bg-[#D9A93F] flex-shrink-0" />
                      <span className="text-sm font-body text-brand-dark font-medium">
                        {item}
                        {isIsbn && (
                          /* TODO: take these four points from the client's ISBN Book Publication page */
                          <span className="sr-only"> - Detail placeholder</span>
                        )}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-brand-gold font-semibold">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Consultation / Direct Action */}
              <div className="bg-[#3F4056] text-white p-8">
                <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-2">
                  START YOUR SUBMISSION
                </p>
                <h3 className="font-heading text-2xl text-white mb-3">
                  Have a manuscript ready for {service.title}?
                </h3>
                <p className="text-white/80 font-body text-sm leading-relaxed mb-6 font-light">
                  Get in touch with our editorial board to schedule a preliminary review and scope evaluation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-stretch bg-[#D9A93F] hover:bg-[#C4942B] transition-colors duration-150 text-brand-dark group shadow-none"
                >
                  <span className="px-7 py-3 text-xs font-semibold uppercase tracking-wider flex items-center">
                    SUBMIT MANUSCRIPT
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

            {/* Right Column: Other Services Navigation */}
            <div className="lg:col-span-4">
              <div className="bg-brand-bgGray border border-brand-borderHairline p-6 lg:p-8">
                <h3 className="font-heading text-lg text-brand-dark uppercase tracking-wider mb-4 border-b border-brand-borderHairline pb-3">
                  All Services
                </h3>
                <ul className="space-y-3 font-body text-sm">
                  {SERVICES_DATA.map((item) => {
                    const isCurrent = item.slug === service.slug;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          className={`flex items-center justify-between p-3 transition-colors ${
                            isCurrent
                              ? "bg-white border-l-2 border-brand-gold text-brand-dark font-medium shadow-none"
                              : "text-brand-muted hover:text-brand-dark hover:bg-white"
                          }`}
                        >
                          <span>{item.title}</span>
                          <span className="text-xs font-mono">→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="hairline-divider my-6" />

                <div className="text-xs text-brand-muted space-y-2">
                  <p className="font-semibold text-brand-dark uppercase tracking-wider">
                    Editorial Support
                  </p>
                  <p className="leading-relaxed">
                    Have questions regarding journal scope or indexing? Our editors are available 24x7 for author inquiries.
                  </p>
                  <Link
                    href="/contact"
                    className="text-brand-gold font-semibold hover:underline inline-block pt-1"
                  >
                    Contact Editorial Office →
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
