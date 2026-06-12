import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & AI Services | AuraDigital | SEO, Ads, Automation Bangalore",
  description:
    "Comprehensive digital marketing services in Bangalore: SEO, Local SEO, Google Ads, Meta Ads, AI chatbots, CRM automation, SaaS development, and more. Data-driven solutions for all industries.",
  keywords: [
    "digital marketing services Bangalore",
    "SEO services Bangalore",
    "Google Ads agency Bangalore",
    "Meta Ads agency India",
    "AI automation services India",
    "CRM development Bangalore",
    "SaaS development India",
    "local SEO Bangalore",
    "social media marketing Bangalore",
    "content marketing agency India",
    "performance marketing agency Bangalore",
    "email marketing India",
    "WhatsApp marketing agency",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Marketing & AI Services | AuraDigital Services",
    description:
      "SEO, Google Ads, AI Automation, Website Development and more. Full-service digital marketing for all industries.",
    url: "https://auradigitalservice.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
