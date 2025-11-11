export default function ExperienciaProfissional() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src="https://i.ibb.co/tTtdRgjP/Design-sem-nome-2.png"
          alt="Dream Experience"
          className="w-64 h-64 object-contain rounded-full"
        />
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-6 text-[#ffbbd8]">
            Experiência Profissional
          </h1>
          <p className="text-lg text-[#ffbbd8] leading-relaxed">
             Estagiária{" "}
            <span className="text-white font-semibold">
              Analista Desenvolvedora Salesforce
            </span>{" "}
            na
            <span className="text-white font-semibold"> Dream Experience</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
