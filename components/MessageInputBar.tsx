"use client";

import { useRef, useState } from "react";

const menuItems = [
  { label: "Mention AI", description: "Tag ChatGPT, Claude, Gemini, or Moderator", icon: "@" },
  { label: "Upload document", description: "Attach notes, specs, or research files", icon: "+" },
  { label: "Attach file", description: "Add images, docs, or source snippets", icon: "Doc" },
  { label: "Ask Moderator", description: "Request a neutral synthesis or next action", icon: "AI" },
  { label: "Start round", description: "Begin the next structured discussion phase", icon: "R" },
  { label: "Summarize", description: "Generate a concise boardroom summary", icon: "S" },
];

export function MessageInputBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function resizeComposer() {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const lineHeight = 24;
    const maxHeight = lineHeight * 4;
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";
  }

  return (
    <div className="relative shrink-0 border-t border-white/10 bg-slate-950/88 p-2 backdrop-blur-xl">
      {menuOpen && (
        <div className="absolute bottom-[4.7rem] left-2 right-2 z-30 rounded-2xl border border-white/12 bg-slate-950/95 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <div className="grid gap-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-white/[0.065]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-xs font-semibold text-cyan-100">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-slate-100">{item.label}</span>
                  <span className="block truncate text-xs text-slate-500">{item.description}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="px-3 pb-1 pt-2 text-xs text-slate-500">Type to search tools, files, and actions</div>
        </div>
      )}

      <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.045] p-2 shadow-[0_-18px_60px_rgba(0,0,0,0.18)]">
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Open boardroom tools"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-slate-950/50 text-xl leading-none text-slate-200 transition hover:border-cyan-200/25 hover:bg-cyan-200/8 hover:text-cyan-100"
        >
          +
        </button>

        <div className="min-w-0 flex-1 px-1 py-1">
          <textarea
            ref={textareaRef}
            rows={1}
            aria-label="Ask the boardroom"
            placeholder="Ask the boardroom..."
            onInput={resizeComposer}
            className="max-h-24 min-h-6 w-full resize-none overflow-hidden bg-transparent text-sm leading-6 text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button className="h-10 rounded-xl bg-cyan-200 px-4 text-xs font-semibold text-slate-950 transition hover:bg-white">
            Send
          </button>
          <button className="h-10 rounded-xl border border-rose-300/20 bg-rose-300/8 px-3 text-xs font-semibold text-rose-100 transition hover:bg-rose-300/12">
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
