import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hutasana Intelligent Kitchen Designs LLP",
  description:
    "Modern modular kitchen catalogue for B2B quotations and individual kitchen design enquiries.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Hutasana Intelligent Kitchen Designs LLP",
    description:
      "Specification-first modular kitchens for builders, dealers, contractors, and homeowners.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hutasana Intelligent Kitchen Designs LLP",
    description:
      "B2B and individual modular kitchen catalogue with technical specifications.",
    images: ["/og.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
