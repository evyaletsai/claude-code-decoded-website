import type { ReactNode } from "react";

export function renderEmphasized(text: string, phrases?: string[]): ReactNode {
  if (!phrases || phrases.length === 0) return text;

  const pattern = new RegExp(
    `(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    phrases.includes(part) ? <strong key={i}>{part}</strong> : part
  );
}
