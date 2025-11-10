export default function ExperienciaAcademica() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
      
      <h1 className="text-5xl md:text-6xl font-bold mb-12 text-[#ffbbd8] text-center">
        Experiência Acadêmica
      </h1>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        
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
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">
        
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
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
