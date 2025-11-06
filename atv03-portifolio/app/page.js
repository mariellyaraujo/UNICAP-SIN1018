"use client";
import { useState, useEffect } from "react";

export default function Home() {
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
      const timeout = setTimeout(() => setFadeOut(true), 1000); 
      const removeTimeout = setTimeout(() => setCatImage(null), 2000); 
      return () => {
        clearTimeout(timeout);
        clearTimeout(removeTimeout);
      };
    }
  }, [catImage]);

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-black">
      <h1 className="text-5xl md:text-7xl font-bold text-[#ffbbd8] mb-4 font-horizon">
        Marielly de Araújo Silva
      </h1>
      <p className="text-[#ffbbd8] text-lg mb-12">@dev</p>

      <img
        src="https://i.ibb.co/7xCSSRKS/mellyzinha.png"
        className="w-64 h-64 md:w-80 md:h-80 object-cover"
      />

      {catImage && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="bg-[#1a1a1a] p-4 rounded-3xl shadow-lg border-2 border-[#ffbbd8]">
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
    </div>
  );
}
