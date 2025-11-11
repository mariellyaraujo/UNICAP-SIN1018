export default function Projetos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 space-y-24">
      <h1 className="text-6xl font-bold text-[#ffbbd8] mb-10 text-center">
        Projetos Desenvolvidos
      </h1>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="https://i.ibb.co/Y47y9T3T/Design-sem-nome-7.png"
          alt="Carteirou"
          className="w-72 h-72 object-contain rounded-2xl"
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
          src="https://i.ibb.co/4RT2Th76/Design-sem-nome-6.png"
          alt="Projeto Constela"
          className="w-72 h-72 object-contain rounded-2xl"
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
          src="https://i.ibb.co/Hpntjhy5/Design-sem-nome-5.png"
          alt="Foliaverso"
          className="w-72 h-72 object-contain rounded-2xl"
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
