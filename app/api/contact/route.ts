import { NextResponse } from "next/server";
import { Resend } from "resend";

import { db } from "@/lib/db";
import { contactSubmissions } from "@/lib/db/schema";
import { contactSchema } from "@/lib/validations/contact";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const contactEmail = process.env.CONTACT_EMAIL || "info@oxfordeditors.co.uk";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Invalid form data.";
      return NextResponse.json({ message: firstError }, { status: 400 });
    }

    const { name, email, phone, subject, message } = result.data;

    // Save to database
    await db.insert(contactSubmissions).values({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
    });

    // Send email notification
    if (resend) {
      await resend.emails.send({
        from: "Oxford Editors <onboarding@resend.dev>",
        to: contactEmail,
        replyTo: email,
        subject: subject
          ? `New Contact: ${subject}`
          : `New Contact Submission from ${name}`,
        html: buildEmailHtml({ name, email, phone, subject, message }),
      });
    }

    return NextResponse.json({
      message: "Thank you for getting in touch. We'll respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}

function buildEmailHtml({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const rows = [
    { label: "Name", value: name },
    { label: "Email", value: `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>` },
    ...(phone ? [{ label: "Phone", value: escapeHtml(phone) }] : []),
    ...(subject ? [{ label: "Subject", value: escapeHtml(subject) }] : []),
  ];

  const tableRows = rows
    .map(
      (r) =>
        `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#1e293b;white-space:nowrap;vertical-align:top">${r.label}</td>
          <td style="padding:8px 12px;color:#334155">${r.value}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0f172a;padding:24px 28px;border-radius:12px 12px 0 0">
        <h1 style="margin:0;font-size:20px;color:#ffffff">New Contact Submission</h1>
        <p style="margin:6px 0 0;font-size:14px;color:#94a3b8">Oxford Editors Website</p>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:none;padding:24px 28px;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${tableRows}
        </table>
        <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#1e293b">Message</p>
          <p style="margin:0;font-size:14px;color:#334155;white-space:pre-line;line-height:1.6">${escapeHtml(message)}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#94a3b8">
          This message was submitted via the Oxford Editors contact form. You can reply directly to
          <a href="mailto:${escapeHtml(email)}" style="color:#2563eb">${escapeHtml(email)}</a>.
        </p>
      </div>
    </div>
  `;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
