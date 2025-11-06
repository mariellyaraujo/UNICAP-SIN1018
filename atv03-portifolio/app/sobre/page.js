export default function Sobre() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#ffbbd8]">Sobre</h1>
      <p className="text-[#ffbbd8] leading-relaxed text-lg">
        Este portfólio foi desenvolvido com foco em um design minimalista e
        elegante, utilizando as tecnologias <span className="text-[#8e0000] font-semibold">React</span> e <span className="text-[#8e0000] font-semibold">Next.js</span>.
        <br />
        A estilização foi feita com <span className="text-[#8e0000] font-semibold">Tailwind CSS</span>, garantindo responsividade e agilidade no
        desenvolvimento.
        <br />
        Além disso, há integração com uma API pública, utilizando
        <span className="text-[#8e0000] font-semibold"> TheCatAPI </span> para
        exibir imagens aleatórias de gatos 🐱.
        <br />
        A hospedagem é feita na <span className="text-[#8e0000] font-semibold">Vercel</span> e o código está disponível no GitHub.
      </p>
    </div>
  );
}
