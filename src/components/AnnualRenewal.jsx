import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

const AnnualRenewal = () => {
  const phone = '5585998210894';
  const message = 'Olá! Vim do site e gostaria de agendar a renovação do meu certificado digital.';
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-16 bg-tcno-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <CalendarIcon className="w-12 h-12 text-white mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Renovação Anual
              </h2>
            </div>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Seu certificado digital tem validade de 1 ano. Renove anualmente 
              e continue utilizando com segurança total.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 mb-6">
              <div className="text-4xl font-bold text-white mb-2">1 ANO</div>
              <div className="text-white/80">de validade</div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-tcno-light hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Agendar Renovação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnualRenewal;
