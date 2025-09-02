import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = ({
  phone = '5585999999999',
  message = 'Olá! Vim do site e gostaria de saber mais sobre certificados digitais.'
}) => {
  const phoneDigits = String(phone).replace(/\D/g, '');
  const text = encodeURIComponent(message);
  const href = `https://wa.me/${phoneDigits}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-105">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
