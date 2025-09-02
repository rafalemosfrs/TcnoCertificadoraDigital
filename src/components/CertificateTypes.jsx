import React from 'react';
import { UserIcon, BuildingOfficeIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CertificateTypes = () => {
  const certificates = [
    {
      icon: UserIcon,
      title: 'e-CPF',
      subtitle: 'Para pessoas físicas',
      description: 'Identidade digital para cidadãos, permitindo acesso a serviços governamentais e assinatura de documentos.',
      features: ['Declaração do IR', 'Processos judiciais', 'Transações bancárias', 'Contratos digitais']
    },
    {
      icon: BuildingOfficeIcon,
      title: 'e-CNPJ',
      subtitle: 'Para empresas',
      description: 'Certificado empresarial para representação legal da empresa em ambiente digital.',
      features: ['Emissão de NFe', 'Processos trabalhistas', 'Licitações públicas', 'Contratos B2B']
    },
    {
      icon: DocumentIcon,
      title: 'NF-e',
      subtitle: 'Para notas fiscais eletrônicas',
      description: 'Especialmente desenvolvido para emissão de notas fiscais eletrônicas com total conformidade fiscal.',
      features: ['Emissão de NFe', 'NFCe', 'CT-e', 'Integração ERP']
    }
  ];
  const routes = ['/certificados/e-cpf', '/certificados/e-cnpj', '/certificados/nfe'];

  return (
    <section id="tipos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tcno-dark mb-6">
            Tipos de Certificado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o certificado ideal para suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-tcno-light transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-tcno-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="pt-8 text-center">
                <h3 className="text-2xl font-bold text-tcno-dark mb-2">
                  {cert.title}
                </h3>
                <p className="text-tcno-light font-medium mb-4">
                  {cert.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-tcno-light rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={routes[index]}
                  className="block w-full text-center bg-tcno-dark hover:bg-tcno-light text-white font-semibold py-3 rounded-xl transition-colors duration-300"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateTypes;