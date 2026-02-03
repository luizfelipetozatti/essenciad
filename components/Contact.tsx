
import React from 'react';
import { MapPinIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#F5F0E8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3834] mb-4">Onde Estamos</h2>
          <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
            Venha nos conhecer! Estamos localizados em Araraquara, prontos para cuidar de você.
          </p>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-[#8B7355] to-[#A0826D] text-white p-10 rounded-2xl shadow-2xl">
            <div className="md:w-1/2 text-center md:text-left">
                <MapPinIcon className="w-14 h-14 mx-auto md:mx-0 mb-6 text-white"/>
                <h3 className="text-3xl font-bold mb-4">Essência D - Estética & Bem-estar</h3>
                <p className="mb-4">
                Araraquara - SP
                </p>
                <p className="mb-1"><span className="font-semibold">Telefone:</span> (16) 99772-5960</p>
                <p className="mb-6">
                  <span className="font-semibold">Instagram:</span>{' '}
                  <a 
                    href="https://www.instagram.com/essenciadestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @essenciad
                  </a>
                </p>
                 <a 
                  href="https://maps.app.goo.gl/FRm4TCK8vFdVL4Am7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-white text-[#8B7355] px-8 py-3 rounded-full font-semibold hover:bg-[#F5F0E8] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Ver no Google Maps
                </a>
            </div>
            <div className="md:w-1/2 w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.9636845844877!2d-48.172091!3d-21.770973899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f19d3c020b33%3A0xe39c346a11582a8e!2sEss%C3%AAncia%20D%20-%20Est%C3%A9tica%20%26%20Bem%20Estar!5e0!3m2!1sen!2sbr!4v1706986800000!5m2!1sen!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
