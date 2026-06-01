import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Kortex Consulting — Custom AI & Automation for Your Business",
  description:
    "AI & automation consultancy building generative AI, AI agents, custom RAG, and workflow automation directly into your business — for SMBs to enterprises that want AI built on their own data, in their own environment.",
  keywords: [
    "AI consulting",
    "AI consultancy",
    "AI for business",
    "AI automation",
    "generative AI consulting",
    "custom AI solutions",
    "AI agents",
    "AI implementation",
    "AI strategy",
    "RAG",
    "AI for small business",
    "enterprise AI",
    "AI integration",
    "AI on your data",
    "workflow automation",
    "AI transformation",
  ],
  openGraph: {
    title:
      "Kortex Consulting — Custom AI & Automation for Your Business",
    description:
      "AI that knows your business. Built into your environment. We build generative AI, AI agents, and custom AI solutions for SMBs through enterprises.",
    type: "website",
    siteName: "Kortex Consulting",
    url: "https://kortexconsulting.com",
    images: [
      {
        url: "https://kortexconsulting.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kortex Consulting — AI that knows your business. Built into your environment.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kortex Consulting — Custom AI & Automation for Your Business",
    description:
      "AI that knows your business. Built into your environment. Generative AI, AI agents, custom solutions — from SMB to enterprise.",
    images: ["https://kortexconsulting.com/opengraph-image"],
  },
  metadataBase: new URL("https://kortexconsulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
