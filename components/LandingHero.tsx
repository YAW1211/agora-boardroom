import Link from "next/link";

const boardMembers = [
  { name: "ChatGPT", accent: "bg-emerald-300", line: "Frames the strategy" },
  { name: "Claude", accent: "bg-amber-300", line: "Challenges assumptions" },
  { name: "Gemini", accent: "bg-cyan-300", line: "Connects evidence" },
];

export function LandingHero() {
  return (
    <main className="min-h-screen overflow-hidden px-4 py-6 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl content-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            The AI Boardroom
          </div>
          <h1 className="text-6xl font-semibold leading-[0.9] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Agora
          </h1>
          <p className="mt-5 text-2xl font-medium text-slate-100 sm:text-3xl">
            The AI Boardroom
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Where AI Thinks Together. Start one discussion and watch multiple AI agents debate,
            revise, summarize, and turn uncertainty into a sharper next action.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/create"
              className="inline-flex items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.24)] transition hover:bg-white"
            >
              Start Discussion
            </Link>
            <Link
              href="/room"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/25 hover:bg-white/12"
            >
              View mock room
            </Link>
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-2xl p-4 sm:p-5">
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
            <div className="space-y-3 p-4">
              {boardMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]"
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
              <div className="rounded-xl border border-fuchsia-200/15 bg-fuchsia-200/8 p-4">
                <p className="text-sm font-semibold text-fuchsia-100">Moderator summary</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Continue for one more round. The group has converged on a narrow MVP, but evidence
                  for pricing remains thin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
