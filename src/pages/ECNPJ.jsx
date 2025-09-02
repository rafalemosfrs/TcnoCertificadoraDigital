import React from 'react';
import { Link } from 'react-router-dom';

export default function ECNPJ() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-tcno-dark to-tcno-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">e-CNPJ</h1>
          <p className="text-lg text-white/90 mt-4 max-w-3xl">
            Certificado para empresas: representação legal no ambiente digital, NF-e, eSocial, etc.
          </p>
          <div className="mt-6">
            <Link to="/" className="underline underline-offset-4">← Voltar para o início</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-tcno-dark">Principais usos</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Emissão de NF-e/NFC-e</li>
              <li>Obrigações acessórias (eSocial, EFD-Reinf, DCTFWeb)</li>
              <li>Assinatura de contratos B2B</li>
              <li>Licitações públicas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-tcno-dark">Tipos & validade</h2>
            <p className="text-gray-700">Disponível em A1 (1 ano) e A3 (até 3 anos), conforme sua operação.</p>

            <h2 className="text-2xl font-semibold text-tcno-dark">Documentos</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Documentos da empresa (CNPJ, contrato social/última alteração)</li>
              <li>Documentos do representante legal</li>
              <li>Comprovante de endereço</li>
            </ul>
          </div>

          <aside className="bg-gray-50 rounded-2xl p-6 h-fit shadow">
            <h3 className="text-lg font-semibold text-tcno-dark">Atendimento empresarial</h3>
            <p className="text-gray-600 mt-2">Orientamos na escolha do tipo e na implantação.</p>
            <a
              href="https://wa.me/5585998210894?text=Quero%20saber%20mais%20sobre%20e-CNPJ"
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
