import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rateLimit";
import {
  generateInquiryHtml,
  generateInquiryText,
  sanitizeHeader,
} from "@/lib/email";

// Ensure Node.js runtime for Resend and network APIs
export const runtime = "nodejs";

// Zod validation schema with strict length and format checks
const InquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full Name must be at least 2 characters.")
    .max(100, "Full Name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(120, "Email address cannot exceed 120 characters."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number cannot exceed 30 characters.")
    .optional()
    .or(z.literal("")),
  category: z
    .string()
    .trim()
    .min(2, "Inquiry Category is required.")
    .max(100, "Category cannot exceed 100 characters."),
  details: z
    .string()
    .trim()
    .min(5, "Please provide manuscript or inquiry details (at least 5 characters).")
    .max(3000, "Details cannot exceed 3,000 characters."),
  sourceForm: z.string().trim().max(100).optional(),
  hp_website: z.string().optional(),
  renderTime: z.number().optional(),
});

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "unknown-ip";
}

function isOriginAllowed(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const host = req.headers.get("host");

  // If neither origin nor referer is provided (direct server calls / curl), allow
  if (!origin && !referer) return true;

  const target = origin || referer || "";

  // Allow localhost & loopback during development
  if (target.includes("localhost") || target.includes("127.0.0.1")) {
    return true;
  }

  // Allow current host
  if (host && target.includes(host)) {
    return true;
  }

  // Allow production domain
  if (target.includes("edunaazpublication.com") || target.includes("edunaaz")) {
    return true;
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Basic Same-Origin Verification
    if (!isOriginAllowed(req)) {
      return NextResponse.json(
        { error: "Forbidden: Cross-origin request rejected." },
        { status: 403 }
      );
    }

    // 2. IP Rate Limiting (5 requests per 15 minutes)
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.success) {
      const minutesRemaining = Math.ceil(rateLimit.resetMs / 60000);
      return NextResponse.json(
        {
          error: `Too many inquiries submitted from this connection. Please wait ${minutesRemaining} minute(s) before trying again.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(rateLimit.resetMs / 1000).toString(),
          },
        }
      );
    }

    // 3. Parse JSON Body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload. Expected JSON." },
        { status: 400 }
      );
    }

    // 4. Validate with Zod Schema
    const parseResult = InquirySchema.safeParse(body);
    if (!parseResult.success) {
      const firstIssue = parseResult.error.issues[0];
      return NextResponse.json(
        { error: firstIssue ? firstIssue.message : "Validation failed." },
        { status: 422 }
      );
    }

    const data = parseResult.data;

    // 5. Spam Bot Mitigation - Honeypot Check
    // If the hidden honeypot field was filled, silently pretend success
    if (data.hp_website && data.hp_website.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Inquiry received. An editor will contact you shortly.",
      });
    }

    // 6. Spam Bot Mitigation - Submission Time Check
    // Human submissions typically take > 1.5 seconds from form display
    if (data.renderTime && typeof data.renderTime === "number") {
      const elapsedMs = Date.now() - data.renderTime;
      if (elapsedMs > 0 && elapsedMs < 1200) {
        return NextResponse.json({
          success: true,
          message: "Inquiry received. An editor will contact you shortly.",
        });
      }
    }

    // 7. Check Resend API Key Configuration
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey.startsWith("re_xxxx") || apiKey.trim() === "") {
      console.warn(
        "[Resend Warning] RESEND_API_KEY is not configured or is a placeholder in .env.local."
      );
      return NextResponse.json(
        {
          error:
            "Email service configuration pending. Please configure RESEND_API_KEY in .env.local.",
        },
        { status: 503 }
      );
    }

    // 8. Prepare Email Dispatch via Resend
    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      "EDUNAAZ Publication <onboarding@resend.dev>";
    const toAddress =
      process.env.RESEND_TO_EMAIL || "editor@edunaazpublication.com";

    const cleanName = sanitizeHeader(data.name);
    const cleanEmail = sanitizeHeader(data.email);
    const cleanCategory = sanitizeHeader(data.category);

    const emailSubject = `New Website Inquiry – ${cleanCategory} [${cleanName}]`;

    const htmlContent = generateInquiryHtml({
      name: data.name,
      email: data.email,
      phone: data.phone,
      category: data.category,
      details: data.details,
      sourceForm: data.sourceForm,
      submittedAt: new Date(),
    });

    const textContent = generateInquiryText({
      name: data.name,
      email: data.email,
      phone: data.phone,
      category: data.category,
      details: data.details,
      sourceForm: data.sourceForm,
      submittedAt: new Date(),
    });

    // 9. Send Email via Resend
    const response = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: cleanEmail,
      subject: emailSubject,
      html: htmlContent,
      text: textContent,
    });

    if (response.error) {
      console.error("[Resend Error]", response.error.message);
      return NextResponse.json(
        {
          error:
            response.error.message ||
            "Unable to deliver inquiry email. Please try again or chat with us on WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      id: response.data?.id,
      message:
        "Inquiry received successfully. An editorial advisor will contact you shortly.",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Inquiry API Exception]", message);
    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred while processing your inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}

