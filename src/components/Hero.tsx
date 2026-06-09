export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-background to-background">
      {/* folhas decorativas */}
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-sage/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-beige/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage-deep/40 bg-sage/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-leaf-dark">
            Beleza que vem da natureza
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-tight text-leaf-dark md:text-6xl">
            Realce a sua beleza com
            <span className="block italic text-leaf"> cuidado natural</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-foreground/70">
            Tratamentos estéticos, cosméticos naturais e cuidados pessoais
            pensados para nutrir a sua pele e renovar o seu bem-estar.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="rounded-full bg-leaf px-7 py-3.5 text-sm font-medium text-cream shadow-md transition-all hover:bg-leaf-dark hover:shadow-lg"
            >
              Agendar avaliação
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-leaf/30 px-7 py-3.5 text-sm font-medium text-leaf-dark transition-colors hover:bg-cream"
            >
              Conheça os serviços
            </a>
          </div>

          <dl className="mt-12 flex gap-8">
            {[
              { n: "+8 anos", l: "de experiência" },
              { n: "100%", l: "produtos naturais" },
              { n: "+2 mil", l: "clientes felizes" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl font-semibold text-leaf">
                  {s.n}
                </dt>
                <dd className="text-sm text-foreground/60">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-sage/50 to-beige/60 blur-xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-beige bg-gradient-to-br from-sage via-cream to-beige shadow-xl">
            {/* ilustração placeholder elegante */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-8 text-center">
              <span className="animate-float-slow flex h-28 w-28 items-center justify-center rounded-full bg-background/70 shadow-inner">
                <svg viewBox="0 0 24 24" className="h-14 w-14 text-leaf" fill="none">
                  <path
                    d="M5 19c0-7 5-12 14-13-1 9-6 14-13 14-1 0-1 0-1-1Z"
                    fill="currentColor"
                  />
                  <path d="M5 19C8 14 12 11 17 9" stroke="#fcfbf7" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
              <p className="font-serif text-2xl text-leaf-dark">
                Sua pele merece o melhor da natureza
              </p>
              <p className="text-sm text-leaf-dark/70">
                Espaço acolhedor · Produtos veganos · Profissionais certificados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
