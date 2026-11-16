"use client";

import React, { FormEvent, useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [manuscript, setManuscript] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const renderTimeRef = useRef<number | null>(null);

  useEffect(() => {
    renderTimeRef.current = Date.now();
  }, []);

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [submittedSnapshot, setSubmittedSnapshot] = useState<{
    name: string;
    email: string;
    manuscript: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage(null);

    const payload = {
      name,
      email,
      phone: "",
      category: "General Academic Inquiry",
      details: manuscript,
      sourceForm: "Contact Us Page Form",
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
            "Unable to deliver your inquiry email. Please try again or chat with our desk on WhatsApp."
        );
      }

      setSubmittedSnapshot({ name, email, manuscript });
      setIsSuccess(true);
      setName("");
      setEmail("");
      setManuscript("");
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

  const whatsappPrefill = submittedSnapshot
    ? `Hello Edunaaz Publication,\nI just submitted an inquiry on your website contact page:\n\n• Name: ${submittedSnapshot.name}\n• Email: ${submittedSnapshot.email}\n• Manuscript / Query: ${submittedSnapshot.manuscript}`
    : "";

  if (isSuccess) {
    return (
      <div className="p-8 bg-[#FAF8F5] border border-[#EBE3D6] rounded-2xl text-left animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-brand-dark mb-2">
          Inquiry Sent Successfully!
        </h3>
        <p className="text-sm font-body text-brand-muted leading-relaxed mb-6">
          Thank you for getting in touch. Your message has been sent to our
          editorial inbox at{" "}
          <strong className="text-brand-dark font-medium">
            editor@edunaazpublication.com
          </strong>
          . An advisor will review your query and reply to{" "}
          <span className="text-[#7B2FBE] font-medium">
            {submittedSnapshot?.email}
          </span>{" "}
          shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          {submittedSnapshot && (
            <a
              href={`https://wa.me/919395707581?text=${encodeURIComponent(
                whatsappPrefill
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.275-.102-.475-.15-.676.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.235-.244-.589-.493-.51-.676-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.032-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.996h-.008c-1.776 0-3.517-.478-5.045-1.383l-.362-.215-3.75 1.002.999-3.65-.236-.375c-1.005-1.6-1.536-3.456-1.536-5.36 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.186 1.042 7.076 2.932s2.93 4.405 2.928 7.08c-.002 5.52-4.492 10.01-10.014 10.01zM19.78 4.22A11.002 11.002 0 0 0 12.04 1C5.975 1 1.025 5.95 1.022 12.018c0 1.938.505 3.832 1.464 5.495l-1.558 5.69 5.83-1.528A10.98 10.98 0 0 0 12.04 23c6.066 0 11.015-4.95 11.018-11.018 0-2.94-1.144-5.706-3.278-7.762z" />
              </svg>
              <span>Also Send via WhatsApp</span>
            </a>
          )}
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="px-5 py-3 rounded-lg border border-brand-borderHairline hover:bg-brand-bgGray text-brand-dark font-semibold text-xs uppercase tracking-wider transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-5 text-left" data-stagger onSubmit={handleSubmit}>
      {/* Honeypot field */}
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

      {/* Error Message */}
      {errorMessage && (
        <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-start gap-2.5">
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
          <span className="flex-1 leading-relaxed">{errorMessage}</span>
        </div>
      )}

      <div data-reveal="up">
        <label
          className="block text-[11px] uppercase tracking-wider text-brand-dark font-medium mb-1.5"
          htmlFor="contact-name"
        >
          Full Name <span className="text-[#7B2FBE]">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
          id="contact-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dr. / Prof. / Scholar Name"
          required
          type="text"
        />
      </div>

      <div data-reveal="up">
        <label
          className="block text-[11px] uppercase tracking-wider text-brand-dark font-medium mb-1.5"
          htmlFor="contact-email"
        >
          Email Address <span className="text-[#7B2FBE]">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
          id="contact-email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="author@university.edu"
          required
          type="email"
        />
      </div>

      <div data-reveal="up">
        <label
          className="block text-[11px] uppercase tracking-wider text-brand-dark font-medium mb-1.5"
          htmlFor="contact-manuscript"
        >
          Brief Manuscript Details <span className="text-[#7B2FBE]">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
          id="contact-manuscript"
          name="manuscript"
          value={manuscript}
          onChange={(e) => setManuscript(e.target.value)}
          placeholder="Discipline, Title, or Research Scope"
          required
          type="text"
        />
      </div>

      <div className="pt-2" data-reveal="up" data-magnetic>
        <button
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-stretch bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] transition-all duration-200 text-white rounded-lg overflow-hidden shadow-[0_0_15px_rgba(123,47,190,0.35)] hover:shadow-[0_0_20px_rgba(123,47,190,0.5)] group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          type="submit"
        >
          <span className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
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
              "SUBMIT ENQUIRY"
            )}
          </span>
          <span className="w-11 bg-white/10 border-l border-white/20 flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="2"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
}
