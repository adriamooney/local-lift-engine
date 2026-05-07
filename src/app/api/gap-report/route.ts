import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  businessName?: string;
  city?: string;
  website?: string;
  email?: string;
};

/** Vercel/UI copy-paste often adds quotes or trailing newlines */
function readEnv(key: string): string | undefined {
  const raw = process.env[key];
  if (raw == null || raw === "") return undefined;
  let v = raw.trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim();
  }
  return v || undefined;
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function safeSubject(businessName: string) {
  const oneLine = businessName.replace(/\s+/g, " ").replace(/[\r\n]+/g, " ").trim();
  const clipped = oneLine.slice(0, 150);
  return `Gap Report: ${clipped || "Request"}`;
}

function resendUserMessage(code: string, apiMessage: string): string {
  switch (code) {
    case "invalid_from_address":
      return "Email sender is not allowed. In Resend, verify your domain and use a from address on that domain (or set RESEND_FROM explicitly).";
    case "validation_error":
    case "invalid_parameter":
    case "missing_required_field":
      return apiMessage || "Invalid email request. Check RESEND_API_KEY and CONTACT_EMAIL in your project settings.";
    case "invalid_api_key":
    case "missing_api_key":
    case "restricted_api_key":
      return "Resend API key is missing or invalid. Check RESEND_API_KEY in Vercel environment variables.";
    case "monthly_quota_exceeded":
    case "daily_quota_exceeded":
    case "rate_limit_exceeded":
      return "Email quota exceeded. Try again later or upgrade Resend.";
    default:
      return "Could not send message. Check Vercel logs and Resend dashboard. If you use onboarding@resend.dev, recipients may be limited — verify your domain and use a from address on that domain.";
  }
}

export async function POST(request: Request) {
  const apiKey = readEnv("RESEND_API_KEY");
  const contactEmail = readEnv("CONTACT_EMAIL");
  const fromEnv = readEnv("RESEND_FROM"); // optional
  const from =
    fromEnv ||
    (contactEmail && /@localliftengine\.com\s*>?$/.test(contactEmail)
      ? `Local Lift Engine <${contactEmail.replace(/[<>]/g, "").trim()}>`
      : "Local Lift Engine <onboarding@resend.dev>");

  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured." },
      { status: 500 }
    );
  }
  if (!contactEmail) {
    return NextResponse.json(
      { error: "CONTACT_EMAIL is not configured." },
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
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
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

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: contactEmail,
      replyTo: email,
      subject: safeSubject(businessName),
      text,
      html,
    });

    if (error) {
      console.error("[gap-report] Resend error:", JSON.stringify(error));
      const hint = resendUserMessage(error.name, error.message);
      return NextResponse.json(
        {
          error: hint,
          code: error.name,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("[gap-report] Uncaught error:", err);
    return NextResponse.json(
      {
        error:
          "Server error while sending email. Check function logs and Resend configuration.",
      },
      { status: 500 }
    );
  }
}
