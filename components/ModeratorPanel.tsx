import type { ModeratorSummary } from "@/data/types";

export function ModeratorPanel({ moderator }: { moderator: ModeratorSummary }) {
  return (
    <section className="glass-panel rounded-2xl p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-100/75">
            Moderator
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">Recommendation</h2>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            moderator.recommendation === "Continue"
              ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
              : "border-rose-300/20 bg-rose-300/10 text-rose-100"
          }`}
        >
          {moderator.recommendation}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <PanelItem label="Reason" value={moderator.reason} />
        <PanelItem label="Final summary" value={moderator.finalSummary} />
        <PanelItem label="Remaining uncertainty" value={moderator.remainingUncertainty} />
        <PanelItem label="Next action" value={moderator.nextAction} />
      </div>
    </section>
  );
}

function PanelItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/45 p-4">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
    </div>
  );
}
