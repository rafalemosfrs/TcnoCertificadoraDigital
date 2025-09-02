import React from 'react';
import { Link } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  const phone = '5585998210894';
  const message = 'Olá! Estou com dificuldade de encontrar uma página no site (erro 404). Pode me ajudar?';
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-tcno-dark via-tcno-dark to-tcno-light flex items-center">
      <div className="w-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FaceFrownIcon className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <p className="uppercase tracking-widest text-white/70">Erro</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2">404</h1>
          <p className="text-lg md:text-xl text-white/90 mt-4">
            Opa! A página que você procura não foi encontrada.
          </p>
          <p className="text-white/70 mt-2">
            Ela pode ter sido movida, removida ou o link está incorreto.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-block bg-white text-tcno-dark hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition"
            >
              ← Voltar para o início
            </Link>

            <Link
              to="/faq"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Ir para o FAQ
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tcno-light hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
