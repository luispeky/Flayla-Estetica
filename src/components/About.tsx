export default function About() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-sage/40 blur-lg" />
          <div className="relative grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-leaf to-sage-deep" />
            <div className="mt-8 aspect-[3/4] rounded-2xl bg-gradient-to-br from-beige to-sage" />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-leaf">
            Sobre a Flayla Estética
          </span>
          <h2 className="mt-3 font-serif text-4xl text-leaf-dark md:text-5xl">
            Beleza com propósito e respeito à natureza
          </h2>
          <p className="mt-6 text-foreground/70">
            A Flayla Estética nasceu do desejo de unir estética e bem-estar de
            forma consciente. Acreditamos que cuidar da beleza é também cuidar
            do corpo, da mente e do meio ambiente.
          </p>
          <p className="mt-4 text-foreground/70">
            Por isso, trabalhamos com cosméticos naturais, técnicas
            personalizadas e um atendimento que coloca você no centro de tudo.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Produtos veganos e livres de testes em animais",
              "Avaliação individual antes de cada tratamento",
              "Compromisso com práticas sustentáveis",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-leaf text-cream">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-foreground/75">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
