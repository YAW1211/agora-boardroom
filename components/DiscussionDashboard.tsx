import type { DashboardMetrics } from "@/data/types";

type MetricKey = "noveltyScore" | "agreementScore" | "evidenceScore" | "confidenceScore";
type TrendKey = keyof DashboardMetrics["trends"];

const labels: Array<{ key: MetricKey; trendKey: TrendKey; label: string }> = [
  { key: "noveltyScore", trendKey: "novelty", label: "Novelty" },
  { key: "agreementScore", trendKey: "agreement", label: "Agreement" },
  { key: "evidenceScore", trendKey: "evidence", label: "Evidence" },
  { key: "confidenceScore", trendKey: "confidence", label: "Confidence" },
];

export function DiscussionDashboard({ metrics }: { metrics: DashboardMetrics }) {
  return (
    <section className="border-b border-white/10 p-3">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/75">Dashboard</p>
          <h2 className="mt-1 text-base font-semibold text-white">Live signal</h2>
        </div>
        <span className="rounded-md border border-white/10 bg-white/8 px-2 py-1 text-xs text-slate-300">
          {metrics.currentRound} / {metrics.totalRounds}
        </span>
      </div>

      <div className="mt-3 space-y-2.5">
        {labels.map((item) => {
          const value = metrics[item.key];
          const trend = metrics.trends[item.trendKey];
          return (
            <div key={item.key}>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="text-slate-400">{item.label}</span>
                <span className="flex items-center gap-2 font-medium text-white">
                  {value}%
                  <span className={trend >= 0 ? "text-emerald-200" : "text-rose-200"}>
                    {trend >= 0 ? "+" : ""}
                    {trend}%
                  </span>
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                <div
                  className="metric-fill h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-white/10 bg-slate-950/50 p-2.5">
          <p className="text-xs text-slate-400">Estimated cost</p>
          <p className="mt-1 text-base font-semibold text-white">{metrics.estimatedCost}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/50 p-2.5">
          <p className="text-xs text-slate-400">Recommendation</p>
          <p className="mt-1 text-base font-semibold text-emerald-100">{metrics.recommendation}</p>
        </div>
      </div>
    </section>
  );
}
