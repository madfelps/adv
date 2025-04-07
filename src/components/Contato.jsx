import { useState } from "react";
import "./../services.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contato() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="contact" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-50 rounded-lg shadow-md">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h2>
            <p class="text-gray-600 mb-8">
              Agende uma consulta ou tire suas dúvidas sobre nossos serviços
              jurídicos. Estamos à disposição para atendê-lo com excelência.
            </p>

            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-1">
                  Escritório
                </h3>
                <p class="text-gray-600">
                  Av. Paulista, 1000 - 10º andar
                  <br />
                  São Paulo/SP - CEP 01310-100
                </p>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-1">
                  Telefone
                </h3>
                <p class="text-gray-600">
                  (11) 1234-5678
                  <br />
                  (11) 98765-4321 (WhatsApp)
                </p>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-1">E-mail</h3>
                <p class="text-gray-600">contato@drthalesmadureira.com.br</p>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-1">
                  Horário de Atendimento
                </h3>
                <p class="text-gray-600">
                  Segunda a Sexta: 9h às 18h
                  <br />
                  Sábado: 9h às 12h (com agendamento)
                </p>
              </div>
              <div className="flex justify-center items-center gap-6 mt-4">
                <a
                  href="https://wa.me/5517991380070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 text-4xl hover:text-green-700"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/adv.thalesmadureira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 text-4xl hover:text-pink-700"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              Envie sua Mensagem
            </h2>
            <form class="space-y-5">
              <div>
                <label class="block text-gray-700 font-medium mb-2" for="name">
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2" for="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="exemplo@email.com"
                />
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2" for="phone">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="(11) 91234-5678"
                />
              </div>

              <div>
                <label
                  class="block text-gray-700 font-medium mb-2"
                  for="subject"
                >
                  Assunto
                </label>
                <select
                  id="subject"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>Selecione o assunto</option>
                  <option>Consultoria Jurídica</option>
                  <option>Dúvidas sobre atendimento</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label
                  class="block text-gray-700 font-medium mb-2"
                  for="message"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Escreva sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contato;
