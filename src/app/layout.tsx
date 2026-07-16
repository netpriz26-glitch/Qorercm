import type { Metadata, Viewport } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import {
  ConsentDefaults,
  GoogleTagManagerScript,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.tagline} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.tagline} | ${siteConfig.name}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.tagline} | ${siteConfig.name}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <ConsentDefaults />
        <GoogleTagManagerScript />
        <JsonLd data={organizationSchema()} />
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <GoogleTagManagerNoScript />
        <Header />
        <main id="main-content" className="flex-1 pb-16 pt-[76px] sm:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
