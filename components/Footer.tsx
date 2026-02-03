
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E3834] text-white">
      <div className="container mx-auto px-6 py-10 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} Essência D - Estética & Bem-estar. Todos os direitos reservados.</p>
        <p className="text-sm text-[#D4C5B0] mt-3">Cuidando de você com dedicação e carinho ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
