"use client";

import React, { createContext, useContext, useState, useEffect, FormEvent } from "react";

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

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("Research Publication Guidance");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = (defaultCategory?: string) => {
    if (defaultCategory) setCategory(defaultCategory);
    setIsSubmitted(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Reset state after transition
    setTimeout(() => {
      setIsSubmitted(false);
      setLoading(false);
    }, 300);
  };

  // Listen for global custom event 'open-inquiry-modal'
  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ category?: string }>;
      openModal(customEvent.detail?.category);
    };

    window.addEventListener("open-inquiry-modal", handleOpenEvent);
    return () => window.removeEventListener("open-inquiry-modal", handleOpenEvent);
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate quick submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <InquiryModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {/* Modal Backdrop & Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
                    Have questions about publishing, review timelines, or editing? Complete this brief form and our team will get in touch shortly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-dark mb-1">
                      Full Name <span className="text-[#7B2FBE]">*</span>
                    </label>
                    <input
                      required
                      type="text"
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
                      <option value="Research Publication Guidance">Research Publication Guidance</option>
                      <option value="Writing & Editorial Excellence">Writing &amp; Editorial Excellence</option>
                      <option value="Theses & Dissertations Support">Theses &amp; Dissertations Support</option>
                      <option value="ISBN Book Publication">ISBN Book Publication</option>
                      <option value="Journal Scope & Indexing">Journal Scope &amp; Indexing Inquiry</option>
                      <option value="General Academic Inquiry">General Academic Inquiry</option>
                    </select>
                  </div>

                  {/* Message / Scope */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-dark mb-1">
                      Brief Manuscript / Research Details
                    </label>
                    <textarea
                      rows={3}
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
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(123,47,190,0.35)] hover:shadow-[0_0_25px_rgba(123,47,190,0.5)] transition-all duration-200 cursor-pointer disabled:opacity-75"
                      style={{ borderRadius: "8px" }}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
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
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4"
                  style={{ borderRadius: "9999px" }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-heading text-2xl text-brand-dark mb-2">
                  Inquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted font-body max-w-sm mx-auto leading-relaxed mb-6">
                  Thank you for reaching out. An editorial advisor from Edunaaz Publication will review your inquiry and connect with you shortly.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-lg bg-[#7B2FBE] hover:bg-[#6620A0] text-white font-bold text-xs uppercase tracking-wider transition-colors"
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
