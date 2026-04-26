import nodemailer from "nodemailer";
import { validateBookingRequest } from "@/app/lib/booking";
import type { BookingRequest } from "@/app/lib/booking";

const isOutlook = process.env.SMTP_USER?.includes("outlook.com") ||
                  process.env.SMTP_USER?.includes("hotmail.com") ||
                  process.env.SMTP_USER?.includes("live.com");

const transporter = nodemailer.createTransport(
  isOutlook
    ? {
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }
    : {
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }
);

function buildEmailHtml(data: BookingRequest): string {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #0a0a0a; padding: 32px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; color: #22c55e; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
          LD Tennis
        </h1>
        <p style="margin: 6px 0 0; color: #71717a; font-size: 14px;">New Booking Request</p>
      </div>

      <div style="background: #111; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #1f1f1f; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #71717a; font-size: 13px; width: 140px; vertical-align: top;">Full Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #ededed; font-size: 14px; font-weight: 600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #71717a; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #ededed; font-size: 14px;">
              <a href="mailto:${data.email}" style="color: #22c55e; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #71717a; font-size: 13px; vertical-align: top;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #ededed; font-size: 14px;">${data.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #71717a; font-size: 13px; vertical-align: top;">Preferred Time</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #ededed; font-size: 14px;">${data.preferredTime}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #71717a; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: #ededed; font-size: 14px; line-height: 1.6;">${data.message || "No message provided"}</td>
          </tr>
        </table>

        <div style="margin-top: 32px; padding: 16px; background: #0d0d0d; border-radius: 8px; border: 1px solid #1f1f1f;">
          <p style="margin: 0; color: #71717a; font-size: 12px;">
            Reply directly to this email to contact <strong style="color: #a1a1aa;">${data.name}</strong> at
            <a href="mailto:${data.email}" style="color: #22c55e; text-decoration: none;">${data.email}</a>
            ${data.phone ? ` or call <strong style="color: #a1a1aa;">${data.phone}</strong>` : ""}.
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request): Promise<Response> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!validateBookingRequest(body)) {
    return Response.json(
      { success: false, message: "Name, email, and preferred time are required." },
      { status: 422 }
    );
  }

  try {
    await transporter.sendMail({
      from: `"LD Tennis" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO ?? "lukedoughtytennis@outlook.com",
      replyTo: body.email,
      subject: `New Booking Request — ${body.name}`,
      html: buildEmailHtml(body),
    });
  } catch (err) {
    console.error("[/api/book] nodemailer error:", err);
    return Response.json(
      { success: false, message: "Failed to send booking request. Please try again." },
      { status: 500 }
    );
  }

  return Response.json(
    { success: true, message: "Booking request sent successfully." },
    { status: 200 }
  );
}
