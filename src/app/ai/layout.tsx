import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Solutions & Automation | AuraDigital | Chatbots, CRM, Lead Gen India",
  description:
    "AI-powered marketing automation, chatbots, voice agents, lead generation systems, CRM automation, and WhatsApp bots. Transform your business with intelligent AI solutions from AuraDigital Services, Bangalore.",
  keywords: [
    "AI marketing automation India",
    "AI chatbot agency Bangalore",
    "WhatsApp bot development India",
    "AI lead generation system",
    "CRM automation Bangalore",
    "AI voice agent India",
    "marketing automation agency Bangalore",
    "business automation India",
    "AI solutions for business India",
    "workflow automation Bangalore",
  ],
  alternates: {
    canonical: "/ai",
  },
  openGraph: {
    title: "AI Marketing Solutions & Business Automation | AuraDigital",
    description:
      "Chatbots, voice agents, CRM automation, lead generation AI. Transforming Indian businesses with intelligent automation.",
    url: "https://auradigitalservice.com/ai",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
