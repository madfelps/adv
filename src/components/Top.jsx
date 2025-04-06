import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-white to-gray-100 border-b border-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Nome do Escritório */}
        <div className="text-2xl font-bold text-black tracking-tight">
          Madureira & Associados
        </div>

        {/* Botão mobile */}
        <button
          onClick={handleToggle}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navegação desktop */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#hero"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Início
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Áreas de Atuação
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Sobre
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Contato
          </a>
        </nav>
      </div>

      {/* Navegação mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <a
            href="#hero"
            className="block text-gray-700 hover:text-blue-600 font-medium transition"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </a>
          <a
            href="#services"
            className="block text-gray-700 hover:text-blue-600 font-medium transition"
            onClick={() => setMenuOpen(false)}
          >
            Áreas de Atuação
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-blue-600 font-medium transition"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-blue-600 font-medium transition"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
