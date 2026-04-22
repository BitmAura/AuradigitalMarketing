import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuraDigital Service | AI + Digital Growth Specialist",
  description: "D Pradeep Kumar helps businesses and entrepreneurs scale with AI automation, SEO, and high-converting marketing systems.",
  keywords: "Digital Marketing, AI Automation, SEO, Local SEO, GMB Domination, D Pradeep Kumar, AuraDigital Service",
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
