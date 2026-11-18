import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    /* BEGIN: MainFooter */
    <footer className="bg-brand-slateDark text-white pt-16 pb-8 border-t border-[#7B2FBE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Layout */}
        <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14 text-xs font-body">
          {/* Column 1: Brand & Registration */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3.5 mb-4">
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 rounded-full bg-white p-0.5 ring-2 ring-[#7B2FBE]/60 shadow-[0_0_16px_rgba(123,47,190,0.4)]">
                <Image
                  src="/logo.png"
                  alt="Edunaaz Publication Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="block font-heading text-lg text-white tracking-wide">
                  Edunaaz <span className="text-[#C084FC]">Publication</span>
                </span>
                <span
                  className="block text-[9px] tracking-[0.25em] text-[#C084FC] font-body uppercase font-medium"
                >
                  OPC PVT LTD
                </span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              CIN: <span className="text-white font-mono">U85499AS2025OPC028933</span><br />
              Edunaaz Publication (OPC) Pvt. Ltd. is registered with the Ministry of Corporate Affairs, Government of India, and is dedicated to advancing academic rigour and research dissemination across global platforms.
            </p>
          </div>
          {/* Column 2: Explore Navigation */}
          <div className="lg:col-span-2">
            <h4
              className="font-heading text-sm text-white uppercase tracking-wider mb-4 border-b border-[#7B2FBE]/40 pb-2 pl-2 border-l-2 border-l-[#7B2FBE]"
            >
              Explore
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/">Home</Link></li>
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/about">About Us</Link></li>
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/journals">Journals</Link>
              </li>
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/apex">APEX Program</Link>
              </li>
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/faq">FAQ</Link></li>
            </ul>
          </div>
          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4
              className="font-heading text-sm text-white uppercase tracking-wider mb-4 border-b border-[#7B2FBE]/40 pb-2 pl-2 border-l-2 border-l-[#7B2FBE]"
            >
              Services
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/services/research-publication">Research
                Publication</Link></li>
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/services/writing-and-editing">Writing &amp;
                Technical Editing</Link></li>
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/services/isbn-book-publication">ISBN Book
                Publication</Link></li>
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/#process">Plagiarism &amp;
                Formatting Audit</Link></li>
              <li className=""><Link data-sweep className="hover:text-[#C084FC] transition-colors" href="/services/writing-and-editing">Thesis &amp;
                Review Support</Link></li>
            </ul>
          </div>
          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4
              className="font-heading text-sm text-white uppercase tracking-wider mb-4 border-b border-[#7B2FBE]/40 pb-2 pl-2 border-l-2 border-l-[#7B2FBE]"
            >
              Registered Office
            </h4>
            <address className="not-italic text-white/70 space-y-2.5 leading-relaxed">
              <p className="">
                Room No 8, Ground Floor, AL-HAYAT COMPLEX, Majgaon, Barpeta Road, Assam 781313, India
              </p>
              <p className="">
                <span className="text-white/90">Email:</span>
                <a className="hover:text-[#C084FC] transition-colors block break-all"
                  href="mailto:editor@edunaazpublication.com">editor@edunaazpublication.com</a>
              </p>
              <p className="">
                <span className="text-white/90">Phone:</span>
                <a className="hover:text-[#C084FC] transition-colors block" href="tel:+919395707581">+91
                  9395707581</a>
              </p>
            </address>
          </div>
        </div>
        {/* Purple shimmer hairline divider */}
        <div className="purple-hairline mb-6" aria-hidden="true"></div>
        {/* Bottom Copyright Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 space-y-3 sm:space-y-0"
        >
          <div className="">
            © 2025 EDUNAAZ PUBLICATION (OPC) PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link data-sweep className="hover:text-white transition-colors" href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
    /* END: MainFooter */
  );
}
