import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const GA_ID = "G-M04H6KFB8Q";

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
  title: "AI Consulting & Automation for Business | Kortex",
  description:
    "Kortex builds AI agents, automation, and operational systems into your business. AI consulting for SMBs across the Washington DC metro and nationwide.",
  alternates: { canonical: "https://kortexconsulting.com" },
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) — static in <head> so it's detected by Tag
            Assistant / GA install-check, and applies to every route. */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
