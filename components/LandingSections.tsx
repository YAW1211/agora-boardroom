const features = [
  {
    title: "Multi-AI Boardroom",
    body: "Bring ChatGPT, Claude, Gemini and the AGORA Collaboration Engine into one discussion.",
  },
  {
    title: "Structured Debate",
    body: "Every AI thinks independently, challenges assumptions, revises its opinion, and contributes to a better decision.",
  },
  {
    title: "Live Moderator",
    body: "The AGORA Collaboration Engine guides every discussion through structured rounds, preventing chaotic conversations.",
  },
  {
    title: "Decision Timeline",
    body: "Track how ideas evolve from the first question to the final recommendation.",
  },
  {
    title: "Confidence Signals",
    body: "Visualize confidence, agreement, evidence quality and remaining uncertainty.",
  },
  {
    title: "Export Ready",
    body: "Generate structured summaries and decision reports ready for presentations or documentation.",
  },
];

const solutions = [
  {
    icon: "\u{1F680}",
    title: "Startup Strategy",
    body: "Validate business ideas before investing time and money.",
  },
  {
    icon: "\u{1F393}",
    title: "Students & Research",
    body: "Challenge assumptions and improve assignments, reports and innovation projects.",
  },
  {
    icon: "\u{1F3E2}",
    title: "Business Teams",
    body: "Run structured AI boardroom discussions for product, marketing and strategic planning.",
  },
  {
    icon: "\u{1F4BB}",
    title: "Software Development",
    body: "Review architecture, generate technical discussions and compare engineering decisions.",
  },
];

const roadmap = [
  {
    version: "v0.1",
    title: "AI Boardroom MVP",
    items: ["Discussion Room", "Moderator", "Live Dashboard"],
  },
  {
    version: "v0.2",
    title: "Real AI Integration",
    items: ["OpenAI", "Claude", "Gemini APIs", "Streaming Responses"],
  },
  {
    version: "v0.3",
    title: "Collaboration Engine",
    items: ["Structured Debate", "Changed Mind", "AI Reply System", "Decision Timeline"],
  },
  {
    version: "v0.4",
    title: "Workspace",
    items: ["Team Collaboration", "Shared Memory", "Projects", "Documents"],
  },
  {
    version: "v1.0",
    title: "The AI Collaboration Operating System",
    items: [],
  },
];

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{subtitle}</p>
    </div>
  );
}

export function LandingSections() {
  return (
    <div className="relative mx-auto max-w-7xl space-y-8 py-8">
      <section
        id="features"
        className="scroll-mt-24 rounded-3xl border border-white/10 bg-slate-950/38 px-5 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-8"
      >
        <SectionHeader
          eyebrow="Features"
          title="Powerful AI Collaboration"
          subtitle="AGORA brings multiple frontier AI models into one structured discussion, transforming isolated answers into collaborative decisions."
        />

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="landing-card group min-h-48 rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.07]"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-bold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.16)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="solutions"
        className="scroll-mt-24 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.38),rgba(30,27,75,0.24),rgba(88,28,135,0.22))] px-5 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-8"
      >
        <SectionHeader
          eyebrow="Solutions"
          title="Built for Better Decisions"
          subtitle="Whether you're building a startup, writing research, or solving complex business problems, AGORA helps teams think together."
        />

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="landing-card rounded-2xl border border-white/10 bg-slate-950/42 p-5 transition hover:-translate-y-1 hover:border-fuchsia-200/25 hover:bg-white/[0.06]"
            >
              <div className="text-3xl">{solution.icon}</div>
              <h3 className="mt-6 text-lg font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{solution.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="roadmap"
        className="scroll-mt-24 rounded-3xl border border-white/10 bg-slate-950/42 px-5 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-8"
      >
        <SectionHeader
          eyebrow="Roadmap"
          title="Building the Future of AI Collaboration"
          subtitle="AGORA is moving from a focused boardroom MVP toward a collaboration operating system for teams and AI agents."
        />

        <div className="relative mt-10 grid gap-4 lg:grid-cols-5">
          <div className="absolute left-6 right-6 top-8 hidden h-px bg-gradient-to-r from-cyan-200/20 via-fuchsia-200/30 to-cyan-200/20 lg:block" />
          {roadmap.map((step) => (
            <article
              key={step.version}
              className="landing-card relative rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-cyan-200/30"
            >
              <div className="relative z-10 mb-5 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                {step.version}
              </div>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              {step.items.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {step.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/48 px-5 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              Why AGORA?
            </h2>
          </div>
          <div className="text-base leading-8 text-slate-300">
            <p>AGORA is building a new way for humans and AI to think together.</p>
            <p className="mt-4">
              Instead of asking one AI for an answer, AGORA creates a collaborative environment
              where multiple frontier models discuss, challenge, revise and converge toward stronger
              decisions.
            </p>
            <p className="mt-4">We believe the future of AI is not a single assistant.</p>
            <p className="mt-4 text-xl font-semibold text-white">It is intelligent collaboration.</p>
            <blockquote className="mt-8 rounded-2xl border border-cyan-200/20 bg-cyan-200/10 px-5 py-4 text-lg font-semibold text-cyan-50">
              &quot;Where AI Thinks Together.&quot;
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
