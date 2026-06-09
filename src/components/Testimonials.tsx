const testimonials = [
  {
    name: "Mariana Alves",
    role: "Cliente desde 2022",
    text: "Saí de cada sessão me sentindo renovada. A pele nunca esteve tão saudável e o atendimento é impecável.",
  },
  {
    name: "Camila Souza",
    role: "Skincare personalizado",
    text: "Adoro saber que os produtos são naturais e veganos. Senti diferença logo nas primeiras semanas.",
  },
  {
    name: "Patrícia Lima",
    role: "Massagem & drenagem",
    text: "O ambiente é acolhedor e relaxante. Virou meu momento de cuidado favorito da semana.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-leaf">
            Depoimentos
          </span>
          <h2 className="mt-3 font-serif text-4xl text-leaf-dark md:text-5xl">
            O que as nossas clientes dizem
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-beige bg-cream/40 p-7"
            >
              <div className="flex gap-1 text-leaf">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-foreground/75">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-leaf-dark font-serif text-lg font-semibold">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-medium text-leaf-dark">{t.name}</p>
                  <p className="text-xs text-foreground/55">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
