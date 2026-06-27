export function ConfidenceBadge({ score }: { score: number }) {
  const tone =
    score >= 85
      ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
      : score >= 70
        ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
        : "border-amber-300/20 bg-amber-300/10 text-amber-100";

  return (
    <span className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${tone}`}>
      {score}% confidence
    </span>
  );
}
