import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import LiveChatWidget from "@/components/LiveChatWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AuraDigital Services | #1 Digital Marketing Agency Bangalore | AI, SEO & Automation",
  description:
    "AuraDigital Services — Top-rated digital marketing agency in Bangalore. Expert SEO, Google Ads, Meta Ads, AI automation, chatbots, and SaaS development. Serving healthcare, finance, real estate, e-commerce, and all industries across India. 300% average lead growth.",
  keywords: [
    "digital marketing agency Bangalore",
    "best digital marketing agency Bangalore",
    "SEO agency Bangalore",
    "digital marketing company India",
    "AI marketing agency Bangalore",
    "Google Ads agency Bangalore",
    "Meta Ads agency India",
    "social media marketing Bangalore",
    "SEO services Bangalore",
    "lead generation agency India",
    "AI chatbot development India",
    "CRM automation Bangalore",
    "performance marketing agency India",
    "digital marketing agency near me",
    "top digital marketing agency India",
    "marketing automation agency Bangalore",
    "SaaS development company Bangalore",
    "WhatsApp marketing agency India",
    "local SEO Bangalore",
    "GMB optimization Bangalore",
  ],
  authors: [{ name: "AuraDigital Services", url: "https://auradigitalservice.com" }],
  creator: "AuraDigital Services",
  publisher: "AuraDigital Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://auradigitalservice.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AuraDigital Services | #1 Digital Marketing Agency Bangalore | AI & SEO",
    description:
      "Transform your business with AI-powered digital marketing. SEO, Ads, Automation & SaaS Development. Serving all industries across India. 300% average lead growth.",
    url: "https://auradigitalservice.com",
    siteName: "AuraDigital Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AuraDigital Services - AI-Powered Digital Marketing Agency Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraDigital Services | #1 Digital Marketing Agency Bangalore",
    description:
      "AI-powered digital marketing, SEO, automation, and SaaS development. Serving all industries across India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // TODO: Add your real Google Search Console verification token here
  // verification: {
  //   google: "your_actual_google_verification_token",
  // },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema.org markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AuraDigital Services",
              url: "https://auradigitalservice.com",
              logo: "https://auradigitalservice.com/logo.jpg",
              description:
                "AI-powered digital marketing, automation, and SaaS development agency serving businesses across multiple industries.",
              foundingDate: "2019",
              founder: {
                "@type": "Person",
                name: "Pradeep Kumar",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-91488-68413",
                contactType: "sales",
                email: "2022auradigital@gmail.com",
                availableLanguage: ["English", "Kannada", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              sameAs: [
                "https://linkedin.com/company/auradigitalservice",
              ],
            }),
          }}
        />
        {/* Schema.org WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AuraDigital Services",
              url: "https://auradigitalservice.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://auradigitalservice.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "AuraDigital Services",
              description:
                "AI-powered digital marketing and automation agency for businesses across all industries.",
              areaServed: ["Bangalore", "India", "Worldwide"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Marketing Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare Marketing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Development" } },
                ],
              },
            }),
          }}
        />
        {/* Schema.org FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What makes AuraDigital different from other digital marketing agencies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We combine AI-powered automation with traditional digital marketing to deliver measurable results. Our unique approach integrates custom AI solutions, data-driven strategies, and deep industry expertise across healthcare, finance, real estate, e-commerce, and technology.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What digital marketing services do you offer in Bangalore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer SEO, Local SEO, GMB Optimization, Google Ads, Meta Ads, Social Media Marketing, Content Marketing, AI Chatbots, CRM Automation, Website Development, and SaaS Development.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to see results from digital marketing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most clients see measurable improvements within 30-60 days. SEO typically shows significant results in 3-6 months, while paid advertising campaigns generate leads within days.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the cost of digital marketing services in Bangalore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our pricing starts at ₹15,000/year for local SEO packages. Monthly retainers start at ₹24,999/month for comprehensive digital marketing. Enterprise AI solutions are custom-quoted. Contact us for a free consultation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you serve businesses outside Bangalore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We work with businesses across all of India and internationally. Our digital-first approach means we can deliver results for clients anywhere in the world.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} ${inter.variable} antialiased bg-white text-slate-900 dark:bg-aura-950 dark:text-slate-100 transition-colors duration-300`}
      >
        <ThemeProvider defaultTheme="system" storageKey="aura-theme">
          {children}
          <ExitIntentPopup />
          <LiveChatWidget />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

