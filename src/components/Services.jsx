import { useState } from "react";
import "./../services.css";

function Services() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-home text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Direito Imobiliário
              </h3>
              <p className="text-gray-600">
                Assessoria completa em compra e venda de imóveis, regularização
                de propriedades, contratos de locação e questões condominiais.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Direito de Família
              </h3>
              <p className="text-gray-600">
                Divórcios, pensão alimentícia, guarda de menores, inventários e
                planejamento sucessório com sensibilidade e expertise.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-briefcase text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Direito Trabalhista
              </h3>
              <p className="text-gray-600">
                Defesa dos direitos trabalhistas, rescisões, assédio moral,
                horas extras e ações contra demissões injustas.
              </p>
            </div>

            {/* Service 4 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-building text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Direito Empresarial
              </h3>
              <p className="text-gray-600">
                Constituição de empresas, contratos societários, recuperação
                judicial e consultoria para compliance empresarial.
              </p>
            </div>

            {/* Service 5 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-car text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Direito do Consumidor
              </h3>
              <p className="text-gray-600">
                Defesa contra cobranças abusivas, produtos defeituosos, serviços
                mal prestados e violação dos direitos básicos.
              </p>
            </div>

            {/* Service 6 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className="fas fa-gavel text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Direito Criminal
              </h3>
              <p className="text-gray-600">
                Defesa em processos criminais, habeas corpus, liberdade
                provisória e acompanhamento em delegacias.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
