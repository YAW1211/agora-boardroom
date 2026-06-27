import { AgentMessageCard } from "@/components/AgentMessageCard";
import type { BoardMessage } from "@/data/types";

export function ChatTimeline({ messages }: { messages: BoardMessage[] }) {
  return (
    <section className="thin-scrollbar max-h-none space-y-4 overflow-y-auto p-4 sm:p-6 lg:max-h-[calc(100vh-12rem)]">
      {messages.map((message) => (
        <AgentMessageCard key={message.id} message={message} />
      ))}
    </section>
  );
}
