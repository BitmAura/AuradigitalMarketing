import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuraDigital Service | AI + Digital Growth Specialist",
  description: "Dr. Pradeep Kumar helps local businesses and clinics scale with AI automation, SEO, and high-converting marketing systems.",
  keywords: "Digital Marketing, AI Automation, SEO, Local SEO, GMB Domination, Clinic Marketing, Dr. Pradeep Kumar, AuraDigital Service",
  openGraph: {
    title: "AuraDigital Service | AI + Digital Growth Specialist",
    description: "Scale your local business with AI-powered marketing systems.",
    type: "website",
    url: "https://auradigital.service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
