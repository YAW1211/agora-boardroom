import { BoardroomShell } from "@/components/BoardroomShell";
import { ChatTimeline } from "@/components/ChatTimeline";
import { DiscussionDashboard } from "@/components/DiscussionDashboard";
import { ModeratorPanel } from "@/components/ModeratorPanel";
import { mockDashboard, mockDiscussion, mockModerator } from "@/data/mock-data";

export default function DiscussionRoomPage() {
  return (
    <BoardroomShell>
      <div className="grid min-h-[calc(100vh-2rem)] gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
        <main className="glass-panel overflow-hidden rounded-2xl">
          <header className="border-b border-white/10 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
                  Agora Boardroom
                </p>
                <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  {mockDiscussion.title}
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                  {mockDiscussion.question}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]" />
                Round {mockDashboard.currentRound} live
              </div>
            </div>
          </header>
          <ChatTimeline messages={mockDiscussion.messages} />
        </main>

        <aside className="space-y-4">
          <DiscussionDashboard metrics={mockDashboard} />
          <ModeratorPanel moderator={mockModerator} />
        </aside>
      </div>
    </BoardroomShell>
  );
}
