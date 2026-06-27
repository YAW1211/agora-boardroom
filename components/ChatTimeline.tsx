"use client";

import { useEffect, useMemo, useRef } from "react";
import { AgentMessageCard } from "@/components/AgentMessageCard";
import { AgentAvatar } from "@/components/AgentAvatar";
import { aiMembers } from "@/data/mock-data";
import type { BoardMessage } from "@/data/types";

type TimelineItem =
  | { type: "round"; label: string; title: string }
  | { type: "message"; id: string }
  | { type: "moderator"; title: string; body: string };

export function ChatTimeline({ messages }: { messages: BoardMessage[] }) {
  const containerRef = useRef<HTMLElement>(null);
  const messagesById = useMemo(() => new Map(messages.map((message) => [message.id, message])), [messages]);
  const timeline: TimelineItem[] = [
    { type: "round", label: "Round 1", title: "Independent Thinking" },
    { type: "message", id: "m1" },
    { type: "message", id: "m2" },
    {
      type: "moderator",
      title: "Round 1 complete",
      body: "Initial position formed. Proceeding to Cross Review.",
    },
    { type: "round", label: "Round 2", title: "Cross Review" },
    { type: "message", id: "m3" },
    { type: "message", id: "m4" },
    { type: "message", id: "m5" },
    {
      type: "moderator",
      title: "Round 2 complete",
      body: "Agreement increased. Novel assumptions detected. Proceeding to Revision.",
    },
    { type: "round", label: "Round 3", title: "Moderator Summary" },
    { type: "message", id: "m6" },
  ];

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <section ref={containerRef} className="thin-scrollbar flex-1 overflow-y-auto scroll-smooth py-2">
      {timeline.map((item, index) => {
        if (item.type === "message") {
          const message = messagesById.get(item.id);
          return message ? (
            <div key={message.id} className="message-enter">
              <AgentMessageCard message={message} />
            </div>
          ) : null;
        }

        if (item.type === "moderator") {
          return <ModeratorTransition key={`${item.title}-${index}`} title={item.title} body={item.body} />;
        }

        return <RoundSeparator key={`${item.label}-${index}`} label={item.label} title={item.title} />;
      })}
      <LiveTypingIndicator />
    </section>
  );
}

function RoundSeparator({ label, title }: { label: string; title: string }) {
  return (
    <div className="px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-white/5" />
        <div className="rounded-full border border-cyan-200/20 bg-cyan-200/8 px-3 py-1 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100">{label}</p>
          <p className="text-xs text-slate-300">{title}</p>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-white/5 via-white/12 to-transparent" />
      </div>
    </div>
  );
}

function ModeratorTransition({ title, body }: { title: string; body: string }) {
  return (
    <div className="px-5 py-3">
      <div className="rounded-xl border border-fuchsia-200/15 bg-fuchsia-200/[0.055] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-100">Moderator</p>
        <p className="mt-1 text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-300">{body}</p>
      </div>
    </div>
  );
}

function LiveTypingIndicator() {
  const gemini = aiMembers[2];

  return (
    <div className="message-enter flex items-center gap-3 px-5 py-3 text-xs text-slate-400">
      <AgentAvatar agent={gemini} size="sm" />
      <span className="font-medium text-slate-300">Gemini</span>
      <span>is searching evidence</span>
      <span className="typing-dots inline-flex gap-1">
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}
