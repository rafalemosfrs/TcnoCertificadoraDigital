import React from 'react';
import { ShieldCheckIcon, DocumentTextIcon, LockClosedIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const AboutCertificates = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Autenticação',
      description: 'Confirma sua identidade digital em transações online'
    },
    {
      icon: DocumentTextIcon,
      title: 'Assinatura Digital',
      description: 'Assine documentos com validade jurídica equivalente à manuscrita'
    },
    {
      icon: LockClosedIcon,
      title: 'Sigilo e Segurança',
      description: 'Protege suas informações com criptografia avançada'
    },
    {
      icon: CheckBadgeIcon,
      title: 'Integridade',
      description: 'Garante que documentos não foram alterados após assinatura'
    }
  ];

  return (
    <section id="certificados" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tcno-dark mb-6">
            O que são Certificados Digitais?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O certificado digital é sua identidade eletrônica, garantindo autenticidade, 
            segurança e validade em transações online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-tcno-light/10 rounded-full flex items-center justify-center group-hover:bg-tcno-light/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-tcno-light" />
              </div>
              <h3 className="text-xl font-semibold text-tcno-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCertificates;