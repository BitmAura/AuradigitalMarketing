import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Proven Digital Marketing Results | AuraDigital Services",
  description:
    "Real results from real businesses. See how AuraDigital achieved 300% lead growth, Top 3 Google rankings, and 10X ROI for clients across healthcare, finance, e-commerce, and more.",
  keywords: [
    "digital marketing case studies India",
    "SEO results Bangalore agency",
    "lead generation case study",
    "digital marketing ROI India",
    "best digital marketing results India",
    "Google ranking case study Bangalore",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | 300% Growth & Top Google Rankings | AuraDigital",
    description:
      "See how we achieved 300% lead growth, Top 3 Google rankings, and 10X ROI for our clients.",
    url: "https://auradigitalservice.com/case-studies",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
