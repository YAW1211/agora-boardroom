import { AgentStatusBadge } from "@/components/AgentStatusBadge";
import { ChangedMindBadge } from "@/components/ChangedMindBadge";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";
import type { BoardMessage } from "@/data/types";

export function AgentMessageCard({ message }: { message: BoardMessage }) {
  const isUser = message.kind === "user";
  const isModerator = message.kind === "moderator";

  return (
    <article
      className={`rounded-2xl border p-4 transition hover:border-white/18 sm:p-5 ${
        isUser
          ? "border-cyan-200/18 bg-cyan-200/8"
          : isModerator
            ? "border-fuchsia-200/18 bg-fuchsia-200/8"
            : "border-white/10 bg-white/[0.045]"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-bold text-slate-950"
          style={{ backgroundColor: message.agent.color }}
        >
          {message.agent.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-semibold text-white">{message.agent.name}</h2>
            <span className="text-sm text-slate-400">{message.agent.role}</span>
            {!isUser && <AgentStatusBadge status={message.status} />}
            {!isUser && <ConfidenceBadge score={message.confidence} />}
            {message.changedMind && <ChangedMindBadge />}
          </div>
          {message.replyingTo && (
            <p className="mt-2 text-xs text-slate-400">
              Replying to <span className="text-slate-200">{message.replyingTo}</span>
            </p>
          )}
          <p className="mt-3 text-sm leading-7 text-slate-200">{message.body}</p>
        </div>
      </div>
    </article>
  );
}
