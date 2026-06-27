type HistoryItem = {
  label: string;
  icon: string;
  color: "cyan" | "violet" | "emerald" | "amber";
};

const historyItems: HistoryItem[] = [
  { label: "Startup Strategy", icon: "S", color: "cyan" },
  { label: "Research Review", icon: "R", color: "violet" },
  { label: "Coding Debate", icon: "C", color: "emerald" },
  { label: "Decision Memo", icon: "D", color: "amber" },
];

export function GlassIcons() {
  return (
    <div className="glass-icons" aria-label="Previous boardroom chats">
      {historyItems.map((item) => (
        <button key={item.label} className={`glass-icons__button glass-icons__button--${item.color}`} type="button">
          <span className="glass-icons__back" />
          <span className="glass-icons__front">
            <span>{item.icon}</span>
          </span>
          <span className="glass-icons__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
