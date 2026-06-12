import type { Metadata } from "next";

const industryMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  healthcare: {
    title: "Healthcare Digital Marketing Agency | Hospitals, Clinics, Doctors | Bangalore India",
    description:
      "Specialized digital marketing for healthcare businesses — hospitals, dental clinics, physiotherapy centers, and multispeciality clinics. GMB optimization, patient lead generation, AI appointment bots. 300% growth achieved.",
    keywords: [
      "healthcare digital marketing agency India",
      "hospital marketing agency Bangalore",
      "dental clinic SEO India",
      "doctor SEO Bangalore",
      "healthcare lead generation India",
      "clinic marketing agency Bangalore",
      "medical digital marketing India",
      "hospital website development India",
      "GMB optimization clinic",
      "patient lead generation AI",
    ],
  },
  finance: {
    title: "Finance Digital Marketing Agency | Lead Generation for Banks, NBFCs | India",
    description:
      "Digital marketing for finance companies, wealth advisors, NBFCs, and insurance firms. High-quality lead generation, Meta Ads, SEO, and AI automation. 92% lead quality achieved.",
    keywords: [
      "finance digital marketing agency India",
      "financial services lead generation",
      "NBFC digital marketing India",
      "insurance company SEO India",
      "wealth management marketing India",
      "finance company lead generation Bangalore",
      "banking digital marketing agency",
    ],
  },
  "real-estate": {
    title: "Real Estate Digital Marketing Agency | Property Lead Generation | India",
    description:
      "Digital marketing for real estate developers, agents, and property companies. Lead generation, Google Ads, social media, and AI follow-up automation. Generate qualified buyer and seller leads.",
    keywords: [
      "real estate digital marketing India",
      "property lead generation India",
      "real estate SEO Bangalore",
      "property developer marketing agency",
      "real estate Google Ads India",
      "real estate social media marketing India",
    ],
  },
  ecommerce: {
    title: "E-commerce Digital Marketing Agency | Online Store Growth | India",
    description:
      "Grow your e-commerce business with performance marketing, SEO, Meta & Google Ads, and AI automation. Increase sales, reduce cart abandonment, and scale profitably.",
    keywords: [
      "ecommerce digital marketing India",
      "online store SEO India",
      "ecommerce Google Ads agency Bangalore",
      "Shopify marketing agency India",
      "ecommerce growth agency India",
      "product listing optimization India",
      "D2C marketing agency Bangalore",
    ],
  },
  "tech-saas": {
    title: "Tech & SaaS Digital Marketing Agency | B2B Growth | India",
    description:
      "Growth marketing for technology companies and SaaS startups. Content marketing, SEO, demand generation, and AI-powered lead qualification systems for B2B tech businesses.",
    keywords: [
      "SaaS marketing agency India",
      "tech company digital marketing Bangalore",
      "B2B marketing agency India",
      "SaaS SEO agency",
      "technology company marketing India",
      "demand generation agency India",
      "startup marketing agency Bangalore",
    ],
  },
  education: {
    title: "Education Digital Marketing Agency | Student Lead Generation | India",
    description:
      "Digital marketing for schools, colleges, coaching institutes, and ed-tech companies. Student enrollment campaigns, Google Ads, social media marketing, and AI counselor bots.",
    keywords: [
      "education digital marketing agency India",
      "school marketing agency Bangalore",
      "coaching institute lead generation",
      "edtech marketing agency India",
      "student enrollment marketing India",
      "college marketing agency",
      "education SEO India",
    ],
  },
};

const defaultMeta = {
  title: "Industry-Specific Digital Marketing | AuraDigital Services | All Industries India",
  description:
    "Specialized digital marketing solutions for every industry. Healthcare, finance, real estate, e-commerce, tech, and education. AI-powered growth for all business types.",
  keywords: ["industry digital marketing India", "multi-industry marketing agency Bangalore"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = industryMeta[slug] || defaultMeta;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://auradigitalservice.com/industries/${slug}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default function IndustrySlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
