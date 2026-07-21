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
  metadataBase: new URL("https://hutasana-kitchen-designs.dsc1411.chatgpt.site"),
  title: "Hutasana Intelligent Kitchen Designs LLP",
  description:
    "Production-ready modular kitchen catalogue with B2B quotations, individual kitchen planning, technical specifications, and WhatsApp enquiry.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Hutasana Intelligent Kitchen Designs LLP",
    description:
      "B2B quotations and individual kitchen planning with catalogue layouts, finish packages, technical specifications, and direct WhatsApp enquiry.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hutasana Intelligent Kitchen Designs LLP",
    description:
      "B2B and individual modular kitchen catalogue with technical specifications and direct quotation enquiry.",
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
