import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";

import { Analytics } from "@/components/Analytics";
import { generateOrganizationSchema } from "@/lib/structured-data";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oxfordeditors.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oxford Editors | Academic Services and Higher Education Support",
    template: "%s | Oxford Editors",
  },
  description:
    "Oxford Editors provides UK-focused academic support including essay writing, dissertation guidance, coursework assistance, editing, proofreading, and research consultation for university students.",
  keywords: [
    "academic writing services UK",
    "essay writing help",
    "dissertation support",
    "coursework assistance",
    "proofreading services",
    "editing services UK",
    "university assignment help",
    "research proposal assistance",
    "UK academic support",
    "higher education services",
    "Oxford Editors",
  ],
  authors: [{ name: "Oxford Editors", url: siteUrl }],
  creator: "Oxford Editors",
  publisher: "Oxford Editors",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Oxford Editors",
    title: "Oxford Editors | Academic Services and Higher Education Support",
    description:
      "Partnering with UK students for academic brilliance through expert-led coursework, dissertation, and project support.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oxford Editors — Academic Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxford Editors | Academic Services and Higher Education Support",
    description:
      "UK-focused academic support including essay writing, dissertation guidance, editing, and research consultation.",
    images: ["/images/og-image.jpg"],
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
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = generateOrganizationSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
