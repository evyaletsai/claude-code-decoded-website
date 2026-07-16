import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        CLAUDE <span className="outline">CODE</span>
      </div>
      <p className="footer-sub">The agentic era is now. Get fluent.</p>
      <nav className="footer-nav" aria-label="Footer">
        <Link href="/">Glossary</Link>
        <Link href="/course">Course</Link>
      </nav>
      <div className="footer-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="footer-credit">{"// made with claude code, obviously"}</p>
    </footer>
  );
}
