export default function Projetos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-10 space-y-28">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-16">
        <img
          src="https://i.ibb.co/Y47y9T3T/Design-sem-nome-7.png"
          alt="Carteirou"
          className="w-80 h-80 object-contain rounded-2xl"
        />
        <div className="text-left">
          <h1 className="text-6xl font-bold mb-10 text-[#ffbbd8]">
            Projetos Desenvolvidos
          </h1>
          <h2 className="text-3xl font-bold text-white mb-2">Carteirou</h2>
          <p className="text-lg text-[#ffbbd8]">
            Um site responsivo de criação de identidade.
          </p>
        </div>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse items-center md:items-start gap-16">
        <img
          src="https://i.ibb.co/4RT2Th76/Design-sem-nome-6.png"
          alt="Projeto Constela"
          className="w-80 h-80 object-contain rounded-2xl"
        />
        <div className="text-left">
          <h2 className="text-3xl font-bold text-white mb-2">Projeto Constela</h2>
          <p className="text-lg text-[#ffbbd8]">
            Projeto vencedor em 1º lugar no Hackathon da Globo 2024 — onde
            desenvolvemos uma IA para analisar se mensagens de WhatsApp eram
            fato ou fake.
          </p>
        </div>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-16">
        <img
          src="https://i.ibb.co/Hpntjhy5/Design-sem-nome-5.png"
          alt="Foliaverso"
          className="w-80 h-80 object-contain rounded-2xl"
        />
        <div className="text-left">
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
