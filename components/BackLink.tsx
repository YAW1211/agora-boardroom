import Link from "next/link";

type BackLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function BackLink({ href, label, className = "" }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-cyan-200/35 hover:bg-cyan-200/10 ${className}`}
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}
