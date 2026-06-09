"use client";

import { useState } from "react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-beige/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf text-cream">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold tracking-wide text-leaf-dark">
              Flayla
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-leaf">
              Estética
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-leaf"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full bg-leaf px-5 py-2.5 text-sm font-medium text-cream shadow-sm transition-all hover:bg-leaf-dark hover:shadow-md md:inline-block"
        >
          Agendar avaliação
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-leaf-dark md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-beige/60 px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-foreground/80 hover:bg-cream"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-leaf px-5 py-2.5 text-center text-sm font-medium text-cream"
          >
            Agendar avaliação
          </a>
        </nav>
      )}
    </header>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 19c0-7 5-12 14-13-1 9-6 14-13 14-1 0-1 0-1-1Z"
        fill="currentColor"
      />
      <path
        d="M5 19C8 14 12 11 17 9"
        stroke="#fcfbf7"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
