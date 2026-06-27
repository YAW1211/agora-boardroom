const cards = [
  {
    label: "Round Engine",
    title: "Structured AI boardroom rounds",
    description: "Independent thinking, cross review, revision, and moderator summary.",
  },
  {
    label: "Consensus",
    title: "Agreement and confidence signals",
    description: "Watch models converge, disagree, and update beliefs in public.",
  },
  {
    label: "Revision",
    title: "Changed-mind moments",
    description: "AGORA highlights when an AI expert updates its view and why.",
  },
  {
    label: "Evidence",
    title: "Research-aware discussion",
    description: "Track novelty, evidence strength, and unresolved uncertainty.",
  },
];

export function MagicBento() {
  return (
    <section className="magic-bento" aria-label="Agora capabilities">
      {cards.map((card) => (
        <article key={card.label} className="magic-bento__card">
          <span className="magic-bento__label">{card.label}</span>
          <div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
