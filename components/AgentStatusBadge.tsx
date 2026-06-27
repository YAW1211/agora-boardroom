export function AgentStatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-2 py-0.5 text-[11px] font-medium text-emerald-100">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
      {status}
    </span>
  );
}
