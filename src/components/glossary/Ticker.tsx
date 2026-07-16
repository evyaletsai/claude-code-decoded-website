import { GLOSSARY_TERMS } from "@/content/glossary";

export function Ticker() {
  const items = GLOSSARY_TERMS.map((t) => t.term);
  const track = (
    <span>
      {items.map((term, i) => (
        <span key={i}>
          <em>◆</em>
          {term}
          &nbsp;&nbsp;&nbsp;
        </span>
      ))}
    </span>
  );

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {track}
        {track}
      </div>
    </div>
  );
}
