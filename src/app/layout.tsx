import type { Metadata } from "next";
import { clashDisplay, generalSans } from "@/lib/fonts";
import { siteContent } from "@/config/site-content";
import { LenisProvider } from "@/providers/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  metadataBase: new URL(siteContent.seo.url),
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: siteContent.seo.url,
    siteName: siteContent.company.name,
    locale: siteContent.seo.locale,
    type: "website",
    images: [siteContent.seo.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${clashDisplay.variable} ${generalSans.variable}`}>
      <body>
        <LenisProvider>
          {children}
          <div className="grain-overlay" aria-hidden="true" />
        </LenisProvider>
      </body>
    </html>
  );
}
