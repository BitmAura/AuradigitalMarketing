import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      companyName,
      industry,
      email,
      phoneNumber,
      servicesInterestedIn,
      projectBudget,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"AuraDigital Website" <${process.env.EMAIL_USER}>`,
      to: "2022auradigital@gmail.com",
      replyTo: email,
      subject: `🚀 New Lead: ${name} — ${companyName || "Individual"} (${industry || "Unknown Industry"})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #2563EB, #7C3AED); padding: 24px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Lead from AuraDigital Website</h1>
          </div>
          
          <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
            <h2 style="color: #1e293b; font-size: 16px; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 40%;">Full Name</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${companyName || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Industry</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${industry || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb; font-size: 14px;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phoneNumber}" style="color: #2563eb; font-size: 14px;">${phoneNumber || "—"}</a></td></tr>
            </table>
          </div>

          <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
            <h2 style="color: #1e293b; font-size: 16px; margin-top: 0;">Project Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 40%;">Services Interested In</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${servicesInterestedIn || "—"}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Budget Range</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${projectBudget || "Not specified"}</td></tr>
            </table>
          </div>

          <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
            <h2 style="color: #1e293b; font-size: 16px; margin-top: 0;">Message</h2>
            <p style="color: #475569; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background: #eff6ff; border-left: 4px solid #2563EB; padding: 16px; border-radius: 4px;">
            <p style="margin: 0; color: #1e40af; font-size: 13px;">💡 Reply directly to this email to respond to <strong>${name}</strong> at ${email}</p>
          </div>

          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 20px;">Sent from AuraDigital Website Contact Form</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Also send auto-reply to the lead
    const autoReplyOptions = {
      from: `"AuraDigital Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your enquiry, ${name.split(" ")[0]}! 🚀`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #2563EB, #7C3AED); padding: 24px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Thank You, ${name.split(" ")[0]}! 🎉</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px;">
            <p style="color: #475569; font-size: 15px; line-height: 1.7;">We've received your enquiry and our team will reach out to you within <strong>24 hours</strong>.</p>
            <p style="color: #475569; font-size: 15px; line-height: 1.7;">In the meantime, feel free to:</p>
            <ul style="color: #475569; font-size: 14px; line-height: 1.8;">
              <li>WhatsApp us directly: <a href="https://wa.me/919148868413" style="color: #2563eb;">+91 91488 68413</a></li>
              <li>Call us: <a href="tel:919148868413" style="color: #2563eb;">+91 91488 68413</a></li>
              <li>Explore our <a href="https://auradigitalservice.com/case-studies" style="color: #2563eb;">Case Studies</a></li>
            </ul>
            <div style="background: linear-gradient(135deg, #2563EB, #7C3AED); padding: 16px; border-radius: 8px; margin-top: 20px; text-align: center;">
              <p style="color: white; margin: 0; font-size: 14px; font-weight: 600;">AuraDigital Services — AI-Powered Growth Partner</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try WhatsApp or call us directly." },
      { status: 500 }
    );
  }
}
