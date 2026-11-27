"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  FormEvent,
} from "react";

interface InquiryModalContextType {
  isOpen: boolean;
  openModal: (category?: string) => void;
  closeModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useInquiryModal = () => useContext(InquiryModalContext);

export function InquiryModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("Research Publication Guidance");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const renderTimeRef = useRef<number | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Cache submitted data for post-submission WhatsApp prefill
  const [submittedSnapshot, setSubmittedSnapshot] = useState<{
    name: string;
    email: string;
    phone: string;
    category: string;
    details: string;
  } | null>(null);
  const [mailtoUrl, setMailtoUrl] = useState<string>("");

  const openModal = (defaultCategory?: string) => {
    if (defaultCategory) setCategory(defaultCategory);
    setIsSubmitted(false);
    setErrorMessage(null);
    renderTimeRef.current = Date.now();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setLoading(false);
      setErrorMessage(null);
    }, 300);
  };

  // Listen for global custom event 'open-inquiry-modal'
  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ category?: string }>;
      openModal(customEvent.detail?.category);
    };

    window.addEventListener("open-inquiry-modal", handleOpenEvent);
    return () =>
      window.removeEventListener("open-inquiry-modal", handleOpenEvent);
  }, []);

  // Close on Escape & prevent body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage(null);

    const payload = {
      name,
      email,
      phone,
      category,
      details,
      sourceForm: "Global Quick Inquiry Modal",
      hp_website: honeypot,
      renderTime: renderTimeRef.current ?? undefined,
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Unable to submit your inquiry at this time. Please try again or chat with us on WhatsApp."
        );
      }

      // Success
      setSubmittedSnapshot({
        name,
        email,
        phone,
        category,
        details,
      });
      if (result?.mailtoUrl) {
        setMailtoUrl(result.mailtoUrl);
      } else {
        const fallbackMailto = `mailto:editor@edunaazpublication.com?subject=${encodeURIComponent(
          `New Academic Inquiry – ${category} [${name}]`
        )}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nCategory: ${category}\n\nDetails:\n${details}`
        )}`;
        setMailtoUrl(fallbackMailto);
      }
      setIsSubmitted(true);

      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setDetails("");
      setHoneypot("");
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  // Prepare prefilled WhatsApp message
  const whatsappPrefillText = submittedSnapshot
    ? `Hello Edunaaz Publication,\nI just submitted an inquiry on your website:\n\n• Name: ${submittedSnapshot.name}\n• Email: ${submittedSnapshot.email}\n• Phone: ${submittedSnapshot.phone || "Not provided"}\n• Service: ${submittedSnapshot.category}\n• Details: ${submittedSnapshot.details}`
    : "";

  return (
    <InquiryModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {/* Modal Backdrop & Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* Blurred dark backdrop */}
        <div
          className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
          onClick={closeModal}
        />

        {/* Modal Window Card */}
        <div
          className={`relative w-full max-w-lg bg-[#FAF8F5] border border-[#EBE3D6] rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden z-10 transition-all duration-300 transform ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
          style={{ borderRadius: "24px" }}
        >
          {/* Top Decorative Purple Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#7B2FBE] via-[#9333EA] to-[#C084FC]" />

          {/* Close button (X) */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-brand-dark flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close inquiry modal"
            type="button"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-4 h-px bg-[#7B2FBE]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#7B2FBE] font-body">
                      QUICK INQUIRY
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-brand-dark leading-tight">
                    Connect With Our Editorial Board
                  </h3>
                  <p className="text-xs sm:text-[13px] text-brand-muted font-body mt-1.5 leading-relaxed">
                    Have questions about publishing, review timelines, or
                    editing? Complete this brief form and our team will get in
                    touch shortly.
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div className="flex-1 leading-relaxed">{errorMessage}</div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from genuine users) */}
                  <div
                    className="hidden"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <input
                      type="text"
                      name="hp_website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-dark mb-1">
                      Full Name <span className="text-[#7B2FBE]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. / Prof. / Scholar Name"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-lg border border-[#E0D8CB] bg-white text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] transition-all"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-dark mb-1">
                        Email Address <span className="text-[#7B2FBE]">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="scholar@university.edu"
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-lg border border-[#E0D8CB] bg-white text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] transition-all"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-dark mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-lg border border-[#E0D8CB] bg-white text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] transition-all"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>

                  {/* Service Category */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-dark mb-1">
                      Service / Area of Interest
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-lg border border-[#E0D8CB] bg-white text-brand-dark focus:outline-none focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] transition-all"
                      style={{ borderRadius: "8px" }}
                    >
                      {![
                        "Research Publication Guidance",
                        "Writing & Editorial Excellence",
                        "Thesis & Dissertations Support",
                        "ISBN Book Publication",
                        "Journal Scope & Indexing",
                        "General Academic Inquiry",
                      ].includes(category) && (
                        <option value={category}>{category}</option>
                      )}
                      <option value="Research Publication Guidance">
                        Research Publication Guidance
                      </option>
                      <option value="Writing & Editorial Excellence">
                        Writing &amp; Editorial Excellence
                      </option>
                      <option value="Thesis & Dissertations Support">
                        Thesis &amp; Dissertations Support
                      </option>
                      <option value="ISBN Book Publication">
                        ISBN Book Publication
                      </option>
                      <option value="Journal Scope & Indexing">
                        Journal Scope &amp; Indexing Inquiry
                      </option>
                      <option value="General Academic Inquiry">
                        General Academic Inquiry
                      </option>
                    </select>
                  </div>

                  {/* Message / Scope */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-dark mb-1">
                      Brief Manuscript / Research Details{" "}
                      <span className="text-[#7B2FBE]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Share your paper title, discipline, target journal, or specific questions..."
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-lg border border-[#E0D8CB] bg-white text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] transition-all resize-none"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(123,47,190,0.35)] hover:shadow-[0_0_25px_rgba(123,47,190,0.5)] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ borderRadius: "8px" }}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          <span>SENDING INQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT INQUIRY</span>
                          <span className="font-mono">→</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-brand-muted font-body mt-2.5">
                      Direct inquiries to:{" "}
                      <a
                        href="mailto:editor@edunaazpublication.com"
                        className="text-[#7B2FBE] hover:underline font-semibold"
                      >
                        editor@edunaazpublication.com
                      </a>
                    </p>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="py-6 text-center flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4"
                  style={{ borderRadius: "9999px" }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-heading text-2xl text-brand-dark mb-2">
                  Inquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted font-body max-w-sm mx-auto leading-relaxed mb-6">
                  Thank you for reaching out. Your inquiry has been routed to our editorial desk at{" "}
                  <strong className="text-brand-dark">editor@edunaazpublication.com</strong>.
                  An advisor will review your manuscript details and reply shortly.
                </p>

                {/* Direct Email Client Button */}
                <a
                  href={
                    mailtoUrl ||
                    `mailto:editor@edunaazpublication.com?subject=${encodeURIComponent(
                      `New Academic Inquiry – ${submittedSnapshot?.category || "General"} [${submittedSnapshot?.name || "Author"}]`
                    )}&body=${encodeURIComponent(
                      `Name: ${submittedSnapshot?.name}\nEmail: ${submittedSnapshot?.email}\nPhone: ${submittedSnapshot?.phone || "Not provided"}\nCategory: ${submittedSnapshot?.category}\n\nDetails:\n${submittedSnapshot?.details}`
                    )}`
                  }
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md mb-2.5"
                  style={{ borderRadius: "8px" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Open Email in Your Mail App</span>
                </a>

                {/* Optional WhatsApp Quick Follow-up Button */}
                {submittedSnapshot && (
                  <a
                    href={`https://wa.me/919395707581?text=${encodeURIComponent(
                      whatsappPrefillText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] mb-3"
                    style={{ borderRadius: "8px" }}
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.275-.102-.475-.15-.676.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.235-.244-.589-.493-.51-.676-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.032-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.996h-.008c-1.776 0-3.517-.478-5.045-1.383l-.362-.215-3.75 1.002.999-3.65-.236-.375c-1.005-1.6-1.536-3.456-1.536-5.36 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.186 1.042 7.076 2.932s2.93 4.405 2.928 7.08c-.002 5.52-4.492 10.01-10.014 10.01zM19.78 4.22A11.002 11.002 0 0 0 12.04 1C5.975 1 1.025 5.95 1.022 12.018c0 1.938.505 3.832 1.464 5.495l-1.558 5.69 5.83-1.528A10.98 10.98 0 0 0 12.04 23c6.066 0 11.015-4.95 11.018-11.018 0-2.94-1.144-5.706-3.278-7.762z" />
                    </svg>
                    <span>Also Send via WhatsApp</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-brand-dark font-semibold text-xs uppercase tracking-wider transition-colors"
                  style={{ borderRadius: "8px" }}
                >
                  CLOSE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </InquiryModalContext.Provider>
  );
}
