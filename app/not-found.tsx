import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow="ERROR 404"
        title="Page Not Found"
        accentWord="Found"
        intro="The page you are looking for does not exist, has been removed, or is temporarily unavailable."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "404" },
        ]}
      />

      <section className="py-24 bg-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-6xl sm:text-7xl text-[#7B2FBE] mb-6 font-normal">
            404
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading text-brand-dark mb-4">
            Looking for Academic Publishing Support?
          </h2>
          <p className="text-sm font-body text-brand-muted leading-relaxed mb-8">
            Please check the URL or return to our home page to navigate through our research publication, writing and technical editing, and journal services.
          </p>

          <div className="inline-flex">
            <Link
              href="/"
              className="inline-flex items-stretch bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] transition-all duration-200 text-white rounded-lg overflow-hidden shadow-[0_0_15px_rgba(123,47,190,0.4)] group"
            >
              <span className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center">
                RETURN TO HOME
              </span>
              <span className="w-11 bg-white/10 border-l border-white/20 flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5">
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
      </section>
    </main>
  );
}
