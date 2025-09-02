import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/LogoBrancaTransparenteMenor.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phone = '5585998210894';
  const message = 'Olá! Vim do site e gostaria de falar com a TCNO.';
  const waLink = `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  const menuItems = [
    { name: 'Início', href: '#inicio', type: 'anchor'  },
    { name: 'Sobre Nós', href: '#sobre', type: 'anchor'  },
    { name: 'Certificados', href: '#certificados', type: 'anchor' },
    { name: 'FAQ', href: '/faq', type: 'route'},
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <img src={Logo} alt="TCNO Logo" className="h-10 w-auto" />

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-tcno-light transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contato via WhatsApp"
              className="bg-tcno-light hover:bg-blue-400 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
            >
              Contato
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-tcno-dark/95 backdrop-blur rounded-lg mt-4 p-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-white hover:text-tcno-light transition-colors duration-300 py-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contato via WhatsApp"
              className="w-full inline-block text-center bg-tcno-light hover:bg-blue-400 text-white font-semibold py-3 rounded-full transition-all duration-300 mt-4"
            >
              Contato
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
