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
          href="https://fonts.googleapis.com/css2?family=Tiny5&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-[#ffbbd8] font-[Verdana] min-h-screen flex flex-col">
        <header className="flex justify-center items-center gap-4 py-6 border-b border-[#8e0000] text-lg">
          <NavLink href="/">Home</NavLink>
          <span className="text-[#ffbbd8] opacity-70">𓇼</span>
          <NavLink href="/sobre">Sobre</NavLink>
          <span className="text-[#ffbbd8] opacity-70">𓇼</span>
          <NavLink href="/experiencia-academica">Experiência Acadêmica</NavLink>
          <span className="text-[#ffbbd8] opacity-70">𓇼</span>
          <NavLink href="/experiencia-profissional">Experiência Profissional</NavLink>
          <span className="text-[#ffbbd8] opacity-70">𓇼</span>
          <NavLink href="/projetos">Projetos</NavLink>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
          {children}
        </main>
      </body>
    </html>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative text-[#ffbbd8] transition-colors duration-500 hover:text-[#8e0000]"
    >
      {children}
    </Link>
  );
}
