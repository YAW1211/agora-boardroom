import Image from "next/image";

export function BrandSignalCard() {
  return (
    <div className="glass-panel group relative z-10 w-full max-w-[410px] justify-self-end overflow-hidden rounded-2xl p-3 sm:p-4">
      <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl transition duration-500 group-hover:bg-cyan-300/30" />
      <div className="absolute -right-12 bottom-4 h-44 w-44 rounded-full bg-fuchsia-400/18 blur-3xl transition duration-500 group-hover:bg-fuchsia-400/28" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Identity signal</p>
            <p className="mt-1 text-sm font-medium text-white">Agora council mark</p>
          </div>
          <span className="rounded-full border border-fuchsia-200/20 bg-fuchsia-200/10 px-3 py-1 text-xs text-fuchsia-100">
            Live brand
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 px-4 py-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.18),transparent_16rem),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.18),transparent_14rem)]" />
          <Image
            src="/agora-brand-lockup.png"
            alt="Agora brand lockup"
            width={883}
            height={613}
            priority
            className="relative mx-auto w-full max-w-[340px] object-contain drop-shadow-[0_20px_60px_rgba(56,189,248,0.18)] transition duration-500 group-hover:scale-[1.025]"
          />
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
          <span className="rounded-lg border border-cyan-200/15 bg-cyan-200/8 px-2 py-2">Council</span>
          <span className="rounded-lg border border-white/10 bg-white/[0.05] px-2 py-2">Debate</span>
          <span className="rounded-lg border border-fuchsia-200/15 bg-fuchsia-200/8 px-2 py-2">Decide</span>
        </div>
      </div>
    </div>
  );
}
