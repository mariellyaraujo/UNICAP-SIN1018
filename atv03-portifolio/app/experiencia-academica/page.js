"use client";
import { useState } from "react";

export default function ExperienciaAcademica() {
  const [hoverEte, setHoverEte] = useState(false);
  const [hoverUnicap, setHoverUnicap] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-16 text-[#ffbbd8] text-center">
        Experiência Acadêmica
      </h1>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        <div className="max-w-md text-left">
          <p className="text-lg leading-relaxed text-[#ffbbd8]">
             Formada em{" "}
            <span className="text-white font-semibold">
              Programação de Jogos Digitais
            </span>{" "}
            na{" "}
            <span className="text-white font-semibold">ETE Cícero Dias</span>.
          </p>
        </div>

        <div
          className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHoverEte(true)}
          onMouseLeave={() => setHoverEte(false)}
        >
          <img
            src={
              hoverEte
                ? "https://i.ibb.co/fzq575sP/etecicerohv.png"
                : "https://i.ibb.co/0pSZh085/etecicero.png"
            }
            alt="ETE Cícero Dias"
            className="w-52 h-52 md:w-60 md:h-60 object-cover rounded-2xl shadow-md transition-all duration-500"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">
        <div className="max-w-md text-left">
          <p className="text-lg leading-relaxed text-[#ffbbd8]">
             Atualmente cursando o Tecnólogo em{" "}
            <span className="text-white font-semibold">
              Sistemas para Internet
            </span>{" "}
            na{" "}
            <span className="text-white font-semibold">UNICAP</span>, com bolsa
            do programa{" "}
            <span className="text-white font-semibold">Embarque Digital</span>.
          </p>
        </div>

        <div
          className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHoverUnicap(true)}
          onMouseLeave={() => setHoverUnicap(false)}
        >
          <img
            src={
              hoverUnicap
                ? "https://i.ibb.co/twY7rTcY/unicaphv.png"
                : "https://i.ibb.co/fG9Njnkz/unicap.png"
            }
            alt="UNICAP"
            className="w-52 h-52 md:w-60 md:h-60 object-cover rounded-2xl shadow-md transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
