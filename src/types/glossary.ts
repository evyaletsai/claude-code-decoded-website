export type GlossaryCategory =
  | "core"
  | "tools"
  | "memory"
  | "commands"
  | "arch";

export interface GlossaryCategoryMeta {
  id: GlossaryCategory;
  label: string;
}

export interface GlossaryTerm {
  id: string;
  index: string;
  category: GlossaryCategory;
  categoryLabel: string;
  term: string;
  description: string;
  emphasizedPhrases?: string[];
}
