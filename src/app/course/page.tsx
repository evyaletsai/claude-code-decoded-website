import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude Code Course — Coming Soon | Claude Code Decoded",
  description: "The LetsAI Claude Code course page is coming soon.",
};

export default function CoursePage() {
  return (
    <main id="content" className="placeholder-page">
      <h1>The course page is on its way</h1>
      <p>
        This page will present the full LetsAI Claude Code course — curriculum, format,
        instructors, and registration. For now, head back to the glossary.
      </p>
      <Link href="/" className="site-nav-cta">
        ← Back to the glossary
      </Link>
    </main>
  );
}
