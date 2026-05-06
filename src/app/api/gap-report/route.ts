import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

type Body = {
  businessName?: string;
  city?: string;
  website?: string;
  email?: string;
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured." },
      { status: 500 }
    );
  }

  const from = process.env.RESEND_FROM;
  const to = process.env.LEAD_EMAIL_TO;
  if (!from || !to) {
    return NextResponse.json(
      { error: "RESEND_FROM or LEAD_EMAIL_TO is not configured." },
      { status: 500 }
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const businessName = body.businessName?.trim() ?? "";
  const city = body.city?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const email = body.email?.trim() ?? "";

  if (!businessName || !email) {
    return NextResponse.json(
      { error: "Business name and email are required." },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const safe = {
    businessName: escapeHtml(businessName),
    city: escapeHtml(city),
    website: escapeHtml(website),
    email: escapeHtml(email),
  };

  const text = [
    `New Gap Report request`,
    ``,
    `Business: ${businessName}`,
    `City: ${city || "—"}`,
    `Website: ${website || "—"}`,
    `Email: ${email}`,
  ].join("\n");

  const html = `
    <h2>New Gap Report request</h2>
    <table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;">
      <tr><td style="padding:6px 12px 6px 0;color:#666;">Business</td><td style="padding:6px 0;"><strong>${safe.businessName}</strong></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666;">City</td><td style="padding:6px 0;">${safe.city || "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666;">Website</td><td style="padding:6px 0;">${safe.website || "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
    </table>
  `;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Gap Report: ${businessName}`,
    text,
    html,
  });

  if (error) {
    console.error("[gap-report] Resend error:", error);
    return NextResponse.json(
      { error: "Could not send message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
