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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hutasana-kitchen-designs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Hutasana Intelligent Kitchen Designs LLP - Engineered Modular Kitchens for Projects and Homes",
    template: "%s | Hutasana Intelligent Kitchen Designs LLP",
  },
  description:
    "Premium modular kitchen design, specification, quotation, production, and installation for B2B projects and individual homes by Hutasana Intelligent Kitchen Designs LLP.",
  applicationName: "Hutasana Kitchen Designs",
  authors: [{ name: "Hutasana Intelligent Kitchen Designs LLP" }],
  creator: "Hutasana Intelligent Kitchen Designs LLP",
  publisher: "Hutasana Intelligent Kitchen Designs LLP",
  keywords: [
    "modular kitchen",
    "modular kitchen design",
    "B2B kitchen quotation",
    "kitchen catalogue",
    "kitchen interiors",
    "Hutasana",
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
    siteName: "Hutasana Intelligent Kitchen Designs LLP",
    title:
      "Hutasana Intelligent Kitchen Designs LLP - Engineered Modular Kitchens",
    description:
      "Design, specification, quotation, production, and installation for B2B modular kitchen projects and individual homes.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hutasana Intelligent Kitchen Designs LLP - Engineered Modular Kitchens",
    description:
      "B2B and individual modular kitchen catalogue with technical specifications, workflow clarity, and WhatsApp quotation enquiry.",
    images: ["/og.png"],
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
