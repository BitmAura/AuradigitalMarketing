import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AuraDigital | Free Consultation | Digital Marketing Agency Bangalore",
  description:
    "Get in touch with AuraDigital Services for a free digital marketing consultation. Call +91 91488 68413 or email 2022auradigital@gmail.com. We help businesses across all industries grow faster with AI-powered solutions.",
  keywords: [
    "contact digital marketing agency Bangalore",
    "digital marketing consultation free",
    "hire digital marketing agency India",
    "SEO agency contact Bangalore",
    "AI marketing agency contact",
    "digital marketing agency phone number Bangalore",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AuraDigital | Free Growth Consultation",
    description:
      "Book your free consultation with AuraDigital Services. +91 91488 68413 | 2022auradigital@gmail.com",
    url: "https://auradigitalservice.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
