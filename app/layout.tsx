import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hustashana-modular-kitchen.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Hustashana Intelligent Kitchen Designs LLP - Engineered Modular Kitchens for Projects and Homes",
    template: "%s | Hustashana Intelligent Kitchen Designs LLP",
  },
  description:
    "Premium modular kitchen design, specification, quotation, production, and installation for B2B projects and individual homes by Hustashana Intelligent Kitchen Designs LLP.",
  applicationName: "Hustashana Kitchen Designs",
  authors: [{ name: "Hustashana Intelligent Kitchen Designs LLP" }],
  creator: "Hustashana Intelligent Kitchen Designs LLP",
  publisher: "Hustashana Intelligent Kitchen Designs LLP",
  keywords: [
    "modular kitchen",
    "modular kitchen design",
    "B2B kitchen quotation",
    "kitchen catalogue",
    "kitchen interiors",
    "Hustashana",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hustashana Intelligent Kitchen Designs LLP",
    title:
      "Hustashana Intelligent Kitchen Designs LLP - Engineered Modular Kitchens",
    description:
      "Design, specification, quotation, production, and installation for B2B modular kitchen projects and individual homes.",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Hustashana Intelligent Kitchen Designs LLP logo and modular kitchen preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hustashana Intelligent Kitchen Designs LLP - Engineered Modular Kitchens",
    description:
      "B2B and individual modular kitchen catalogue with technical specifications, workflow clarity, and WhatsApp quotation enquiry.",
    images: ["/og-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${sora.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
