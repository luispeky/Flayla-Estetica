export default function CTA() {
  return (
    <section id="contato" className="bg-cream/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-leaf to-leaf-dark px-8 py-16 text-center shadow-xl md:px-16">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sage/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-56 w-56 rounded-full bg-sage-deep/20 blur-2xl" />

          <div className="relative">
            <h2 className="font-serif text-4xl text-cream md:text-5xl">
              Pronta para cuidar de você?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              Agende a sua avaliação gratuita e descubra o tratamento ideal para
              a sua pele. O seu momento de bem-estar começa aqui.
            </p>

            <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                className="flex-1 rounded-full border border-cream/30 bg-background/95 px-5 py-3.5 text-sm text-foreground outline-none placeholder:text-foreground/45 focus:border-cream"
              />
              <button
                type="submit"
                className="rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-leaf-dark transition-colors hover:bg-beige"
              >
                Agendar agora
              </button>
            </form>

            <p className="mt-4 text-xs text-cream/60">
              Sem compromisso · Resposta em até 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
