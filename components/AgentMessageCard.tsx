import { AgentStatusBadge } from "@/components/AgentStatusBadge";
import { AgentAvatar } from "@/components/AgentAvatar";
import { ChangedMindBadge } from "@/components/ChangedMindBadge";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";
import type { BoardMessage } from "@/data/types";

export function AgentMessageCard({ message }: { message: BoardMessage }) {
  const isUser = message.kind === "user";
  const isModerator = message.kind === "moderator";

  return (
    <article
      className={`group px-4 py-3 transition hover:bg-white/[0.045] sm:px-5 ${
        isUser
          ? "border-l-2 border-cyan-200/45 bg-cyan-200/[0.035]"
          : isModerator
            ? "border-l-2 border-fuchsia-200/45 bg-fuchsia-200/[0.035]"
            : "border-l-2 border-transparent"
      }`}
    >
      <div className="flex items-start gap-3">
        <AgentAvatar agent={message.agent} size="md" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h2 className="text-sm font-semibold text-white">{message.agent.name}</h2>
            <span className="text-xs text-slate-500">{message.agent.role}</span>
            <span className="text-xs text-slate-600">{message.timestamp ?? "Now"}</span>
          </div>
          {message.replyingTo && (
            <p className="mt-1 text-xs text-slate-500">
              Replying to <span className="text-slate-300">{message.replyingTo}</span>
            </p>
          )}
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            {!isUser && <AgentStatusBadge status={message.status} />}
            {!isUser && <ConfidenceBadge score={message.confidence} />}
            {message.changedMind && <ChangedMindBadge />}
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-200">{message.body}</p>
          {message.changedMind && message.previousConfidence && message.revisionReason && (
            <div className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-lg border border-fuchsia-200/15 bg-fuchsia-200/[0.07] px-3 py-2 text-xs text-fuchsia-50">
              <span className="font-semibold text-white">Confidence revised</span>
              <span className="font-mono text-slate-300">{message.previousConfidence}%</span>
              <span className="confidence-arrow text-fuchsia-200">-&gt;</span>
              <span className="font-mono text-fuchsia-100">{message.confidence}%</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">{message.revisionReason}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
