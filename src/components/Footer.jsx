import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                    <i className="fas fa-balance-scale text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold">
                    Advocacia e Consultoria Jurídica
                  </h3>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Thales M. Madureira</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Escritório de advocacia especializado em diversas áreas do
                direito, oferecendo soluções jurídicas personalizadas e
                eficientes.
              </p>
              <p className="text-gray-300">OAB/SP 123.456</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Madureira & Associados - Todos
              os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
