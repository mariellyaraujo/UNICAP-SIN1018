"use client";
import { useState } from "react";

export default function Projetos() {
  const [hovered, setHovered] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 space-y-24">
      <h1 className="text-6xl font-bold text-[#ffbbd8] mb-16 text-center">
        Projetos Desenvolvidos
      </h1>


      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src={
            hovered === "carteirou"
              ? "https://i.ibb.co/B2JK6fXb/Design-sem-nome-9.png"
              : "https://i.ibb.co/Y47y9T3T/Design-sem-nome-7.png"
          }
          alt="Carteirou"
          onMouseEnter={() => setHovered("carteirou")}
          onMouseLeave={() => setHovered("")}
          className="w-80 h-80 object-contain rounded-2xl transition-transform duration-300 hover:scale-105"
        />
        <div className="text-left max-w-md">
          <h2 className="text-3xl font-bold text-white mb-2">Carteirou</h2>
          <p className="text-lg text-[#ffbbd8]">
            Um site responsivo de criação de identidade.
          </p>
        </div>
      </div>

    
      <div className="max-w-4xl w-full flex flex-col md:flex-row-reverse items-center justify-center gap-10">
        <img
          src={
            hovered === "constela"
              ? "https://i.ibb.co/N6dLLTc1/Design-sem-nome-8.png"
              : "https://i.ibb.co/4RT2Th76/Design-sem-nome-6.png"
          }
          alt="Projeto Constela"
          onMouseEnter={() => setHovered("constela")}
          onMouseLeave={() => setHovered("")}
          className="w-80 h-80 object-contain rounded-2xl transition-transform duration-300 hover:scale-105"
        />
        <div className="text-right max-w-md">
          <h2 className="text-3xl font-bold text-white mb-2">Projeto Constela</h2>
          <p className="text-lg text-[#ffbbd8]">
            Projeto vencedor em 1º lugar no Hackathon da Globo 2024 — onde
            desenvolvemos uma IA para analisar se mensagens de WhatsApp eram
            fato ou fake.
          </p>
        </div>
      </div>

     
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src={
            hovered === "foliaverso"
              ? "https://i.ibb.co/399DBYBy/Design-sem-nome-10.png"
              : "https://i.ibb.co/Hpntjhy5/Design-sem-nome-5.png"
          }
          alt="Foliaverso"
          onMouseEnter={() => setHovered("foliaverso")}
          onMouseLeave={() => setHovered("")}
          className="w-80 h-80 object-contain rounded-2xl transition-transform duration-300 hover:scale-105"
        />
        <div className="text-left max-w-md">
          <h2 className="text-3xl font-bold text-white mb-2">Foliaverso</h2>
          <p className="text-lg text-[#ffbbd8]">
            Projeto do Kick Off 2024.2 — proposta de um carnaval inclusivo e
            sustentável com realidade aumentada (AR) para pessoas que não podem
            ir presencialmente, como autistas, acamados ou doentes.
          </p>
        </div>
      </div>
    </div>
  );
}
