import { NextResponse } from "next/server";

type InterestType = "demo" | "waitlist" | "feedback";

type FeedbackPayload = {
  workshopName?: string;
  contactName?: string;
  email?: string;
  marketOrLanguage?: string;
  interestType?: string;
  message?: string;
  companyWebsite?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isInterestType(value: string): value is InterestType {
  return value === "demo" || value === "waitlist" || value === "feedback";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getSubject(interestType: InterestType, workshopName: string) {
  const prefix =
    interestType === "demo"
      ? "Demo request"
      : interestType === "waitlist"
        ? "Waitlist request"
        : "Feedback request";

  return `[AutoSlot] ${prefix} - ${workshopName}`;
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.FEEDBACK_TO_EMAIL;

  if (!resendApiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY, RESEND_FROM_EMAIL or FEEDBACK_TO_EMAIL." },
      { status: 500 },
    );
  }

  let payload: FeedbackPayload;

  try {
    payload = (await request.json()) as FeedbackPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (payload.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  const workshopName = payload.workshopName?.trim() ?? "";
  const contactName = payload.contactName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const marketOrLanguage = payload.marketOrLanguage?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const interestType = payload.interestType?.trim() ?? "";

  if (!workshopName || !contactName || !email || !isInterestType(interestType)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const normalizedMessage = message || "-";
  const normalizedMarket = marketOrLanguage || "-";

  const text = [
    `Interest type: ${interestType}`,
    `Workshop: ${workshopName}`,
    `Contact: ${contactName}`,
    `Email: ${email}`,
    `Country / language: ${normalizedMarket}`,
    `Submitted at: ${submittedAt}`,
    "",
    "Message:",
    normalizedMessage,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="margin:0 0 16px">New AutoSlot landing request</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;font-weight:600">Interest type</td><td style="padding:4px 0">${escapeHtml(interestType)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:600">Workshop</td><td style="padding:4px 0">${escapeHtml(workshopName)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:600">Contact</td><td style="padding:4px 0">${escapeHtml(contactName)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td style="padding:4px 0">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:600">Country / language</td><td style="padding:4px 0">${escapeHtml(normalizedMarket)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:600">Submitted at</td><td style="padding:4px 0">${escapeHtml(submittedAt)}</td></tr>
      </table>
      <div style="margin-top:20px">
        <p style="margin:0 0 8px;font-weight:600">Message</p>
        <p style="margin:0;white-space:pre-wrap">${escapeHtml(normalizedMessage)}</p>
      </div>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: getSubject(interestType, workshopName),
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();

    return NextResponse.json(
      { error: "Resend request failed.", details: errorText },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
