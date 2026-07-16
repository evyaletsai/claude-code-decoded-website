import type { Metadata } from "next";
import { Ticker } from "@/components/glossary/Ticker";
import { Hero } from "@/components/glossary/Hero";
import { CardGrid } from "@/components/glossary/CardGrid";
import { CourseTeaser } from "@/components/glossary/CourseTeaser";
import { GLOSSARY_TERMS } from "@/content/glossary";

export const metadata: Metadata = {
  title: "Claude Code Decoded — The Agentic Era Glossary",
  description:
    "20 essential Claude Code and Anthropic ecosystem concepts, decoded — from agentic mode and MCP to subagents and headless mode.",
  openGraph: {
    title: "Claude Code Decoded — The Agentic Era Glossary",
    description:
      "20 essential Claude Code and Anthropic ecosystem concepts, decoded — from agentic mode and MCP to subagents and headless mode.",
    type: "website",
    images: ["/social/og-placeholder.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Decoded — The Agentic Era Glossary",
    description:
      "20 essential Claude Code and Anthropic ecosystem concepts, decoded — from agentic mode and MCP to subagents and headless mode.",
    images: ["/social/og-placeholder.svg"],
  },
};

export default function Home() {
  return (
    <>
      <Ticker />
      <Hero />
      <CardGrid terms={GLOSSARY_TERMS} />
      <CourseTeaser />
    </>
  );
}
