import { BoardroomDemo } from "@/components/BoardroomDemo";
import Lightfall from "@/components/react-bits/Lightfall";

export default function DiscussionRoomPage() {
  return (
    <main className="relative h-screen overflow-hidden p-3 text-slate-100 sm:p-4">
      <div className="absolute inset-0">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.45}
          streakCount={7}
          streakWidth={0.85}
          streakLength={1.2}
          glow={0.95}
          density={0.82}
          twinkle={1}
          zoom={2.6}
          backgroundGlow={0.58}
          opacity={0.36}
          mouseInteraction
          mouseStrength={0.45}
          mouseRadius={0.75}
          mixBlendMode="screen"
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/76" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.13),transparent_24rem),radial-gradient(circle_at_76%_0%,rgba(244,114,182,0.13),transparent_24rem)]" />
      <div className="room-ambient-particles absolute inset-0" />

      <BoardroomDemo />
    </main>
  );
}
