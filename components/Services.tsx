
import React from 'react';

interface Service {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    name: 'Limpeza de Pele',
    description: 'Tratamento profundo para remover impurezas e renovar a pele do rosto.',
    price: 'R$ 120',
    imageUrl: '/images/limpezadepele.png',
  },
  {
    name: 'Massagem Relaxante',
    description: 'Massagem terapêutica para alívio de tensões e relaxamento completo.',
    price: 'R$ 150',
    imageUrl: '/images/massagemrelaxante.jpg',
  },
  {
    name: 'Design de Sobrancelhas',
    description: 'Modelagem e design personalizado para valorizar seu olhar.',
    price: 'R$ 60',
    imageUrl: '/images/designdesombrancelhas.jpg',
  },
  {
    name: 'Drenagem Linfática',
    description: 'Técnica terapêutica para redução de inchaços e desintoxicação.',
    price: 'R$ 130',
    imageUrl: '/images/denagemlinfatica.jpg',
  },
  {
    name: 'Tratamento Facial',
    description: 'Hidratação profunda e tratamentos anti-idade personalizados.',
    price: 'R$ 180',
    imageUrl: '/images/tratamentofacial.jpg',
  },
  {
    name: 'Reflexologia',
    description: 'Massagem nos pés para estimular pontos de energia e bem-estar.',
    price: 'R$ 100',
    imageUrl: '/images/reflexologia.jpg',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-[#E8DFD0]">
    <div className="relative overflow-hidden">
      <img src={service.imageUrl} alt={service.name} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#3E3834] mb-3">{service.name}</h3>
      <p className="text-[#636E72] mb-5 leading-relaxed">{service.description}</p>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-[#8B7355]">{service.price}</div>
        <a href="#agendamento" className="text-[#A0826D] hover:text-[#8B7355] font-semibold transition-colors">Agendar →</a>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="espacos" className="py-24 bg-[#F5F0E8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3834] mb-4">Nossos Serviços</h2>
          <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
            Tratamentos estéticos e terapêuticos personalizados para realçar sua beleza natural e promover bem-estar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
