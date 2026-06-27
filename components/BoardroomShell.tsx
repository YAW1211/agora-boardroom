import Link from "next/link";

export function BoardroomShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-4 py-4 text-slate-100 sm:px-6 lg:px-8">
      <nav className="mx-auto mb-4 flex max-w-7xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-bold text-cyan-100 transition group-hover:border-cyan-200/40">
            A
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Agora</span>
            <span className="block text-xs text-slate-400">Where AI Thinks Together</span>
          </span>
        </Link>
        <Link
          href="/create"
          className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-200/35 hover:bg-cyan-200/10"
        >
          New discussion
        </Link>
      </nav>
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
