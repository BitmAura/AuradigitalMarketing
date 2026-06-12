import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | AuraDigital Services | Digital Marketing Packages India",
  description:
    "Affordable digital marketing and AI automation pricing plans for Indian businesses. Starting at ₹15,000/year for local SEO to enterprise AI packages. Transparent pricing, no hidden fees.",
  keywords: [
    "digital marketing agency pricing India",
    "SEO packages India",
    "digital marketing packages Bangalore",
    "AI automation pricing India",
    "affordable digital marketing agency",
    "digital marketing agency cost India",
    "SEO services price Bangalore",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | AuraDigital Services — Starting ₹15,000/year",
    description:
      "Transparent pricing plans for digital marketing, AI automation, and SaaS development. No hidden fees.",
    url: "https://auradigitalservice.com/pricing",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
