"use client";

import { useEffect, useMemo, useState } from "react";
import { BoardroomSidebar, type SidebarMember } from "@/components/BoardroomSidebar";
import { ChatTimeline, type TimelineItem } from "@/components/ChatTimeline";
import { DiscussionDashboard } from "@/components/DiscussionDashboard";
import { MessageInputBar } from "@/components/MessageInputBar";
import { ModeratorPanel } from "@/components/ModeratorPanel";
import { aiMembers, mockDiscussion, mockModerator } from "@/data/mock-data";
import type { Agent, DashboardMetrics } from "@/data/types";

const agoraAgent: Agent = {
  id: "agora",
  name: "AGORA",
  role: "Collaboration Engine",
  initials: "AG",
  color: "#67e8f9",
  avatarSrc: "/agora-mark.png",
};

const playback: TimelineItem[] = [
  { type: "round", label: "Round 1", title: "Independent Thinking" },
  { type: "message", id: "m1" },
  { type: "typing", agent: aiMembers[0], text: "ChatGPT is thinking..." },
  { type: "message", id: "m2" },
  {
    type: "moderator",
    title: "Round 1 complete",
    body: "Initial position formed. Proceeding to Cross Review.",
  },
  { type: "round", label: "Round 2", title: "Cross Review" },
  { type: "typing", agent: aiMembers[1], text: "Claude is reviewing..." },
  { type: "message", id: "m3" },
  { type: "typing", agent: aiMembers[2], text: "Gemini is gathering evidence..." },
  { type: "message", id: "m4" },
  { type: "typing", agent: aiMembers[0], text: "ChatGPT is revising opinion..." },
  { type: "message", id: "m5" },
  {
    type: "moderator",
    title: "Round 2 complete",
    body: "Agreement increased. Novel assumptions detected. Proceeding to Revision.",
  },
  { type: "round", label: "Round 3", title: "Revision" },
  { type: "typing", agent: agoraAgent, text: "AGORA is summarizing..." },
  { type: "message", id: "m6" },
];

const dashboardSnapshots: DashboardMetrics[] = [
  makeMetrics(54, 44, 54, 80, 1),
  makeMetrics(60, 52, 57, 81, 1),
  makeMetrics(68, 61, 61, 82, 2),
  makeMetrics(72, 65, 64, 84, 2),
  makeMetrics(76, 68, 68, 84, 3),
];

const activityFrames: SidebarMember[][] = [
  makeMembers("Thinking", "Waiting", "Searching evidence", "Monitoring discussion", "Revising opinion"),
  makeMembers("Preparing response", "Reading ChatGPT", "Searching evidence", "Monitoring discussion", "Drafting visible collaboration"),
  makeMembers("Revising opinion", "Reviewing previous reply", "Gathering evidence", "Guiding cross review", "Updating confidence"),
  makeMembers("Thinking", "Challenging assumptions", "Connecting evidence", "Preparing summary", "Watching agreement"),
];

const roundStates = [
  { round: "Round 1", title: "Independent Thinking", progress: 42 },
  { round: "Round 2", title: "Cross Review", progress: 76 },
  { round: "Round 3", title: "Revision", progress: 92 },
  { round: "Moderator Summary", title: "Completed", progress: 100 },
];

function makeMetrics(
  agreementScore: number,
  noveltyScore: number,
  evidenceScore: number,
  confidenceScore: number,
  currentRound: number,
): DashboardMetrics {
  return {
    noveltyScore,
    agreementScore,
    evidenceScore,
    confidenceScore,
    estimatedCost: "$0.07",
    currentRound,
    totalRounds: 3,
    recommendation: "Continue",
    trends: {
      novelty: 5,
      agreement: 8,
      evidence: 11,
      confidence: currentRound >= 3 ? 0 : 4,
    },
  };
}

function makeMembers(
  chatgptStatus: string,
  claudeStatus: string,
  geminiStatus: string,
  moderatorStatus: string,
  chatgptActivity: string,
): SidebarMember[] {
  return [
    {
      name: "ChatGPT",
      status: chatgptStatus,
      activity: chatgptActivity,
      confidence: 76,
      color: "#6ee7b7",
      initials: "CG",
      avatarSrc: "/avatars/chatgpt.png",
    },
    {
      name: "Claude",
      status: claudeStatus,
      activity: claudeStatus === "Waiting" ? "Awaiting cross review" : "Reading ChatGPT",
      confidence: 78,
      color: "#fbbf24",
      initials: "CL",
      avatarSrc: "/avatars/claude.png",
    },
    {
      name: "Gemini",
      status: geminiStatus,
      activity: geminiStatus,
      confidence: 81,
      color: "#67e8f9",
      initials: "GM",
      avatarSrc: "/avatars/gemini.png",
    },
    {
      name: "AGORA",
      status: moderatorStatus,
      activity: "Structured moderator",
      confidence: 91,
      color: "#c4b5fd",
      initials: "AG",
      avatarSrc: "/agora-mark.png",
    },
  ];
}

export function BoardroomDemo() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    if (visibleCount >= playback.length) return;
    const current = playback[visibleCount];
    const delay = current?.type === "typing" ? 1300 : 1850;
    const timeout = window.setTimeout(() => {
      setVisibleCount((count) => Math.min(count + 1, playback.length));
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [visibleCount]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivityIndex((index) => (index + 1) % activityFrames.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  const visibleTimeline = useMemo(() => playback.slice(0, visibleCount), [visibleCount]);
  const metrics = dashboardSnapshots[Math.min(Math.floor(visibleCount / 4), dashboardSnapshots.length - 1)];
  const progress = roundStates[Math.min(Math.floor(visibleCount / 4), roundStates.length - 1)];

  return (
    <div className="relative z-10 mx-auto grid h-[calc(100vh-1.5rem)] max-w-[1500px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 shadow-[0_30px_120px_rgba(0,0,0,0.38)] lg:grid-cols-[250px_minmax(0,1fr)_310px]">
      <BoardroomSidebar members={activityFrames[activityIndex]} />

      <section className="flex min-h-0 min-w-0 flex-col border-x border-white/10 bg-slate-950/44">
        <header className="shrink-0 border-b border-white/10 bg-slate-950/88 px-4 py-3 backdrop-blur-xl sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-300"># boardroom</span>
                <span>/</span>
                <span>frontend-only demo</span>
              </div>
              <h1 className="mt-1 truncate text-lg font-semibold text-white sm:text-xl">
                {mockDiscussion.title}
              </h1>
              <p className="mt-1 line-clamp-2 max-w-3xl text-xs leading-5 text-slate-400">
                {mockDiscussion.question}
              </p>
            </div>
            <RoundProgress round={progress.round} title={progress.title} progress={progress.progress} />
          </div>
        </header>
        <ChatTimeline messages={mockDiscussion.messages} timeline={visibleTimeline} />
        <MessageInputBar />
      </section>

      <aside className="glass-panel min-h-0 overflow-hidden bg-slate-950/70 lg:rounded-r-2xl">
        <DiscussionDashboard metrics={metrics} />
        <ModeratorPanel moderator={mockModerator} />
      </aside>
    </div>
  );
}

function RoundProgress({
  round,
  title,
  progress,
}: {
  round: string;
  title: string;
  progress: number;
}) {
  return (
    <div className="w-full rounded-xl border border-cyan-200/15 bg-cyan-200/[0.055] px-3 py-2 sm:w-64">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
            {round}
          </p>
          <p className="text-xs text-slate-300">{title}</p>
        </div>
        <span className="text-xs font-semibold text-white">{progress}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
