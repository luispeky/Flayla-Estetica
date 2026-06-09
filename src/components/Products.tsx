const products = [
  { name: "Sérum Botânico", desc: "Hidratação intensa com ácido hialurônico vegetal", price: "R$ 89" },
  { name: "Óleo de Argan", desc: "Nutrição para pele e cabelos", price: "R$ 75" },
  { name: "Máscara de Argila Verde", desc: "Purifica e equilibra a oleosidade", price: "R$ 54" },
  { name: "Esfoliante de Café", desc: "Renovação natural com grãos moídos", price: "R$ 48" },
];

const swatch = [
  "from-sage to-leaf",
  "from-beige to-sage-deep",
  "from-cream to-beige",
  "from-sage-deep to-leaf-dark",
];

export default function Products() {
  return (
    <section id="produtos" className="bg-cream/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-leaf">
              Linha de produtos
            </span>
            <h2 className="mt-3 font-serif text-4xl text-leaf-dark md:text-5xl">
              Cosméticos naturais para levar para casa
            </h2>
          </div>
          <a
            href="#contato"
            className="rounded-full border border-leaf/30 px-6 py-3 text-sm font-medium text-leaf-dark transition-colors hover:bg-background"
          >
            Ver catálogo completo
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-beige bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`relative aspect-square bg-gradient-to-br ${swatch[i]} flex items-center justify-center`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/70 transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-leaf" fill="none">
                    <path d="M5 19c0-7 5-12 14-13-1 9-6 14-13 14-1 0-1 0-1-1Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-leaf-dark">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-medium text-leaf">{p.price}</span>
                  <button className="rounded-full bg-sage/60 px-4 py-1.5 text-sm font-medium text-leaf-dark transition-colors hover:bg-leaf hover:text-cream">
                    Comprar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
