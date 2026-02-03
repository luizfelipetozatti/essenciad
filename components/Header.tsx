
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#espacos' },
    { name: 'Agendamento', href: '#agendamento' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
           <img src="/images/d.png" alt="Essência D" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[#636E72] hover:text-[#8B7355] font-medium transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#agendamento" className="hidden md:inline-block bg-[#8B7355] text-white px-8 py-3 rounded-full hover:bg-[#A0826D] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
          Agendar Agora
        </a>
      </div>
    </header>
  );
};

export default Header;
