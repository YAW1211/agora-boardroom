"use client";

import { useEffect, useMemo, useRef } from "react";
import { AgentMessageCard } from "@/components/AgentMessageCard";
import { AgentAvatar } from "@/components/AgentAvatar";
import type { Agent, BoardMessage } from "@/data/types";

export type TimelineItem =
  | { type: "round"; label: string; title: string }
  | { type: "message"; id: string }
  | { type: "moderator"; title: string; body: string }
  | { type: "typing"; agent: Agent; text: string };

export function ChatTimeline({
  messages,
  timeline,
}: {
  messages: BoardMessage[];
  timeline: TimelineItem[];
}) {
  const containerRef = useRef<HTMLElement>(null);
  const messagesById = useMemo(() => new Map(messages.map((message) => [message.id, message])), [messages]);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [timeline.length]);

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

        if (item.type === "typing") {
          return <LiveTypingIndicator key={`${item.agent.id}-${index}`} agent={item.agent} text={item.text} />;
        }

        return <RoundSeparator key={`${item.label}-${index}`} label={item.label} title={item.title} />;
      })}
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

function LiveTypingIndicator({ agent, text }: { agent: Agent; text: string }) {
  return (
    <div className="message-enter flex items-center gap-3 px-5 py-3 text-xs text-slate-400">
      <AgentAvatar agent={agent} size="sm" />
      <span className="font-medium text-slate-300">{agent.name}</span>
      <span>{text.replace(`${agent.name} `, "")}</span>
      <span className="typing-dots inline-flex gap-1">
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}
