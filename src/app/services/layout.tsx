import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & AI Services | SEO, AEO, GEO, Ads, Automation | AuraDigital Bangalore",
  description:
    "AuraDigital Services offers SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), Google Ads, Meta Ads, AI automation, WhatsApp bots, CRM development, and SaaS development. Serving all industries across India from Bangalore.",
  keywords: [
    "digital marketing services Bangalore",
    "SEO services Bangalore",
    "AEO answer engine optimization India",
    "GEO generative engine optimization India",
    "AEO GEO agency Bangalore",
    "AI search optimization India",
    "Google Ads agency Bangalore",
    "Meta Ads agency India",
    "AI automation services India",
    "CRM development Bangalore",
    "SaaS development India",
    "local SEO Bangalore",
    "ChatGPT SEO optimization India",
    "Perplexity SEO agency India",
    "voice search optimization Bangalore",
    "featured snippet optimization India",
    "performance marketing agency Bangalore",
    "WhatsApp marketing agency India",
    "email marketing India",
    "social media marketing Bangalore",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Marketing, AEO, GEO & AI Services | AuraDigital Services",
    description:
      "SEO, AEO, GEO, Google Ads, AI Automation, Website Development and more. Full-service digital growth for all industries in India.",
    url: "https://auradigitalservice.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Service Schema — tells Google/AI what services we offer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Digital Marketing & AI Services by AuraDigital",
            description: "Comprehensive digital marketing and AI services for businesses across India",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Service",
                  name: "Search Engine Optimization (SEO)",
                  description: "Comprehensive SEO services to improve Google search rankings and drive organic traffic for businesses in Bangalore and across India.",
                  provider: { "@type": "Organization", name: "AuraDigital Services" },
                  areaServed: "India",
                  serviceType: "SEO",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Service",
                  name: "Answer Engine Optimization (AEO)",
                  description: "AEO positions your business as the authoritative answer for AI-powered search queries from Google AI Overview, Siri, Alexa, and voice assistants.",
                  provider: { "@type": "Organization", name: "AuraDigital Services" },
                  areaServed: "India",
                  serviceType: "AEO",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Service",
                  name: "Generative Engine Optimization (GEO)",
                  description: "GEO optimizes your content to be cited by AI tools like ChatGPT, Google Gemini, Perplexity, and Bing Copilot when users ask questions about your industry.",
                  provider: { "@type": "Organization", name: "AuraDigital Services" },
                  areaServed: "India",
                  serviceType: "GEO",
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Service",
                  name: "Google Ads Management",
                  description: "Strategic Google Search, Display, and YouTube ad campaigns for qualified lead generation and maximum ROI.",
                  provider: { "@type": "Organization", name: "AuraDigital Services" },
                  areaServed: "India",
                  serviceType: "PPC",
                },
              },
              {
                "@type": "ListItem",
                position: 5,
                item: {
                  "@type": "Service",
                  name: "Meta Ads Management",
                  description: "Facebook and Instagram advertising campaigns with precision targeting for lead generation and brand awareness.",
                  provider: { "@type": "Organization", name: "AuraDigital Services" },
                  areaServed: "India",
                  serviceType: "Social Media Advertising",
                },
              },
              {
                "@type": "ListItem",
                position: 6,
                item: {
                  "@type": "Service",
                  name: "AI Automation & Chatbots",
                  description: "Custom AI chatbots, WhatsApp automation, CRM automation, and business workflow automation systems.",
                  provider: { "@type": "Organization", name: "AuraDigital Services" },
                  areaServed: "India",
                  serviceType: "AI Automation",
                },
              },
              {
                "@type": "ListItem",
                position: 7,
                item: {
                  "@type": "Service",
                  name: "Local SEO & GMB Optimization",
                  description: "Google Business Profile optimization and local SEO strategies to rank in Google Maps and local search results.",
                  provider: { "@type": "Organization", name: "AuraDigital Services" },
                  areaServed: ["Bangalore", "Karnataka", "India"],
                  serviceType: "Local SEO",
                },
              },
              {
                "@type": "ListItem",
                position: 8,
                item: {
                  "@type": "Service",
                  name: "SaaS & Custom Software Development",
                  description: "Custom CRM, clinic management, appointment booking, inventory management, and SaaS platform development.",
                  provider: { "@type": "Organization", name: "AuraDigital Services" },
                  areaServed: "India",
                  serviceType: "Software Development",
                },
              },
            ],
          }),
        }}
      />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://auradigitalservice.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://auradigitalservice.com/services" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
