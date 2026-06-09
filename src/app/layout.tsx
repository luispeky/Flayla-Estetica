import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Jost({
  variable: "--font-sans-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Flayla Estética · Beleza & Bem-estar",
  description:
    "Flayla Estética — tratamentos faciais e corporais, massagens, depilação e cuidados pessoais com produtos naturais para realçar a sua beleza e bem-estar.",
  keywords: [
    "estética",
    "beleza",
    "cosméticos naturais",
    "cuidados pessoais",
    "skincare",
    "tratamentos faciais",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
