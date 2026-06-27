import { BoardroomSidebar } from "@/components/BoardroomSidebar";
import { ChatTimeline } from "@/components/ChatTimeline";
import { DiscussionDashboard } from "@/components/DiscussionDashboard";
import { MessageInputBar } from "@/components/MessageInputBar";
import { ModeratorPanel } from "@/components/ModeratorPanel";
import Lightfall from "@/components/react-bits/Lightfall";
import { mockDashboard, mockDiscussion, mockModerator } from "@/data/mock-data";

export default function DiscussionRoomPage() {
  return (
    <main className="relative h-screen overflow-hidden p-3 text-slate-100 sm:p-4">
      <div className="absolute inset-0">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.45}
          streakCount={7}
          streakWidth={0.85}
          streakLength={1.2}
          glow={0.95}
          density={0.82}
          twinkle={1}
          zoom={2.6}
          backgroundGlow={0.58}
          opacity={0.36}
          mouseInteraction
          mouseStrength={0.45}
          mouseRadius={0.75}
          mixBlendMode="screen"
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/76" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.13),transparent_24rem),radial-gradient(circle_at_76%_0%,rgba(244,114,182,0.13),transparent_24rem)]" />

      <div className="relative z-10 mx-auto grid h-[calc(100vh-1.5rem)] max-w-[1500px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 shadow-[0_30px_120px_rgba(0,0,0,0.38)] lg:grid-cols-[250px_minmax(0,1fr)_310px]">
        <BoardroomSidebar />

        <section className="flex min-h-0 min-w-0 flex-col border-x border-white/10 bg-slate-950/44">
          <header className="shrink-0 border-b border-white/10 bg-slate-950/88 px-4 py-3 backdrop-blur-xl sm:px-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-300"># boardroom</span>
                  <span>/</span>
                  <span>live discussion</span>
                </div>
                <h1 className="mt-1 truncate text-lg font-semibold text-white sm:text-xl">
                  {mockDiscussion.title}
                </h1>
                <p className="mt-1 line-clamp-2 max-w-3xl text-xs leading-5 text-slate-400">
                  {mockDiscussion.question}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-medium text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]" />
                Round {mockDashboard.currentRound} live
              </div>
            </div>
          </header>
          <ChatTimeline messages={mockDiscussion.messages} />
          <MessageInputBar />
        </section>

        <aside className="glass-panel min-h-0 overflow-hidden bg-slate-950/70 lg:rounded-r-2xl">
          <DiscussionDashboard metrics={mockDashboard} />
          <ModeratorPanel moderator={mockModerator} />
        </aside>
      </div>
    </main>
  );
}
