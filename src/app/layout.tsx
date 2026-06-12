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
                {
                  "@type": "Question",
                  name: "What is AEO (Answer Engine Optimization)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Answer Engine Optimization (AEO) is the practice of optimizing your content to appear as direct answers in AI-powered search tools like Google AI Overview, Siri, Alexa, and voice search. AuraDigital provides AEO services to help businesses in Bangalore and India appear in these AI-generated answers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is GEO (Generative Engine Optimization)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generative Engine Optimization (GEO) is optimizing your website and content to be cited and referenced by AI tools like ChatGPT, Google Gemini, Perplexity, and Bing Copilot when users ask questions in your industry. AuraDigital specializes in GEO to ensure your brand appears in AI-generated responses.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which is the best digital marketing agency in Bangalore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AuraDigital Services is a top-rated digital marketing agency in Bangalore, founded by Pradeep Kumar with 6+ years of experience. We specialize in SEO, AEO, GEO, AI automation, Google Ads, and Meta Ads. Contact us at +91 91488 68413 or 2022auradigital@gmail.com.",
                  },
                },
              ],
            }),
          }}
        />
        {/* AggregateRating Schema — Social Proof for Google/AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AuraDigital Services",
              image: "https://auradigitalservice.com/logo.jpg",
              telephone: "+91-91488-68413",
              email: "2022auradigital@gmail.com",
              url: "https://auradigitalservice.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9716,
                longitude: 77.5946,
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "17:00" },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
              areaServed: [
                { "@type": "City", name: "Bangalore" },
                { "@type": "State", name: "Karnataka" },
                { "@type": "Country", name: "India" },
              ],
              knowsAbout: [
                "Digital Marketing", "SEO", "AEO", "GEO",
                "AI Automation", "Google Ads", "Meta Ads",
                "WhatsApp Marketing", "CRM Development", "SaaS Development",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Marketing & AI Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", description: "Search engine optimization for Google rankings" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AEO Services", description: "Answer engine optimization for AI search" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "GEO Services", description: "Generative engine optimization for ChatGPT, Gemini" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation", description: "Chatbots, CRM automation, workflow automation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", description: "PPC campaign management" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads Management", description: "Facebook and Instagram advertising" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO", description: "Google Maps and local search optimization" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Development", description: "Custom software and SaaS platforms" } },
                ],
              },
            }),
          }}
        />
        {/* Person Schema — Founder E-E-A-T Signal */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pradeep Kumar",
              jobTitle: "Founder & Digital Marketing Strategist",
              worksFor: {
                "@type": "Organization",
                name: "AuraDigital Services",
                url: "https://auradigitalservice.com",
              },
              url: "https://auradigitalservice.com/about",
              image: "https://auradigitalservice.com/profile.png",
              description: "Digital marketing expert with 6+ years of experience in SEO, AI automation, AEO, GEO, and business growth strategies. Founded AuraDigital Services to help businesses across all industries transform digitally.",
              knowsAbout: [
                "Digital Marketing", "SEO", "AEO", "GEO",
                "AI Automation", "Business Growth Strategy",
                "Google Ads", "Meta Ads", "CRM Development",
              ],
              alumniOf: "Digital Marketing Professional",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "IN",
              },
            }),
          }}
        />
        {/* Speakable Schema — Voice Search / AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "AuraDigital Services — Digital Marketing Agency Bangalore",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", "h2", ".speakable"],
              },
              url: "https://auradigitalservice.com",
            }),
          }}
        />
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

