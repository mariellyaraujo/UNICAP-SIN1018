"use client";
import { useState } from "react";

export default function Home() {
  const [catImage, setCatImage] = useState(null);

  const fetchCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    setCatImage(data[0].url);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold text-[#ffbbd8] mb-4 font-horizon">
        Marielly de Araújo Silva
      </h1>
      <p className="text-[#ffbbd8] text-lg mb-12">@dev</p>

      {catImage && (
        <img
          src={catImage}
          alt="Gatinho fofo"
          className="w-64 h-64 object-cover rounded-2xl mb-8 border-2 border-[#8e0000] shadow-lg"
        />
      )}

      <button
        onClick={fetchCat}
        className="fixed bottom-8 bg-[#ffbbd8] text-[#8e0000] p-4 rounded-full shadow-lg hover:bg-[#8e0000] hover:text-[#ffbbd8] transition"
        aria-label="Mostrar gatinho"
      >
        ★
      </button>
    </div>
  );
}
