
import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/images/unha01.jpg',
  '/images/unha02.jpg',
  '/images/unha03.jpg',
  '/images/unha04.jpg',
  '/images/unha05.jpg',
  '/images/unha06.jpg',
  '/images/unha07.jpg',
  '/images/unha08.jpg',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-[#efd1c6]"
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 py-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src="/images/logo.png" 
                alt="Essência D"
                className="h-28 md:h-40 w-auto object-contain"
              />
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3E3834] leading-tight">
                Estética & Bem-estar
              </h1>
              <p className="text-lg md:text-xl text-[#636E72] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transforme suas unhas em verdadeiras obras de arte. Cuidado profissional em um ambiente acolhedor e sofisticado.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#agendamento" 
                className="group inline-flex items-center justify-center bg-[#8B7355] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#A0826D] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Agende Agora
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#espacos" 
                className="inline-flex items-center justify-center bg-white text-[#8B7355] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#f8f4f0] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-[#8B7355]"
              >
                Ver Serviços
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
              <div className="flex items-center gap-2 text-[#636E72]">
                <svg className="w-5 h-5 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Profissionais Experientes</span>
              </div>
              <div className="flex items-center gap-2 text-[#636E72]">
                <svg className="w-5 h-5 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Produtos de Qualidade</span>
              </div>
              <div className="flex items-center gap-2 text-[#636E72]">
                <svg className="w-5 h-5 text-[#8B7355]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Ambiente Higienizado</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
              {/* Images */}
              {carouselImages.map((image, index) => (
                <div
                  key={image}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Trabalho ${index + 1} - Essência D`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E3834]/20 to-transparent pointer-events-none"></div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#8B7355] p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-10"
                aria-label="Imagem anterior"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#8B7355] p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-10"
                aria-label="Próxima imagem"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex 
                        ? 'w-8 h-2 bg-white' 
                        : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#8B7355]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-[#A0826D]/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#sobre" className="flex flex-col items-center gap-1 text-[#8B7355] hover:text-[#A0826D] transition-colors">
          <span className="text-xs font-medium uppercase tracking-wider">Descubra</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
