import React from 'react';
import { Link } from 'react-router-dom';

export default function ECPF() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-tcno-dark to-tcno-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">e-CPF</h1>
          <p className="text-lg text-white/90 mt-4 max-w-3xl">
            Identidade digital para pessoas físicas: acesso a serviços governamentais, assinatura de documentos e muito mais.
          </p>
          <div className="mt-6">
            <Link to="/" className="underline underline-offset-4">← Voltar para o início</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-tcno-dark">Quando usar</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Declaração do Imposto de Renda</li>
              <li>Acesso a sistemas da Receita Federal e e-CAC</li>
              <li>Assinatura digital com validade jurídica</li>
              <li>Processos judiciais eletrônicos</li>
            </ul>

            <h2 className="text-2xl font-semibold text-tcno-dark">Como funciona</h2>
            <p className="text-gray-700">
              O e-CPF é emitido após validação dos seus dados. Pode ser A1 (arquivo com validade de 1 ano) ou A3 (token/cartão).
            </p>

            <h2 className="text-2xl font-semibold text-tcno-dark">Documentos necessários</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Documento oficial com foto</li>
              <li>CPF</li>
              <li>Comprovante de endereço</li>
            </ul>
          </div>

          <aside className="bg-gray-50 rounded-2xl p-6 h-fit shadow">
            <h3 className="text-lg font-semibold text-tcno-dark">Valores & Planos</h3>
            <p className="text-gray-600 mt-2">Consulte nosso time para a melhor opção (A1/A3).</p>
            <a
              href="https://wa.me/5585998210894?text=Quero%20saber%20mais%20sobre%20e-CPF"
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
