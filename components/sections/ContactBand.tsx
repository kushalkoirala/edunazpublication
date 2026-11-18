"use client";

import React, { FormEvent, useState, useRef, useEffect } from "react";

export default function ContactBand() {
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage(null);

    const payload = {
      name,
      email,
      phone: "",
      category: "Research Publication Guidance",
      details: manuscript,
      sourceForm: "Home Bottom Contact Band",
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
            "Unable to submit your inquiry at this time. Please try again or reach out on WhatsApp."
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
    ? `Hello Edunaaz Publication,\nI just submitted an inquiry on your website:\n\n• Name: ${submittedSnapshot.name}\n• Email: ${submittedSnapshot.email}\n• Manuscript Details: ${submittedSnapshot.manuscript}`
    : "";

  return (
    /* BEGIN: ContactBandSection */
    <section className="relative py-24 bg-brand-slate text-white overflow-hidden" id="contact">
      {/* Full-Width Background Photo with Slate Overlay */}
      <div data-parallax="0.1" className="absolute inset-0 z-0 scale-105">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Books in academic library"
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuAeCSgWJ3Yt_AjZxwKcLHNd1oW2I91bhHyrWOEUHyqQNmlwAPP854uZWnAflbuDwTaVvW-qW1LDl1WazAF_XM4tee6lP1mLtlCc4JwKBzwASciNA0wor0cLdicTOsTcXF0k8l6HczVuw1CB6lHhlBKNL1aoCJMY9KLGedf_04eHUcFnTXxKe0fSez95qHcPZ8J9hE0uvHl_zoanVFC3m3Unbkfw4Uki6MTL3gu9-kGYspIA4tG88"
        />
        <div className="absolute inset-0 bg-[#3F4056]/90" />
        {/* Purple logo glow — right edge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 95% 50%, rgba(123,47,190,0.20) 0%, transparent 65%)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-2.5 mb-3"
          data-reveal="up"
        >
          <span className="w-5 h-[1.5px] bg-[#7B2FBE]"></span>
          <p className="text-xs uppercase tracking-eyebrow text-[#C084FC] font-medium">
            GET IN TOUCH
          </p>
          <span className="w-5 h-[1.5px] bg-[#7B2FBE]"></span>
        </div>
        {/* Heading */}
        <h2
          data-split="lines"
          className="text-3xl sm:text-4xl font-heading text-white mb-4"
        >
          Ready to <span className="text-[#C084FC] font-normal">Publish</span>{" "}
          Your Research?
        </h2>
        <p
          data-reveal="up"
          className="text-white/80 font-body text-sm max-w-2xl mx-auto mb-10 font-light"
        >
          Get expert guidance for your manuscript, from first draft to
          submission. Fill in your inquiry below.
        </p>

        {isSuccess ? (
          <div className="max-w-xl mx-auto mb-8 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center animate-fadeIn">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <svg
                className="w-7 h-7"
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
            <h3 className="font-heading text-2xl text-white mb-2">
              Inquiry Dispatched Successfully!
            </h3>
            <p className="text-white/80 text-xs sm:text-sm font-body leading-relaxed mb-6">
              Thank you for reaching out. An editorial notification has been sent
              to our desk, and an editor will contact you shortly at{" "}
              <strong className="text-white">{submittedSnapshot?.email}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {submittedSnapshot && (
                <a
                  href={`https://wa.me/919395707581?text=${encodeURIComponent(
                    whatsappPrefill
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
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
                className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          /* Compact Form Row */
          <form
            className="max-w-4xl mx-auto mb-8 text-left"
            onSubmit={handleSubmit}
          >
            {/* Honeypot */}
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
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/40 text-red-200 text-xs rounded-lg flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-red-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <div
              data-stagger
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
            >
              <div>
                <label
                  className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                  htmlFor="band-name"
                >
                  Full Name
                </label>
                <input
                  className="w-full bg-white text-brand-dark text-xs px-4 py-3.5 border-0 focus:ring-1 focus:ring-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
                  id="band-name"
                  placeholder="Dr. / Prof. / Scholar Name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                  htmlFor="band-email"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-white text-brand-dark text-xs px-4 py-3.5 border-0 focus:ring-1 focus:ring-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
                  id="band-email"
                  placeholder="author@university.edu"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                  htmlFor="band-manuscript"
                >
                  Brief Manuscript Details
                </label>
                <input
                  className="w-full bg-white text-brand-dark text-xs px-4 py-3.5 border-0 focus:ring-1 focus:ring-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
                  id="band-manuscript"
                  placeholder="Discipline, Title, or Research Scope"
                  required
                  type="text"
                  value={manuscript}
                  onChange={(e) => setManuscript(e.target.value)}
                />
              </div>
            </div>
            <div data-reveal="up" className="flex justify-center mt-6">
              <button
                data-magnetic
                disabled={loading}
                className="inline-flex items-stretch bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] transition-all duration-200 text-white rounded-lg overflow-hidden shadow-[0_0_20px_rgba(123,47,190,0.4)] hover:shadow-[0_0_25px_rgba(123,47,190,0.6)] group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
              >
                <span className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
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
                      <span>SENDING...</span>
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
        )}

        {/* Direct WhatsApp Link Below Form */}
        <div className="inline-flex items-center space-x-2 text-white/90 text-xs font-medium">
          <svg
            className="w-4 h-4 text-[#25D366]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.275-.102-.475-.15-.676.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.235-.244-.589-.493-.51-.676-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.032-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.996h-.008c-1.776 0-3.517-.478-5.045-1.383l-.362-.215-3.75 1.002.999-3.65-.236-.375c-1.005-1.6-1.536-3.456-1.536-5.36 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.186 1.042 7.076 2.932s2.93 4.405 2.928 7.08c-.002 5.52-4.492 10.01-10.014 10.01zM19.78 4.22A11.002 11.002 0 0 0 12.04 1C5.975 1 1.025 5.95 1.022 12.018c0 1.938.505 3.832 1.464 5.495l-1.558 5.69 5.83-1.528A10.98 10.98 0 0 0 12.04 23c6.066 0 11.015-4.95 11.018-11.018 0-2.94-1.144-5.706-3.278-7.762z" />
          </svg>
          <span className="">Chat on WhatsApp:</span>
          <a
            className="text-[#C084FC] hover:text-white hover:underline font-semibold transition-colors"
            href="https://wa.me/919395707581"
            rel="noopener noreferrer"
            target="_blank"
          >
            +91 9395707581
          </a>
        </div>
      </div>
    </section>
    /* END: ContactBandSection */
  );
}
