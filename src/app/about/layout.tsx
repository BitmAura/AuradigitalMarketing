import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AuraDigital | 6+ Years Digital Marketing Expertise | Bangalore, India",
  description:
    "Meet the team behind AuraDigital Services. Founded by Pradeep Kumar with 6+ years of digital marketing and AI expertise. Trusted by 50+ businesses across healthcare, finance, real estate, e-commerce, and education.",
  keywords: [
    "AuraDigital Services about",
    "digital marketing agency founder Bangalore",
    "Pradeep Kumar digital marketing",
    "AI marketing expert India",
    "best digital marketing agency Bangalore",
    "digital marketing agency India",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AuraDigital | 6+ Years Digital Marketing & AI Expertise",
    description:
      "Founded by Pradeep Kumar with 6+ years of experience. Helping businesses across all industries transform digitally with AI-powered marketing solutions.",
    url: "https://auradigitalservice.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
