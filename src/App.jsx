import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ECPF from './pages/ECPF';
import ECNPJ from './pages/ECNPJ';
import NFe from './pages/NFe';
import ScrollToTop from './components/ScrollToTop';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificados/e-cpf" element={<ECPF />} />
      <Route path="/certificados/e-cnpj" element={<ECNPJ />} />
      <Route path="/certificados/nfe" element={<NFe />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
