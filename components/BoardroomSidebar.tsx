import Link from "next/link";
import Image from "next/image";
import { AgentAvatar } from "@/components/AgentAvatar";
import { BackLink } from "@/components/BackLink";
import type { Agent } from "@/data/types";

const channels = ["boardroom", "research", "decisions"];

export type SidebarMember = Pick<Agent, "name" | "initials" | "color" | "avatarSrc"> & {
  status: string;
  activity: string;
  confidence: number;
};

const defaultMembers: SidebarMember[] = [
  {
    name: "ChatGPT",
    status: "Thinking",
    activity: "Revising opinion",
    confidence: 76,
    color: "#6ee7b7",
    initials: "CG",
    avatarSrc: "/avatars/chatgpt.png",
  },
  {
    name: "Claude",
    status: "Reviewing",
    activity: "Reviewing ChatGPT",
    confidence: 78,
    color: "#fbbf24",
    initials: "CL",
    avatarSrc: "/avatars/claude.png",
  },
  {
    name: "Gemini",
    status: "Searching",
    activity: "Searching evidence",
    confidence: 81,
    color: "#67e8f9",
    initials: "GM",
    avatarSrc: "/avatars/gemini.png",
  },
  {
    name: "Moderator",
    status: "Active",
    activity: "Monitoring discussion",
    confidence: 91,
    color: "#c4b5fd",
    initials: "MO",
    avatarSrc: "/agora-mark.png",
  },
];

export function BoardroomSidebar({ members = defaultMembers }: { members?: SidebarMember[] }) {
  return (
    <aside className="glass-panel flex min-h-0 flex-col overflow-hidden border-r border-white/10 bg-slate-950/72 lg:rounded-l-2xl">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-cyan-200/25 bg-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.22)]">
            <Image src="/agora-mark.png" alt="" fill sizes="36px" className="object-cover" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Agora</p>
            <p className="text-xs text-slate-500">AI Boardroom</p>
          </div>
        </div>
        <div className="mt-4 grid gap-2">
          <BackLink href="/create" label="Back to setup" className="justify-center rounded-lg text-xs" />
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-200/25 hover:bg-cyan-200/8 hover:text-cyan-100"
          >
            Home
          </Link>
        </div>
      </div>

      <nav className="space-y-6 overflow-y-auto px-3 py-4">
        <section>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Channels
          </p>
          <div className="space-y-1">
            {channels.map((channel, index) => (
              <button
                key={channel}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                  index === 0
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/[0.06] hover:text-slate-100"
                }`}
              >
                <span className="text-slate-500">#</span>
                {channel}
              </button>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            AI Members
          </p>
          <div className="space-y-1.5">
            {members.map((member) => (
              <div
                key={member.name}
                className="group rounded-lg px-3 py-2 transition hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-3">
                  <span className="relative shrink-0">
                    <AgentAvatar agent={member} size="sm" />
                    <span className="presence-dot absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-300" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-medium text-slate-100">{member.name}</span>
                      <span className="text-[10px] font-medium text-slate-500">{member.confidence}%</span>
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-slate-400">{member.status}</span>
                    <span className="block truncate text-[11px] text-slate-500">{member.activity}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </nav>
    </aside>
  );
}
