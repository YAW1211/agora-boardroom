import Link from "next/link";
import { LandingSections } from "@/components/LandingSections";
import { TopNav } from "@/components/TopNav";
import GradientText from "@/components/react-bits/GradientText";
import Hyperspeed from "@/components/react-bits/Hyperspeed";

const boardMembers = [
  { name: "ChatGPT", accent: "bg-emerald-300", line: "Frames the strategy" },
  { name: "Claude", accent: "bg-amber-300", line: "Challenges assumptions" },
  { name: "Gemini", accent: "bg-cyan-300", line: "Connects evidence" },
];

export function LandingHero() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-3 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Hyperspeed />
      </div>
      <div className="absolute inset-0 bg-slate-950/38" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_30%,rgba(34,211,238,0.18),transparent_30rem),radial-gradient(circle_at_100%_12%,rgba(244,114,182,0.16),transparent_32rem)]" />

      <TopNav />

      <section className="relative mx-auto grid min-h-[min(700px,calc(100vh-6.5rem))] max-w-7xl content-center gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.7fr)] lg:items-center lg:px-10 xl:grid-cols-[minmax(0,1fr)_410px]">
        <div className="relative z-10 max-w-[680px]">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-xl border border-cyan-200/10 bg-cyan-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              AI Boardroom
            </span>
          </div>
          <p className="mb-5 text-4xl font-black uppercase tracking-[0.14em] sm:text-5xl">
            <GradientText
              animationSpeed={4}
              colors={["#f0abfc", "#93c5fd", "#67e8f9", "#a78bfa", "#f0abfc"]}
            >
              AGORA
            </GradientText>
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-normal text-white sm:text-6xl xl:text-7xl">
            Where AI
            <span className="block">
              Thinks{" "}
              <GradientText
                animationSpeed={3.5}
                colors={["#67e8f9", "#38bdf8", "#60a5fa", "#8b5cf6", "#c084fc", "#67e8f9"]}
                className="font-semibold"
              >
                Together
              </GradientText>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Start a discussion. Multiple AI agents debate, challenge, and refine ideas so you get
            the best possible answer.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/create"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-violet-500 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.24)] transition hover:brightness-110"
            >
              Start Discussion
              <span aria-hidden="true" className="text-lg leading-none transition group-hover:translate-x-0.5">
                {"\u2192"}
              </span>
            </Link>
            <Link
              href="/room"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.035] px-7 py-4 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        <div className="relative z-10 grid w-full max-w-[410px] gap-4 justify-self-end lg:mt-8 xl:mt-0">
          <div className="glass-panel relative overflow-hidden rounded-2xl p-3 sm:p-4">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
            <div className="rounded-xl border border-white/10 bg-slate-950/70">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Live session</p>
                  <p className="mt-1 font-medium text-slate-100">Product Strategy Review</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                  Round 2
                </span>
              </div>
              <div className="space-y-3 p-3">
                {boardMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start gap-3">
                      <span className={`mt-1 h-3 w-3 rounded-full ${member.accent}`} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-white">{member.name}</p>
                          <p className="text-xs text-slate-400">{82 + index * 4}% confidence</p>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{member.line}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="rounded-xl border border-fuchsia-200/15 bg-fuchsia-200/8 p-3">
                  <p className="text-sm font-semibold text-fuchsia-100">Moderator summary</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Continue for one more round. The group has converged on a narrow MVP, but
                    evidence for pricing remains thin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingSections />
    </main>
  );
}
