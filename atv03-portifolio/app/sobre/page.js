export default function Sobre() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 gap-10">
      <div className="flex-shrink-0">
        <img
          src="https://i.ibb.co/Q7JcPRbX/mellyzinha-pixel.png"
          alt="Foto de Marielly"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg"
        />
      </div>

      <div className="max-w-2xl text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#ffbbd8]">
          Sobre
        </h1>
        <p className="text-[#ffbbd8] leading-relaxed text-lg">
          Este portfólio foi desenvolvido com foco em um design minimalista e
          grunge, utilizando as tecnologias{" "}
          <span className="text-[#ffffff] font-semibold">React</span> e{" "}
          <span className="text-[#ffffff] font-semibold">Next.js</span>.
          <br />
          A estilização foi feita com{" "}
          <span className="text-[#ffffff] font-semibold">Tailwind CSS</span>,
          garantindo responsividade e agilidade no desenvolvimento.
          <br />
          Além disso, há integração com uma API pública, utilizando{" "}
          <span className="text-[#ffffff] font-semibold">TheCatAPI</span> para
          exibir imagens aleatórias de gatos 🐱.
          <br />
          A hospedagem é feita na{" "}
          <span className="text-[#ffffff] font-semibold">Vercel</span> e o
          código está disponível no GitHub.
        </p>
      </div>
    </div>
  );
}
