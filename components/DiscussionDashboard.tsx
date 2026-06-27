import type { DashboardMetrics } from "@/data/types";

const labels: Array<{ key: keyof Omit<DashboardMetrics, "estimatedCost" | "currentRound" | "recommendation">; label: string }> = [
  { key: "noveltyScore", label: "Novelty" },
  { key: "agreementScore", label: "Agreement" },
  { key: "evidenceScore", label: "Evidence" },
  { key: "confidenceScore", label: "Confidence" },
];

export function DiscussionDashboard({ metrics }: { metrics: DashboardMetrics }) {
  return (
    <section className="glass-panel rounded-2xl p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/75">
            Dashboard
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">Boardroom signal</h2>
        </div>
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-slate-300">
          Round {metrics.currentRound}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {labels.map((item) => {
          const value = metrics[item.key];
          return (
            <div key={item.key}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-300">{item.label} score</span>
                <span className="font-medium text-white">{value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
          <p className="text-xs text-slate-400">Estimated cost</p>
          <p className="mt-1 text-lg font-semibold text-white">{metrics.estimatedCost}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
          <p className="text-xs text-slate-400">Recommendation</p>
          <p className="mt-1 text-lg font-semibold text-emerald-100">{metrics.recommendation}</p>
        </div>
      </div>
    </section>
  );
}
