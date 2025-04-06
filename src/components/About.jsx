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
                Formada pela Universidade de São Paulo (USP) com especialização
                em Direito Civil e Família, o Dr. Thales Madureira atua há mais
                de 10 anos defendendo os interesses de seus clientes com
                excelência técnica e sensibilidade humana.
              </p>
              <p className="text-gray-700 mb-6">
                Membro da Ordem dos Advogados do Brasil (OAB/SP) e da Associação
                Brasileira de Advogados (ABA), possui vasta experiência em
                processos judiciais e consultoria jurídica preventiva.
              </p>
            </div>

            {/* Imagem à direita */}
            <div className="flex-1">
              <img
                src={heroImg} // Substitua pelo caminho correto da sua imagem
                alt="Foto da Dra. Ana Lúcia"
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
