import Image from "next/image";
import type { Agent } from "@/data/types";

type AgentAvatarProps = {
  agent: Pick<Agent, "name" | "initials" | "color" | "avatarSrc">;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-8 w-8 text-[10px]",
  md: "h-10 w-10 text-xs",
  lg: "h-11 w-11 text-sm",
};

export function AgentAvatar({ agent, size = "md", className = "" }: AgentAvatarProps) {
  const isChatGptLogo = agent.name === "ChatGPT";
  const isGeminiLogo = agent.name === "Gemini";
  const imageClassName = isChatGptLogo
    ? "object-contain p-0.5 scale-125"
    : isGeminiLogo
      ? "object-contain p-0 scale-[1.75]"
      : "object-cover";
  const avatarBackground = agent.avatarSrc
    ? isChatGptLogo || isGeminiLogo
      ? "#ffffff"
      : "rgba(15,23,42,0.8)"
    : agent.color;

  return (
    <span
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-white/10 bg-slate-950 text-slate-950 shadow-[0_8px_28px_rgba(0,0,0,0.24)] ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: avatarBackground }}
      aria-label={`${agent.name} avatar`}
    >
      {agent.avatarSrc ? (
        <Image
          src={agent.avatarSrc}
          alt=""
          fill
          sizes="44px"
          className={imageClassName}
        />
      ) : (
        <span className="font-bold">{agent.initials}</span>
      )}
    </span>
  );
}
