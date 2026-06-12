import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | AI & Growth Strategies | AuraDigital Services",
  description:
    "Expert insights on digital marketing, SEO, AI automation, and business growth strategies. Learn from AuraDigital's proven frameworks for scaling businesses across all industries in India.",
  keywords: [
    "digital marketing blog India",
    "SEO tips for Indian businesses",
    "AI marketing strategies blog",
    "business growth tips India",
    "digital marketing insights Bangalore",
    "AEO optimization blog",
    "GEO optimization strategies",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog | AI Growth Strategies | AuraDigital",
    description:
      "Expert insights on digital marketing, AI automation, SEO, and scaling businesses in India.",
    url: "https://auradigitalservice.com/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
