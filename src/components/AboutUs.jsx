import React from 'react';

const AboutUs = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-tcno-dark mb-6">
          Sobre Nós
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          A <span className="text-tcno-light font-semibold">Tcno Certificadora Digital </span> 
 (CNPJ 46.074.393/0001-89) foi fundada em 19 de abril de 2022 e tem sede em Fortaleza, Ceará.
Nossa atuação é voltada para soluções digitais que oferecem segurança, autenticidade e confiança em transações eletrônicas, de acordo com as normas da Receita Federal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-tcno-dark mb-4">Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              Tornar a identidade digital acessível e segura, simplificando 
              processos e fortalecendo a confiança no ambiente online.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-tcno-dark mb-4">Nossa Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser referência nacional em certificação digital, 
              promovendo inovação e excelência em todos os serviços oferecidos.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-tcno-dark mb-4">Nossos Valores</h3>
            <p className="text-gray-600 leading-relaxed">
              Ética, transparência, inovação, segurança e foco no cliente 
              em todas as nossas entregas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
