import React from 'react';

const Hero = () => {
  const phone = '5585998210894';
  const message = 'Olá! Vim do site e gostaria de solicitar meu certificado digital.';
  const waLink = `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-tcno-dark via-tcno-dark to-tcno-light min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Sua Identidade Digital
          <br />
          <span className="text-tcno-light">com Segurança e Confiança</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Certificados digitais para pessoas físicas e empresas com validade jurídica.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-tcno-light hover:bg-blue-400 text-white text-lg font-semibold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Solicite seu Certificado
        </a>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-tcno-light">100%</div>
            <div className="text-gray-300">Seguro</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tcno-light">24h</div>
            <div className="text-gray-300">Suporte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tcno-light">+500</div>
            <div className="text-gray-300">Clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
