import { NextResponse } from "next/server";

// Delivery is via Resend when RESEND_API_KEY is set. Without it this route
// returns 503 and the form tells the visitor to call instead — deliberately.
// The previous form faked success with a timer and delivered nothing, which
// loses leads silently. A visible failure is recoverable; a silent one is not.
const TO = process.env.CONTACT_TO ?? "hello@kortexconsulting.com";
const FROM = process.env.CONTACT_FROM ?? "Kortex Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const company = (body.company ?? "").trim();
  const phone = (body.phone ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }
  // Honeypot: a real person leaves this empty.
  if ((body.website ?? "").trim()) return NextResponse.json({ ok: true });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[contact] RESEND_API_KEY is not set — enquiry not delivered:", { name, email, company });
    return NextResponse.json(
      { error: "We couldn't send that just now. Please call (301) 889-8546 — it goes to a person." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Website enquiry — ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        company ? `Company: ${company}` : null,
        phone ? `Phone:   ${phone}` : null,
        "",
        message,
      ].filter(Boolean).join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend rejected the send:", res.status, await res.text());
    return NextResponse.json(
      { error: "We couldn't send that just now. Please call (301) 889-8546 — it goes to a person." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
