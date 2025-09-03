import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CallToAction = () => {
  const phone = '5585998210894';
  const message = 'Olá! Vim do site e gostaria de falar com um especialista sobre Certificado Digital.';
  const waLink = `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 bg-tcno-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para garantir sua 
          <span className="text-tcno-light"> identidade digital?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Junte-se a milhares de pessoas e empresas que já confiam na Tcno 
          para suas certificações digitais.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tipos"
            className="inline-flex items-center bg-tcno-light hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 group"
          >
            Adquira agora seu certificado
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-tcno-dark font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            Fale com Especialista
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-tcno-light mb-2">Rápido</div>
            <div className="text-gray-300">Emissão em até 24h</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-tcno-light mb-2">Seguro</div>
            <div className="text-gray-300">Criptografia de última geração</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-tcno-light mb-2">Suporte</div>
            <div className="text-gray-300">Assistência especializada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
