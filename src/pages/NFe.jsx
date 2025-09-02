import React from 'react';
import { Link } from 'react-router-dom';

export default function NFe() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-tcno-dark to-tcno-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">NF-e</h1>
          <p className="text-lg text-white/90 mt-4 max-w-3xl">
            Certificado focado na emissão de notas fiscais eletrônicas com conformidade fiscal.
          </p>
          <div className="mt-6">
            <Link to="/" className="underline underline-offset-4">← Voltar para o início</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-tcno-dark">Indicada para</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Emissão de NF-e, NFC-e e CT-e</li>
              <li>Integração com ERPs e sistemas de faturamento</li>
              <li>Operações varejo/atacado de alto volume</li>
            </ul>

            <h2 className="text-2xl font-semibold text-tcno-dark">Implantação</h2>
            <p className="text-gray-700">
              Auxiliamos na instalação, configuração e boas práticas de segurança das chaves.
            </p>
          </div>

          <aside className="bg-gray-50 rounded-2xl p-6 h-fit shadow">
            <h3 className="text-lg font-semibold text-tcno-dark">Fale com especialista</h3>
            <p className="text-gray-600 mt-2">Tire dúvidas sobre modelos A1/A3 e integrações.</p>
            <a
              href="https://wa.me/5585998210894?text=Quero%20saber%20mais%20sobre%20NF-e"
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-block bg-tcno-light text-white font-semibold px-6 py-3 rounded-full"
            >
              Falar no WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
