const services = [
  {
    name: "Massagem relaxante",
    desc: "Técnicas manuais com óleos essenciais para aliviar tensões e o estresse.",
    price: "a partir de R$ 150",
    tag: "Massagem",
  },
  {
    name: "Massagem modeladora",
    desc: "Movimentos firmes que ajudam a modelar o corpo e reduzir medidas.",
    price: "a partir de R$ 170",
    tag: "Massagem",
  },
  {
    name: "Drenagem linfática",
    desc: "Estimula a circulação, reduz o inchaço e promove bem-estar corporal.",
    price: "a partir de R$ 160",
    tag: "Corporal",
  },
  {
    name: "Limpeza de pele profunda",
    desc: "Higienização, extração e hidratação para uma pele renovada e luminosa.",
    price: "a partir de R$ 120",
    tag: "Facial",
  },
  {
    name: "Skincare personalizado",
    desc: "Protocolo facial sob medida com ativos naturais para o seu tipo de pele.",
    price: "a partir de R$ 180",
    tag: "Facial",
  },
  {
    name: "Depilação",
    desc: "Depilação suave e cuidadosa para uma pele lisa e bem cuidada.",
    price: "a partir de R$ 70",
    tag: "Corporal",
  },
  {
    name: "Design de sobrancelhas",
    desc: "Harmonização do olhar com técnica de mapeamento facial.",
    price: "a partir de R$ 60",
    tag: "Beleza",
  },
  {
    name: "Spa das mãos & pés",
    desc: "Esfoliação, hidratação e cuidado completo com toque natural.",
    price: "a partir de R$ 90",
    tag: "Cuidados",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-cream/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-leaf">
            Nossos serviços
          </span>
          <h2 className="mt-3 font-serif text-4xl text-leaf-dark md:text-5xl">
            Tratamentos para realçar a sua beleza
          </h2>
          <p className="mt-4 text-foreground/65">
            Do cuidado facial ao relaxamento corporal, oferecemos experiências
            completas com produtos naturais e técnicas especializadas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="flex flex-col rounded-2xl border border-beige bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="w-fit rounded-full bg-sage/50 px-3 py-1 text-xs font-medium text-leaf-dark">
                {s.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-leaf-dark">
                {s.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-foreground/65">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-beige/70 pt-4">
                <span className="text-sm font-medium text-leaf">{s.price}</span>
                <a
                  href="#contato"
                  className="text-sm font-medium text-leaf-dark underline-offset-4 hover:underline"
                >
                  Agendar →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
