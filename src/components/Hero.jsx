import React from "react";
import justiceImg from "../assets/adv_background.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen bg-center bg-no-repeat text-white py-20 px-6"
      style={{
        backgroundImage: `url(${justiceImg})`,
        backgroundPosition: "center 20%",
        backgroundSize: "100% auto",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <div className="md:w-1/2 ml-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Proteção Jurídica com Excelência <br /> e Humanização
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Atuação especializada em Direito Civil e Família com mais de 10 anos
            de experiência defendendo seus direitos com ética e comprometimento.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="#contato"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded shadow transition"
            >
              Agende uma Consulta
            </a>
            <a
              href="#areas"
              className="border border-white hover:bg-white hover:text-blue-800 text-white font-semibold px-6 py-3 rounded transition"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
