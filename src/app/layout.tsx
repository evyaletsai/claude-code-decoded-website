import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Orbs } from "@/components/ui/Orbs";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// TODO before launch: replace with the real production domain once it is assigned.
export const metadata: Metadata = {
  metadataBase: new URL("https://claude-code-decoded.vercel.app"),
  title: {
    default: "Claude Code Decoded",
    template: "%s",
  },
  description: "The definitive glossary for the agentic era — Claude Code and the Anthropic ecosystem, decoded.",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Orbs />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
