import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
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
    url: "https://staging.kortexconsulting.com",
    images: [
      {
        url: "https://staging.kortexconsulting.com/opengraph-image",
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
    images: ["https://staging.kortexconsulting.com/opengraph-image"],
  },
  // While staging is the live Next.js host and apex serves the coming-soon page,
  // metadataBase must point to staging so auto-generated URLs (notably the
  // file-convention og image at /opengraph-image) resolve to the correct origin.
  // Revert to https://kortexconsulting.com once the Next.js app moves to the apex.
  metadataBase: new URL("https://staging.kortexconsulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
