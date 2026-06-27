import LogoLoop, { type LogoItem } from "@/components/react-bits/LogoLoop";

const GithubLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-auto fill-white">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.18-.02-2.15-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.04c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const logos: LogoItem[] = [
  { src: "/agora-logo.png", alt: "Agora", title: "Agora" },
  { node: <GithubLogo />, title: "GitHub", href: "https://github.com/YAW1211/agora-boardroom" },
  { src: "/avatars/chatgpt.png", alt: "ChatGPT", title: "ChatGPT" },
  { src: "/avatars/gemini.png", alt: "Gemini", title: "Gemini" },
  { src: "/avatars/claude.png", alt: "Claude", title: "Claude" },
];

export function HomeLogoLoop() {
  return (
    <div className="relative mx-auto mb-4 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-md">
      <div className="mb-2 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/75">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
        Boardroom stack
      </div>
      <LogoLoop
        logos={logos}
        speed={58}
        direction="left"
        logoHeight={34}
        gap={42}
        hoverSpeed={12}
        scaleOnHover
        fadeOut
        fadeOutColor="rgba(6,10,24,0.94)"
        ariaLabel="Agora boardroom logos"
      />
    </div>
  );
}
