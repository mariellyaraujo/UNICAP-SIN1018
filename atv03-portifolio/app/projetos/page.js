export default function Projetos() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#ffbbd8]">
        Projetos Desenvolvidos
      </h1>

      <ul className="space-y-6 text-[#ffbbd8]">
        <li>
          <h2 className="text-2xl text-[#8e0000] font-bold">Carteirou</h2>
          <p>Um site responsivo de criação de identidade.</p>
        </li>

        <li>
          <h2 className="text-2xl text-[#8e0000] font-bold">Projeto Constela</h2>
          <p>
            Projeto vencedor em 1º lugar no Hackathon da Globo 2024 — onde
            desenvolvemos uma IA para analisar se mensagens de WhatsApp eram
            fato ou fake.
          </p>
        </li>

        <li>
          <h2 className="text-2xl text-[#8e0000] font-bold">Foliaverso</h2>
          <p>
            Projeto do Kick Off 2024.2 — proposta de um carnaval inclusivo e
            sustentável com realidade aumentada (AR) para pessoas que não podem
            ir presencialmente, como autistas, acamados ou doentes.
          </p>
        </li>
      </ul>
    </div>
  );
}
