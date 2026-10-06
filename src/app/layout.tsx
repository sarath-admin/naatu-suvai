import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteData.restaurantName} | ${siteData.tagline}`,
  description: siteData.description,
  openGraph: {
    title: `${siteData.restaurantName} | ${siteData.tagline}`,
    description: siteData.description,
    type: 'website',
    locale: 'en_IN',
    siteName: siteData.restaurantName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.restaurantName} | ${siteData.tagline}`,
    description: siteData.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteData.restaurantName,
    "image": siteData.gallery[0],
    "@id": "",
    "url": "",
    "telephone": siteData.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteData.address
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "11:00",
        "closes": "23:00"
      }
    ],
    "servesCuisine": ["South Indian", "Kerala", "Tamil"]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-brand-cream text-brand-charcoal`}>
        {children}
      </body>
    </html>
  );
}
