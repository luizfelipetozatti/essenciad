
import React from 'react';
import { SparklesIcon, HeartIcon, StarIcon } from './Icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300 border border-[#E8DFD0]">
    <div className="flex justify-center items-center mb-5 text-[#8B7355]">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-[#3E3834]">{title}</h3>
    <p className="text-[#636E72] leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3834] mb-4">Bem-estar e Beleza em Primeiro Lugar</h2>
          <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
            No Essência D, oferecemos tratamentos personalizados em um ambiente acolhedor, elegante e totalmente equipado para cuidar de você.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<SparklesIcon className="w-12 h-12" />} 
            title="Ambiente Relaxante" 
            description="Espaço pensado para proporcionar tranquilidade e conforto durante seus tratamentos." 
          />
          <FeatureCard 
            icon={<HeartIcon className="w-12 h-12" />} 
            title="Atendimento Personalizado" 
            description="Cada cliente é único. Oferecemos cuidados adaptados às suas necessidades individuais." 
          />
          <FeatureCard 
            icon={<StarIcon className="w-12 h-12" />} 
            title="Profissionais Qualificados" 
            description="Equipe experiente e dedicada ao seu bem-estar e satisfação com os resultados." 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
