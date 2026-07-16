import type { GlossaryCategoryMeta, GlossaryTerm } from "@/types/glossary";

export const GLOSSARY_CATEGORIES: GlossaryCategoryMeta[] = [
  { id: "core", label: "Core" },
  { id: "tools", label: "Tools" },
  { id: "memory", label: "Memory" },
  { id: "commands", label: "Commands" },
  { id: "arch", label: "Architecture" },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: "claude-code",
    index: "01",
    category: "core",
    categoryLabel: "Core",
    term: "Claude Code",
    description:
      "Anthropic's terminal-native AI coding agent that reads, edits, and runs code autonomously. Not a chatbot with a code block — a full agent that acts.",
    emphasizedPhrases: ["terminal-native AI coding agent"],
  },
  {
    id: "agentic-mode",
    index: "02",
    category: "core",
    categoryLabel: "Core",
    term: "Agentic Mode",
    description:
      "Multi-step autonomous execution — Claude plans, acts, verifies, and iterates without needing a human prompt at each step. Set the goal. Let it go.",
    emphasizedPhrases: ["Multi-step autonomous execution"],
  },
  {
    id: "context-window",
    index: "03",
    category: "core",
    categoryLabel: "Core",
    term: "Context Window",
    description:
      "The model's working memory — the total tokens Claude can hold in mind at once. Bigger window = more code, more history, more context, more power.",
    emphasizedPhrases: ["working memory"],
  },
  {
    id: "artifacts",
    index: "04",
    category: "core",
    categoryLabel: "Core",
    term: "Artifacts",
    description:
      "The concrete outputs Claude produces — source files, configs, docs, scripts. The stuff that actually gets committed, reviewed, and shipped.",
    emphasizedPhrases: ["concrete outputs"],
  },
  {
    id: "extended-thinking",
    index: "05",
    category: "core",
    categoryLabel: "Core",
    term: "Extended Thinking",
    description:
      "A mode where Claude reasons in a private scratchpad before answering. Token-hungry but dramatically sharper on complex, multi-constraint problems.",
    emphasizedPhrases: ["reasons in a private scratchpad"],
  },
  {
    id: "mcp",
    index: "06",
    category: "tools",
    categoryLabel: "Tools",
    term: "MCP",
    description:
      "Model Context Protocol — an open standard for plugging Claude into external tools, databases, and APIs. The USB-C of AI integrations.",
    emphasizedPhrases: ["Model Context Protocol"],
  },
  {
    id: "tool-calls",
    index: "07",
    category: "tools",
    categoryLabel: "Tools",
    term: "Tool Calls",
    description:
      "How Claude reaches beyond text and into the world — reading files, running commands, querying APIs. Every action Claude takes is a tool call under the hood.",
    emphasizedPhrases: ["reaches beyond text and into the world"],
  },
  {
    id: "bash-tool",
    index: "08",
    category: "tools",
    categoryLabel: "Tools",
    term: "Bash Tool",
    description:
      "Direct shell access. Claude runs terminal commands on your actual machine. With this power comes mandatory permission guardrails. Use them.",
    emphasizedPhrases: ["Direct shell access"],
  },
  {
    id: "computer-use",
    index: "09",
    category: "tools",
    categoryLabel: "Tools",
    term: "Computer Use",
    description:
      "Claude sees your screen and can click, type, scroll. Automates any GUI workflow with no API. Like hiring someone who can operate any software.",
    emphasizedPhrases: ["sees your screen and can click, type, scroll"],
  },
  {
    id: "claude-md",
    index: "10",
    category: "memory",
    categoryLabel: "Memory",
    term: "CLAUDE.md",
    description:
      "Your project's persistent brain. A markdown file Claude reads at every session start — architecture, conventions, rules. Write it once, enforced always.",
    emphasizedPhrases: ["persistent brain"],
  },
  {
    id: "memory-files",
    index: "11",
    category: "memory",
    categoryLabel: "Memory",
    term: "Memory Files",
    description:
      "Files auto-loaded at session startup. CLAUDE.md is the main one, but you can chain multiple across a monorepo for layered, scoped context.",
    emphasizedPhrases: ["auto-loaded at session startup"],
  },
  {
    id: "prompt-caching",
    index: "12",
    category: "memory",
    categoryLabel: "Memory",
    term: "Prompt Caching",
    description:
      "Anthropic's system that caches repeated context between API calls — slashing latency and cost for long system prompts and large codebases.",
    emphasizedPhrases: ["caches repeated context"],
  },
  {
    id: "init",
    index: "13",
    category: "commands",
    categoryLabel: "Commands",
    term: "/init",
    description:
      "The bootstrap command. Scans your project, learns your stack, and creates CLAUDE.md. Run it once per repo — it's how Claude meets your codebase.",
    emphasizedPhrases: ["bootstrap command"],
  },
  {
    id: "compact",
    index: "14",
    category: "commands",
    categoryLabel: "Commands",
    term: "/compact",
    description:
      "Compresses old context to reclaim token space mid-session. Keeps the signal, summarizes the noise. Like cliff notes for your conversation history.",
    emphasizedPhrases: ["Compresses old context"],
  },
  {
    id: "clear",
    index: "15",
    category: "commands",
    categoryLabel: "Commands",
    term: "/clear",
    description:
      "Full context wipe. The nuclear option — fresh slate, zero history. Reach for it when a session derails or you need a hard context switch.",
    emphasizedPhrases: ["Full context wipe"],
  },
  {
    id: "slash-commands",
    index: "16",
    category: "commands",
    categoryLabel: "Commands",
    term: "Slash Commands",
    description:
      "/shortcuts for power users. Quick triggers for /init, /compact, /clear, /review, and more. The keyboard shortcuts of the agentic developer workflow.",
    emphasizedPhrases: ["/shortcuts for power users"],
  },
  {
    id: "subagents",
    index: "17",
    category: "arch",
    categoryLabel: "Architecture",
    term: "Subagents",
    description:
      "Claude spawning mini-Claude workers to tackle subtasks in parallel. One orchestrator delegates to specialists — faster execution, cleaner concerns.",
    emphasizedPhrases: ["spawning mini-Claude workers"],
  },
  {
    id: "hooks",
    index: "18",
    category: "arch",
    categoryLabel: "Architecture",
    term: "Hooks",
    description:
      "Lifecycle callbacks that fire before or after any tool call. Intercept to log, validate, block, or transform Claude's actions before they land.",
    emphasizedPhrases: ["Lifecycle callbacks"],
  },
  {
    id: "permissions",
    index: "19",
    category: "arch",
    categoryLabel: "Architecture",
    term: "Permissions",
    description:
      "Your trust guardrails — which tools, paths, and commands Claude can autonomously use. Fine-grained control over exactly what the agent is allowed to touch.",
    emphasizedPhrases: ["trust guardrails"],
  },
  {
    id: "headless-mode",
    index: "20",
    category: "arch",
    categoryLabel: "Architecture",
    term: "Headless Mode",
    description:
      "Claude Code without any UI, running in CI/CD pipelines, cron jobs, or scripts. Full agentic power, zero human interaction required. Automate everything.",
    emphasizedPhrases: ["without any UI"],
  },
];
