import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Notify AuraDigital
    await transporter.sendMail({
      from: `"AuraDigital Website" <${process.env.EMAIL_USER}>`,
      to: "2022auradigital@gmail.com",
      subject: `📧 New Free Growth Audit Request — ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #2563EB, #7C3AED); padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <h2 style="color: white; margin: 0; font-size: 18px;">🎯 New Growth Audit Request</h2>
          </div>
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <p style="color: #475569; font-size: 14px;">Someone just requested a <strong>Free Growth Audit</strong> from the exit intent popup.</p>
            <p style="margin: 12px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p style="color: #64748b; font-size: 13px;">Follow up with a personalised audit report within 24 hours.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation to subscriber
    await transporter.sendMail({
      from: `"AuraDigital Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Free Growth Audit is Being Prepared! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #2563EB, #7C3AED); padding: 24px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Your Free Growth Audit is on the Way! 🎉</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px;">
            <p style="color: #475569; font-size: 15px; line-height: 1.7;">Hi there! Our team will personally audit your current digital presence and send you a comprehensive growth report within <strong>24 hours</strong>.</p>
            <p style="color: #475569; font-size: 14px;">Your audit will include:</p>
            <ul style="color: #475569; font-size: 14px; line-height: 1.8;">
              <li>SEO & keyword gap analysis</li>
              <li>Local search ranking review</li>
              <li>Competitor benchmarking</li>
              <li>Growth opportunity recommendations</li>
            </ul>
            <p style="color: #475569; font-size: 14px;">Questions? Reach us at <a href="mailto:2022auradigital@gmail.com" style="color: #2563eb;">2022auradigital@gmail.com</a> or <a href="https://wa.me/919148868413" style="color: #2563eb;">WhatsApp us</a>.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
