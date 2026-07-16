import Link from "next/link";

export function Header() {
  return (
    <header className="site-nav">
      <Link href="/" className="site-nav-logo" aria-label="Claude Code Decoded — home">
        CLAUDE <span className="outline">CODE</span>
      </Link>
      <Link href="/course" className="site-nav-cta">
        Learn Claude Code with LetsAI →
      </Link>
    </header>
  );
}
