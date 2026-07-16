import Link from "next/link";

export function CourseTeaser() {
  return (
    <section className="course-teaser">
      <div className="course-teaser-inner">
        <p className="course-teaser-eyebrow">{"// go deeper"}</p>
        <h2 className="course-teaser-title">Ready to actually use Claude Code?</h2>
        <p className="course-teaser-sub">
          The glossary gets you fluent in the vocabulary. The LetsAI course gets you fluent in the
          workflow — from your first prompt to shipping automations.
        </p>
        <Link href="/course" className="course-teaser-cta">
          Explore the Claude Code course →
        </Link>
      </div>
    </section>
  );
}
