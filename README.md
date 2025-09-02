# TCNO — Certificadora Digital (Landing + Páginas)

Projeto React com **Vite + Tailwind CSS**, rotas com **react-router-dom** e integrações de **WhatsApp**. Inclui landing page, páginas individuais para tipos de certificado (e-CPF, e-CNPJ, NF-e), **FAQ** com busca, **404** customizada, **botão flutuante do WhatsApp** e âncoras para navegação suave.

## ✨ Funcionalidades
- **Landing page** com seções: Hero, Sobre Nós, O que são certificados, Tipos de certificado, Exemplos de uso, Renovação anual, CTA e Rodapé.
- **Header** com links para âncoras (`#inicio`, `#sobre`, `#certificados`) e para rota **/faq**.
- **Botão flutuante do WhatsApp** (com mensagem pré-preenchida).
- **CTAs do WhatsApp** em Hero, Renovação Anual e Footer (Suporte).
- **FAQ** com busca e acordeões (sem libs extras).
- **Páginas dedicadas**: e-CPF, e-CNPJ, NF-e.
- **Página de erro 404** estilizada com ações úteis.
- **Scroll suave** entre âncoras e **ScrollToTop** ao mudar de rota.
- Estilo consistente com **Tailwind** e ícones de **Heroicons** e **lucide-react**.

## 🧰 Stack
- **React** (Vite)
- **react-router-dom**
- **Tailwind CSS** (v4)
- **@heroicons/react**
- **lucide-react**

## 📦 Instalação
> Requer **Node.js 18+** e **npm** ou **yarn**.

```bash
# Instalar dependências
npm install
# ou
yarn
```

Se ainda não tiver adicionado as libs:
```bash
npm install react-router-dom lucide-react @heroicons/react
# ou
yarn add react-router-dom lucide-react @heroicons/react
```

## ▶️ Rodando localmente
```bash
npm run dev
# ou
yarn dev
```
Abra o endereço exibido no terminal (ex.: `http://127.0.0.1:5173`).

## 🏗️ Build de produção
```bash
npm run build
npm run preview
# ou
yarn build
yarn preview
```

## 🧭 Rotas
- `/` — **Home** (landing page)
- `/certificados/e-cpf` — Página e-CPF
- `/certificados/e-cnpj` — Página e-CNPJ
- `/certificados/nfe` — Página NF-e
- `/faq` — Perguntas Frequentes (FAQ)
- `*` — **NotFound** (404)

## 🔗 Navegação por âncoras (Home)
Certifique-se de que as seções possuam os IDs usados pelo Header e Footer:
- **Hero**: `<section id="inicio" ...>`
- **Sobre Nós**: `<section id="sobre" ...>`
- **Tipos / Certificados**: `<section id="certificados" ...>`

> O arquivo `src/index.css` já possui `html { scroll-behavior: smooth; }` para rolagem suave.

## ☎️ WhatsApp centralizado (opcional)
Para manter o número/mensagens em um só lugar, crie `src/config/whatsapp.js`:

```js
export const WHATS_PHONE = '5585999999999'; // DDI+DDD+número (apenas dígitos)
export const MSG_SOLICITACAO = 'Olá! Vim do site e gostaria de solicitar meu certificado digital.';
export const MSG_RENOVACAO   = 'Olá! Gostaria de agendar a renovação do meu certificado.';
export const MSG_SUPORTE     = 'Olá! Preciso de suporte técnico com meu certificado digital.';

export const waLink = (text) =>
  `https://wa.me/${String(WHATS_PHONE).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
```

Depois, use assim em qualquer componente:
```jsx
import { waLink, MSG_SUPORTE } from '../config/whatsapp';
<a href={waLink(MSG_SUPORTE)} target="_blank" rel="noopener noreferrer">Suporte</a>
```

## 🗂️ Estrutura de pastas (sugerida)
```
src/
├─ assets/
│  └─ images/
│     └─ LogoBrancaTransparenteMenor.png
├─ components/
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ AboutCertificates.jsx
│  ├─ CertificateTypes.jsx
│  ├─ UsageExamples.jsx
│  ├─ AnnualRenewal.jsx
│  ├─ CallToAction.jsx
│  ├─ Footer.jsx
│  ├─ AboutUs.jsx           # (opcional na Home)
│  ├─ FloatingWhatsApp.jsx
│  └─ ScrollToTop.jsx
├─ pages/
│  ├─ Home.jsx
│  ├─ ECPF.jsx
│  ├─ ECNPJ.jsx
│  ├─ NFe.jsx
│  ├─ FAQ.jsx
│  └─ NotFound.jsx
├─ App.jsx                  # define as rotas
├─ index.css                # Tailwind + estilos globais
└─ main.jsx                 # BrowserRouter + render
```

## 🧩 Componentes principais
- **Header**: navegação com âncoras e link para `/faq`. Botão “Contato” → WhatsApp.
- **Hero**: CTA “Solicite seu Certificado” → WhatsApp.
- **AboutCertificates**: explicação dos conceitos.
- **CertificateTypes**: cards de e-CPF, e-CNPJ, NF-e com “Saiba Mais” → rotas.
- **UsageExamples**: exemplos de uso.
- **AnnualRenewal**: CTA “Agendar Renovação” → WhatsApp.
- **CallToAction**: CTA duplo.
- **Footer**: links rápidos (âncoras/rotas) e “Suporte” → WhatsApp.
- **FloatingWhatsApp**: botão flutuante (ícone `MessageCircle` do `lucide-react`).
- **FAQ**: busca por palavras-chave e acordeões.
- **NotFound (404)**: ações para voltar à Home/FAQ/WhatsApp.
- **ScrollToTop**: rola para o topo a cada mudança de rota.

## 🎨 Cores e identidade
O projeto utiliza classes utilitárias como `text-tcno-dark` e `text-tcno-light`. Garanta que estejam definidas via Tailwind 4 (@theme) ou tokens CSS globais. Exemplo (Tailwind v4 – `index.css`):
```css
@import "tailwindcss";

@theme {
  --color-tcno-dark: #0b1526;
  --color-tcno-light: #1ea4ff;
}
```
Use conforme necessário nos componentes.

## 🌐 Deploy (SPA)
Como é uma SPA, configure *rewrite* para servir `index.html` em rotas desconhecidas:
- **Netlify**: crie `public/_redirects` com `/* /index.html 200`
- **Vercel**: `vercel.json` → rewrites para `/index.html`
- **GitHub Pages**: copie `index.html` para `404.html` no build
- **Nginx/Apache**: regras de rewrite para `index.html`

## ✅ Checklist de funcionamento
- [ ] `react-router-dom` instalado e `BrowserRouter` em `main.jsx`
- [ ] `<Route path="*" element={<NotFound />} />` no final de `App.jsx`
- [ ] IDs das seções da Home: `inicio`, `sobre`, `certificados`
- [ ] `lucide-react` instalado para ícones de redes sociais/botão flutuante
- [ ] Número do WhatsApp atualizado
- [ ] Links “Saiba Mais” apontando para as rotas corretas

## 📄 Licença
Você pode distribuir sob **MIT** ou outra licença de sua preferência.
