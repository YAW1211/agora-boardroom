import Link from "next/link";
import { BackLink } from "@/components/BackLink";

export function BoardroomShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-4 py-4 text-slate-100 sm:px-6 lg:px-8">
      <nav className="mx-auto mb-4 flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <BackLink href="/" label="Back to home" />
          <Link href="/" className="group hidden items-center gap-3 sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-bold text-cyan-100 transition group-hover:border-cyan-200/40">
              A
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">Agora</span>
              <span className="block text-xs text-slate-400">Where AI Thinks Together</span>
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/room"
            className="hidden rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-200/35 hover:bg-cyan-200/10 sm:inline-flex"
          >
            Mock room
          </Link>
          <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-slate-400">
            New discussion
          </span>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
