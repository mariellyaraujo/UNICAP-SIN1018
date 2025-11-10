export default function ExperienciaAcademica() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
     
      <h1 className="text-5xl md:text-6xl font-bold mb-10 text-[#ffbbd8] text-center">
        Experiência Acadêmica
      </h1>

    
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
        
        <div className="max-w-md text-left">
          <p className="text-lg leading-relaxed text-[#ffbbd8]">
            🎮 Formada em{" "}
            <span className="text-white font-semibold">
              Programação de Jogos Digitais
            </span>{" "}
            na{" "}
            <span className="text-white font-semibold">ETE Cícero Dias</span>.
          </p>
        </div>

        
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co/zhWYqHs8/etecicero.png"
            alt="ETE Cícero Dias"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">
  
        <div className="max-w-md text-left">
          <p className="text-lg leading-relaxed text-[#ffbbd8]">
            💻 Atualmente cursando o Tecnólogo em{" "}
            <span className="text-white font-semibold">Sistemas para Internet</span> na{" "}
            <span className="text-white font-semibold">UNICAP</span>, com bolsa do programa{" "}
            <span className="text-white font-semibold">Embarque Digital</span>.
          </p>
        </div>

        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co/xxVt5hx/unicap.png"
            alt="UNICAP"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
