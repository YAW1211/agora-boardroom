import { CreateDiscussionForm } from "@/components/CreateDiscussionForm";
import { BoardroomShell } from "@/components/BoardroomShell";
import Lightfall from "@/components/react-bits/Lightfall";

export default function CreateDiscussionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.72}
          streakCount={8}
          streakWidth={1}
          streakLength={1.15}
          glow={1.05}
          density={1}
          twinkle={1}
          zoom={2.2}
          backgroundGlow={0.85}
          opacity={0.68}
          mouseInteraction
          mouseStrength={0.6}
          mouseRadius={0.65}
          mixBlendMode="screen"
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/62" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.14),transparent_24rem),radial-gradient(circle_at_72%_8%,rgba(244,114,182,0.16),transparent_26rem)]" />
      <div className="relative z-10">
        <BoardroomShell>
          <CreateDiscussionForm />
        </BoardroomShell>
      </div>
    </main>
  );
}
