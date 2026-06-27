import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Boardroom", href: "/room" },
  { label: "Modes", href: "/create" },
  { label: "History", href: "#history" },
];

export function TopNav() {
  return (
    <header className="relative z-30 mx-auto mb-4 max-w-7xl">
      <nav className="mx-auto flex max-w-[920px] items-center justify-between rounded-2xl border border-white/10 bg-[#15111f]/86 px-3 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:px-4">
        <Link href="/" className="flex min-w-0 items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-white/[0.06]">
          <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-cyan-200/20 bg-slate-950 shadow-[0_0_28px_rgba(56,189,248,0.22)]">
            <Image src="/agora-mark.png" alt="" fill sizes="36px" className="object-cover" priority />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-4 text-white">Agora</span>
            <span className="hidden text-[11px] leading-4 text-cyan-100/65 sm:block">
              Where AI Thinks Together
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.035] p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/[0.07] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/create"
          className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Start
        </Link>
      </nav>
    </header>
  );
}
