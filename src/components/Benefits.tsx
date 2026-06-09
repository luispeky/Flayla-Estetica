const benefits = [
  {
    title: "Ingredientes naturais",
    desc: "Cosméticos veganos e cruelty-free, formulados com extratos botânicos.",
    icon: "leaf",
  },
  {
    title: "Atendimento personalizado",
    desc: "Cada tratamento começa por uma avaliação completa da sua pele.",
    icon: "heart",
  },
  {
    title: "Profissionais certificados",
    desc: "Equipe especializada em estética facial, corporal e bem-estar.",
    icon: "star",
  },
  {
    title: "Ambiente acolhedor",
    desc: "Um espaço tranquilo, pensado para o seu relaxamento e cuidado.",
    icon: "spa",
  },
];

export default function Benefits() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="group rounded-2xl border border-beige/70 bg-cream/40 p-6 transition-all hover:-translate-y-1 hover:border-sage-deep hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/60 text-leaf-dark transition-colors group-hover:bg-leaf group-hover:text-cream">
              <Icon name={b.icon} />
            </span>
            <h3 className="mt-4 font-serif text-xl font-semibold text-leaf-dark">
              {b.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/65">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const common = "h-6 w-6";
  switch (name) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 19c0-7 5-12 14-13-1 9-6 14-13 14-1 0-1 0-1-1Z" fill="currentColor" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M12 20s-7-4.3-9.3-8.5C1 8 2.5 5 5.5 5 7.4 5 8.7 6 12 9c3.3-3 4.6-4 6.5-4 3 0 4.5 3 2.8 6.5C19 15.7 12 20 12 20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M12 4c2 3 2 5 0 7-2-2-2-4 0-7Zm-6 6c3 1 4 3 4 6-3-1-4-3-4-6Zm12 0c0 3-1 5-4 6 0-3 1-5 4-6ZM5 20h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
