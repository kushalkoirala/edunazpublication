/**
 * Email template generation and security sanitizers for Edunaaz Publication inquiry system.
 */

export interface InquiryEmailData {
  name: string;
  email: string;
  phone?: string;
  category: string;
  details: string;
  sourceForm?: string;
  submittedAt: Date;
}

/**
 * Escapes characters that have special meaning in HTML to prevent HTML injection in emails.
 */
export function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strips carriage returns and line feeds to prevent email header injection (e.g. in Subject or Reply-To).
 */
export function sanitizeHeader(str: string): string {
  if (!str) return "";
  return str.replace(/[\r\n\0]+/g, " ").trim();
}

/**
 * Generates an accessible, branded HTML email template for Resend delivery.
 */
export function generateInquiryHtml(data: InquiryEmailData): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : "Not provided";
  const safeCategory = escapeHtml(data.category);
  const safeDetails = escapeHtml(data.details).replace(/\n/g, "<br/>");
  const safeSource = escapeHtml(data.sourceForm || "Website Inquiry Form");

  // Format date in IST (Indian Standard Time) and UTC
  const formattedIst = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(data.submittedAt);

  // Clean phone number for WhatsApp link
  const rawPhoneDigits = data.phone ? data.phone.replace(/[^0-9]/g, "") : "";
  const whatsappUrl = rawPhoneDigits.length >= 10
    ? `https://wa.me/${rawPhoneDigits.length === 10 ? `91${rawPhoneDigits}` : rawPhoneDigits}`
    : null;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F6F3EE;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1F2023;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #F6F3EE;
      padding: 30px 10px;
    }
    .main {
      background-color: #FFFFFF;
      max-width: 600px;
      margin: 0 auto;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #EBE3D6;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #7B2FBE 0%, #4D1282 100%);
      padding: 30px 24px;
      text-align: center;
      color: #FFFFFF;
    }
    .header-badge {
      display: inline-block;
      padding: 4px 12px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 20px;
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .header-title {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .content {
      padding: 28px 24px;
    }
    .table-details {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .table-details td {
      padding: 10px 12px;
      border-bottom: 1px solid #F0ECE4;
      font-size: 13.5px;
      vertical-align: top;
    }
    .label-col {
      width: 35%;
      font-weight: 600;
      color: #555555;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.08em;
    }
    .value-col {
      color: #1F2023;
    }
    .details-box {
      background-color: #FBF9F6;
      border-left: 4px solid #7B2FBE;
      border-radius: 4px;
      padding: 16px;
      margin-top: 10px;
      font-size: 13.5px;
      line-height: 1.6;
      color: #2D2D2D;
    }
    .footer {
      background-color: #FAF8F5;
      padding: 20px 24px;
      text-align: center;
      border-top: 1px solid #EBE3D6;
      font-size: 11.5px;
      color: #777777;
      line-height: 1.5;
    }
    .action-link {
      color: #7B2FBE;
      text-decoration: none;
      font-weight: 600;
    }
    .whatsapp-badge {
      display: inline-block;
      background-color: #25D366;
      color: #FFFFFF !important;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 11px;
      text-decoration: none;
      font-weight: 600;
      margin-left: 6px;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table class="main" width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td class="header">
          <div class="header-badge">EDUNAAZ PUBLICATION</div>
          <h1 class="header-title">New Academic Inquiry Received</h1>
        </td>
      </tr>
      <tr>
        <td class="content">
          <p style="margin: 0 0 16px 0; font-size: 14px; color: #4B4B4B;">
            A new inquiry has been submitted through the EDUNAAZ Publication website:
          </p>
          <table class="table-details" role="presentation">
            <tr>
              <td class="label-col">Full Name</td>
              <td class="value-col"><strong>${safeName}</strong></td>
            </tr>
            <tr>
              <td class="label-col">Email Address</td>
              <td class="value-col">
                <a href="mailto:${safeEmail}" class="action-link">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td class="label-col">Phone / WhatsApp</td>
              <td class="value-col">
                ${safePhone}
                ${whatsappUrl ? `<a href="${whatsappUrl}" class="whatsapp-badge" target="_blank">Chat on WhatsApp</a>` : ""}
              </td>
            </tr>
            <tr>
              <td class="label-col">Inquiry Category</td>
              <td class="value-col"><span style="color: #7B2FBE; font-weight: 600;">${safeCategory}</span></td>
            </tr>
            <tr>
              <td class="label-col">Submission Channel</td>
              <td class="value-col">${safeSource}</td>
            </tr>
            <tr>
              <td class="label-col">Received At (IST)</td>
              <td class="value-col">${formattedIst}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #555555;">
              Manuscript / Research Details:
            </div>
            <div class="details-box">
              ${safeDetails}
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="footer">
          <strong>EDUNAAZ PUBLICATION (OPC) PRIVATE LIMITED</strong><br/>
          CIN: U85499AS2025OPC028933 | Ministry of Corporate Affairs, Govt. of India<br/>
          Barpeta Road, Assam 781313, India | <a href="mailto:editor@edunaazpublication.com" style="color:#7B2FBE;">editor@edunaazpublication.com</a><br/>
          <span style="font-size: 10px; color: #999999;">Automated inquiry notification sent securely via Resend</span>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}

/**
 * Generates plain text version for multi-part email delivery.
 */
export function generateInquiryText(data: InquiryEmailData): string {
  const formattedIst = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(data.submittedAt);

  return `========================================
NEW ACADEMIC INQUIRY – EDUNAAZ PUBLICATION
========================================

Full Name: ${data.name}
Email Address: ${data.email}
Phone / WhatsApp: ${data.phone || "Not provided"}
Inquiry Category: ${data.category}
Submission Channel: ${data.sourceForm || "Website Form"}
Date & Time (IST): ${formattedIst}

MANUSCRIPT / RESEARCH DETAILS:
----------------------------------------
${data.details}

----------------------------------------
EDUNAAZ PUBLICATION (OPC) PRIVATE LIMITED
CIN: U85499AS2025OPC028933
https://edunaazpublication.com
`;
}

