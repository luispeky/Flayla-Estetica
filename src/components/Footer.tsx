export default function Footer() {
  return (
    <footer className="border-t border-beige bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf text-cream">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M5 19c0-7 5-12 14-13-1 9-6 14-13 14-1 0-1 0-1-1Z" fill="currentColor" />
              </svg>
            </span>
            <span className="font-serif text-2xl font-semibold text-leaf-dark">
              Flayla Estética
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-foreground/60">
            Estética, beleza e cuidados pessoais com o melhor da natureza. Sua
            beleza, cuidada de forma consciente.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-leaf-dark">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/60">
            <li><a href="#servicos" className="hover:text-leaf">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-leaf">Sobre</a></li>
            <li><a href="#produtos" className="hover:text-leaf">Produtos</a></li>
            <li><a href="#depoimentos" className="hover:text-leaf">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-leaf-dark">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/60">
            <li>contato@flaylaestetica.com.br</li>
            <li>(11) 99999-0000</li>
            <li>Seg a Sáb · 9h às 19h</li>
            <li className="flex gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="hover:text-leaf">Instagram</a>
              <a href="#" aria-label="Facebook" className="hover:text-leaf">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-beige/70">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Flayla Estética. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
