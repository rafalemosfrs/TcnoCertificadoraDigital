import React from 'react';
import { DocumentCheckIcon, CurrencyDollarIcon, DocumentTextIcon, ScaleIcon } from '@heroicons/react/24/outline';

const UsageExamples = () => {
  const examples = [
    {
      icon: DocumentCheckIcon,
      title: 'Assinar contratos digitais',
      description: 'Com validade jurídica equivalente à assinatura manuscrita'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Declarar impostos',
      description: 'No site da Receita Federal com total segurança'
    },
    {
      icon: DocumentTextIcon,
      title: 'Emitir notas fiscais eletrônicas',
      description: 'NFe, NFCe e outros documentos fiscais'
    },
    {
      icon: ScaleIcon,
      title: 'Acessar sistemas governamentais',
      description: 'E processos judiciais eletrônicos'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tcno-dark mb-6">
            Exemplos de Uso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as diversas aplicações do seu certificado digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-tcno-light/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tcno-light/20 transition-colors duration-300">
                <example.icon className="w-7 h-7 text-tcno-light" />
              </div>
              <h3 className="text-lg font-semibold text-tcno-dark mb-3">
                {example.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {example.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">
            E muito mais! O certificado digital é essencial para o mundo digital atual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UsageExamples;