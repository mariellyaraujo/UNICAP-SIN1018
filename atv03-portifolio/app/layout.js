import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Portfólio | Marielly de Araújo Silva",
  description: "Portfólio desenvolvido por Marielly de Araújo Silva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/horizon"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-[#ffbbd8] font-[Verdana] min-h-screen flex flex-col">
        <header className="flex justify-center gap-6 py-4 border-b border-[#8e0000]">
          <Link href="/" className="hover:text-[#8e0000] transition">
            Home
          </Link>
          <Link href="/sobre" className="hover:text-[#8e0000] transition">
            Sobre
          </Link>
          <Link href="/experiencia-academica" className="hover:text-[#8e0000] transition">
            Experiência Acadêmica
          </Link>
          <Link href="/experiencia-profissional" className="hover:text-[#8e0000] transition">
            Experiência Profissional
          </Link>
          <Link href="/projetos" className="hover:text-[#8e0000] transition">
            Projetos
          </Link>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
