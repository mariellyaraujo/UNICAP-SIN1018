"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [catImage, setCatImage] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const fetchCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    setCatImage(data[0].url);
    setFadeOut(false);
  };

  useEffect(() => {
    if (catImage) {
      const timeout = setTimeout(() => setFadeOut(true), 2500);
      const removeTimeout = setTimeout(() => setCatImage(null), 3000);
      return () => {
        clearTimeout(timeout);
        clearTimeout(removeTimeout);
      };
    }
  }, [catImage]);

  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tiny5&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-[#ffbbd8] font-[Tiny5] min-h-screen flex flex-col">
       
        <header className="flex justify-center items-center gap-4 py-2 border-b border-[#8e0000] text-lg">
          <Link href="/" className="hover:text-[#8e0000] transition">Home</Link>
          <span className="text-[#8e0000]">𓇼</span>
          <Link href="/sobre" className="hover:text-[#8e0000] transition">Sobre</Link>
          <span className="text-[#8e0000]">𓇼</span>
          <Link href="/experiencia-academica" className="hover:text-[#8e0000] transition">Experiência Acadêmica</Link>
          <span className="text-[#8e0000]">𓇼</span>
          <Link href="/experiencia-profissional" className="hover:text-[#8e0000] transition">Experiência Profissional</Link>
          <span className="text-[#8e0000]">𓇼</span>
          <Link href="/projetos" className="hover:text-[#8e0000] transition">Projetos</Link>
        </header>

      
        <main className="flex-1 flex flex-col items-center justify-start text-center p-6">
          {children}
        </main>

        
        {catImage && (
          <div
            className={`fixed inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-1000 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="bg-[#1a1a1a] p-4 rounded-full shadow-lg border-2 border-[#ffbbd8]">
              <img
                src={catImage}
                alt="Gatinho fofo"
                className="w-64 h-64 object-cover rounded-full"
              />
            </div>
          </div>
        )}

        
        <div className="fixed bottom-6 right-6">
          <button
            onClick={fetchCat}
            className="text-[#ffbbd8] text-6xl bg-transparent hover:scale-110 transition-transform duration-300"
            title="Clique para ver um gatinho!"
          >
            ★
          </button>
        </div>
      </body>
    </html>
  );
}
