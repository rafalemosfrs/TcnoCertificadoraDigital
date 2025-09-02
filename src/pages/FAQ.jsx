import React, { useMemo, useState } from 'react';
import { MagnifyingGlassIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-gray-50"
        aria-expanded={open}
      >
        <span className="font-semibold text-tcno-dark">{q}</span>
        {open ? <MinusIcon className="w-5 h-5 text-tcno-light" /> : <PlusIcon className="w-5 h-5 text-tcno-light" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-700 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const phone = '5585998210894';
  const waLink = (msg) =>
    `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;

  const [query, setQuery] = useState('');

  const faqs = useMemo(() => ([
    {
      q: 'O que é um certificado digital?',
      a: 'É sua identidade eletrônica com validade jurídica para assinar documentos, acessar sistemas governamentais e realizar transações com segurança.'
    },
    {
      q: 'Qual a diferença entre A1 e A3?',
      a: 'A1 é um arquivo instalado no computador/servidor (geralmente 1 ano de validade). A3 fica em mídia física (token/cartão) e pode ter validade maior.'
    },
    {
      q: 'Qual certificado preciso para emitir NF-e?',
      a: 'Normalmente o certificado do tipo NF-e (A1 ou A3). Se tiver dúvidas, fale com a gente no WhatsApp.'
    },
    {
      q: 'Como solicitar meu certificado?',
      a: (
        <>
          Clique em “Solicite seu Certificado” no topo do site ou <a className="text-tcno-light underline" href={waLink('Olá! Quero solicitar meu certificado digital.')}>fale no WhatsApp</a>.
        </>
      )
    },
    {
      q: 'Quais documentos são necessários (pessoa física)?',
      a: 'Documento oficial com foto, CPF e comprovante de endereço. Em alguns casos, podem ser solicitados complementos.'
    },
    {
      q: 'Quais documentos são necessários (empresa)?',
      a: 'CNPJ, contrato social/última alteração, documentos do representante legal e comprovante de endereço.'
    },
    {
      q: 'Como funciona a renovação?',
      a: (
        <>
          A renovação é anual (para A1) e pode ser iniciada pelo WhatsApp: <a className="text-tcno-light underline" href={waLink('Olá! Gostaria de agendar a renovação do meu certificado.')}>agendar renovação</a>.
        </>
      )
    },
    {
      q: 'Posso assinar contratos com validade jurídica?',
      a: 'Sim. A assinatura digital com certificado ICP-Brasil tem validade jurídica equivalente à assinatura manuscrita.'
    },
    {
      q: 'Atendem apenas Fortaleza/CE?',
      a: 'Atendemos clientes em todo o Brasil com emissão e suporte remoto, conforme as regras vigentes.'
    },
    {
      q: 'Suporte e canais de atendimento',
      a: (
        <>
          Fale com nosso time pelo WhatsApp: <a className="text-tcno-light underline" href={waLink('Olá! Preciso de suporte técnico com meu certificado.')}>suporte técnico</a>.
        </>
      )
    }
  ]), []);

  const filtered = useMemo(() => {
    const qy = query.trim().toLowerCase();
    if (!qy) return faqs;
    return faqs.filter(item =>
      String(item.q).toLowerCase().includes(qy) ||
      (typeof item.a === 'string' ? item.a.toLowerCase().includes(qy) : false)
    );
  }, [faqs, query]);

  return (
    <main className="min-h-screen bg-gray-50">
<section className="bg-gradient-to-r from-tcno-dark to-tcno-light text-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold">FAQ — Perguntas Frequentes</h1>
    <p className="text-white/90 mt-4 max-w-3xl">
      Tire suas dúvidas sobre certificados digitais, emissão, renovação e uso no dia a dia.
    </p>

    <div className="mt-6 flex flex-col sm:flex-row gap-3">
      <Link
        to="/#inicio"                     
        className="inline-block bg-white text-tcno-dark hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition text-center"
      >
        ← Voltar para o início
      </Link>

      <a
        href={waLink('Olá! Vim do FAQ e tenho uma dúvida.')}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition text-center"
      >
        Falar com Especialista
      </a>
    </div>
  </div>
</section>


      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Busque por palavras-chave (ex.: NF-e, renovação, A1/A3)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tcno-light"
            />
          </div>
          <p className="text-gray-500 text-sm mt-3">
            {filtered.length} resultado{filtered.length === 1 ? '' : 's'}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {filtered.map((item, idx) => (
            <FAQItem key={idx} q={item.q} a={item.a} />
          ))}

          {filtered.length === 0 && (
            <div className="text-center text-gray-600 bg-white border border-gray-200 rounded-2xl p-8">
              <p className="mb-4">Não encontramos nada com “{query}”.</p>
              <a
                href={waLink(`Olá! Procurei por "${query}" no FAQ e não encontrei.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-tcno-light text-white font-semibold px-6 py-3 rounded-full"
              >
                Perguntar no WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
