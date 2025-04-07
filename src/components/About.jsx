import { useState } from "react";
import heroImg from "../assets/thales.jpg";

function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <section id="about" className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">
                Sobre a Dr. Thales Moura Madureira
              </h2>
              <p className="text-gray-700 mb-4">
                Formado pelo Centro Universitário de Votuporanga e especializado
                em áreas de Direito Trabalhista e Direito Previdenciário, o Dr.
                Thales Madureira atua há mais de 5 anos prestando assessoria
                jurídica com responsabilidade, dedicação e profundo conhecimento
                técnico.
              </p>
              <p className="text-gray-700 mb-6">
                Inscrito na Ordem dos Advogados do Brasil (OAB/SP) e membro de
                instituições como [nome de associações, se houver], o Dr. Thales
                Madureira possui ampla experiência em processos judiciais,
                negociações e consultoria jurídica preventiva, sempre com foco
                na defesa dos direitos e interesses de seus clientes.
              </p>
            </div>

            {/* Imagem à direita */}
            <div className="flex-1">
              <img
                src={heroImg}
                alt="Foto da Dr. Thales Madureira"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
