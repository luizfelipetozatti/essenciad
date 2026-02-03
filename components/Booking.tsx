
import React, { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ClockIcon } from './Icons';

// Mocked booked slots for demonstration
const MOCKED_BOOKED_SLOTS: { [key: string]: string[] } = {
  '2024-07-28': ['10:00', '14:00'],
  '2024-08-05': ['09:00', '11:00', '15:00'],
};

interface Environment {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

const environments: Environment[] = [
  {
    id: 'limpeza-pele',
    name: 'Limpeza de Pele',
    description: 'Tratamento profundo para remover impurezas e renovar a pele',
    icon: '✨',
    features: ['Limpeza profunda', 'Extração', 'Hidratação', 'Proteção solar']
  },
  {
    id: 'massagem',
    name: 'Massagem Relaxante',
    description: 'Massagem terapêutica para alívio de tensões e relaxamento',
    icon: '💆',
    features: ['Relaxamento muscular', 'Alívio de tensões', 'Bem-estar', 'Óleos essenciais']
  },
  {
    id: 'sobrancelhas',
    name: 'Design de Sobrancelhas',
    description: 'Modelagem e design personalizado para valorizar seu olhar',
    icon: '💁',
    features: ['Análise facial', 'Design personalizado', 'Henna ou tintura', 'Simetria perfeita']
  },
  {
    id: 'drenagem',
    name: 'Drenagem Linfática',
    description: 'Técnica para redução de incícios e desintoxicação',
    icon: '🌿',
    features: ['Redução de incícios', 'Desintoxicação', 'Circulação', 'Bem-estar']
  },
  {
    id: 'facial',
    name: 'Tratamento Facial',
    description: 'Hidratação profunda e tratamentos anti-idade',
    icon: '🌸',
    features: ['Hidratação', 'Anti-idade', 'Luminosidade', 'Rejuvenescimento']
  },
  {
    id: 'reflexologia',
    name: 'Reflexologia',
    description: 'Massagem nos pés para estimular pontos de energia',
    icon: '🦶',
    features: ['Estímulo de pontos', 'Relaxamento', 'Bem-estar', 'Equilíbrio energético']
  }
];

type Step = 'environment' | 'date' | 'time' | 'info' | 'confirmed';

const Booking: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState(MOCKED_BOOKED_SLOTS);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userProfession, setUserProfession] = useState('');
  const [currentStep, setCurrentStep] = useState<Step>('environment');

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const calendarDays = useMemo(() => {
    const days = [];
    const startingDay = firstDayOfMonth.getDay();
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }
    return days;
  }, [currentDate, firstDayOfMonth, daysInMonth]);

  const handleEnvironmentSelect = (environment: Environment) => {
    setSelectedEnvironment(environment);
    setCurrentStep('date');
  };

  const handleDateSelect = (day: Date) => {
    if (day < new Date(new Date().toDateString())) return;
    setSelectedDate(day);
    setSelectedTime(null);
    setCurrentStep('time');
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep('info');
  };

  const handleBackToEnvironment = () => {
    setCurrentStep('environment');
    setSelectedEnvironment(null);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleBackToDate = () => {
    setCurrentStep('date');
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleBackToTime = () => {
    setCurrentStep('time');
    setSelectedTime(null);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !userName || !userPhone || !userProfession) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const dateKey = selectedDate.toISOString().split('T')[0];
    setBookedSlots(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), selectedTime]
    }));
    setCurrentStep('confirmed');
  };

  const handleNewBooking = () => {
    setCurrentStep('environment');
    setSelectedEnvironment(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setUserName('');
    setUserPhone('');
    setUserProfession('');
  };
  
  const availableTimes = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  const dayBookedSlots = selectedDate ? bookedSlots[selectedDate.toISOString().split('T')[0]] || [] : [];

  return (
    <section id="agendamento" className="py-24 bg-[#F5F0E8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3834] mb-4">Agende seu Atendimento</h2>
          <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
            Reserve seu horário em 4 passos simples e rápidos
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12 overflow-x-auto">
          <div className="flex items-center justify-center min-w-max px-4">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${currentStep !== 'environment' ? 'bg-[#8B7355] text-white' : 'bg-[#8B7355] text-white ring-4 ring-[#8B7355]/20'}`}>
                {currentStep === 'environment' ? '1' : '✓'}
              </div>
              <span className={`ml-3 text-sm font-medium hidden sm:inline ${currentStep === 'environment' ? 'text-[#3E3834]' : 'text-[#636E72]'}`}>Serviço</span>
            </div>
            <div className={`w-12 h-1 mx-2 transition-all ${currentStep === 'environment' ? 'bg-gray-300' : 'bg-[#8B7355]'}`}></div>
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${currentStep === 'environment' ? 'bg-gray-300 text-gray-500' : currentStep === 'date' ? 'bg-[#8B7355] text-white ring-4 ring-[#8B7355]/20' : 'bg-[#8B7355] text-white'}`}>
                {currentStep === 'environment' ? '2' : currentStep === 'date' ? '2' : '✓'}
              </div>
              <span className={`ml-3 text-sm font-medium hidden sm:inline ${currentStep === 'date' ? 'text-[#3E3834]' : 'text-[#636E72]'}`}>Data</span>
            </div>
            <div className={`w-12 h-1 mx-2 transition-all ${currentStep === 'environment' || currentStep === 'date' ? 'bg-gray-300' : 'bg-[#8B7355]'}`}></div>
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${currentStep === 'environment' || currentStep === 'date' ? 'bg-gray-300 text-gray-500' : currentStep === 'time' ? 'bg-[#8B7355] text-white ring-4 ring-[#8B7355]/20' : 'bg-[#8B7355] text-white'}`}>
                {currentStep === 'environment' || currentStep === 'date' ? '3' : currentStep === 'time' ? '3' : '✓'}
              </div>
              <span className={`ml-3 text-sm font-medium hidden sm:inline ${currentStep === 'time' ? 'text-[#3E3834]' : 'text-[#636E72]'}`}>Horário</span>
            </div>
            <div className={`w-12 h-1 mx-2 transition-all ${currentStep === 'environment' || currentStep === 'date' || currentStep === 'time' ? 'bg-gray-300' : 'bg-[#8B7355]'}`}></div>
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${currentStep === 'info' || currentStep === 'confirmed' ? 'bg-[#8B7355] text-white ring-4 ring-[#8B7355]/20' : 'bg-gray-300 text-gray-500'}`}>
                {currentStep === 'confirmed' ? '✓' : '4'}
              </div>
              <span className={`ml-3 text-sm font-medium hidden sm:inline ${currentStep === 'info' || currentStep === 'confirmed' ? 'text-[#3E3834]' : 'text-[#636E72]'}`}>Dados</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Step 1: Environment Selection */}
          {currentStep === 'environment' && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center mb-10">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-3xl font-bold text-[#3E3834] mb-2">Escolha o Serviço</h3>
                <p className="text-[#636E72]">Selecione o tratamento ideal para você</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {environments.map((env) => (
                  <button
                    key={env.id}
                    onClick={() => handleEnvironmentSelect(env)}
                    className="bg-[#F5F0E8] p-6 rounded-xl text-left hover:bg-[#8B7355] hover:text-white group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-[#8B7355]"
                  >
                    <div className="text-4xl mb-4">{env.icon}</div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-white text-[#3E3834]">{env.name}</h4>
                    <p className="text-sm mb-4 group-hover:text-white/90 text-[#636E72]">{env.description}</p>
                    <div className="space-y-2">
                      {env.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm group-hover:text-white/80 text-[#636E72]">
                          <svg className="w-4 h-4 mr-2 text-[#8B7355] group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date Selection */}
          {currentStep === 'date' && selectedEnvironment && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-[#8B7355]" />
                <h3 className="text-2xl font-bold text-[#3E3834] mb-2">Escolha a Data</h3>
                <p className="text-[#636E72] mb-4">Selecione o dia que melhor se encaixa na sua agenda</p>
                <div className="inline-flex items-center gap-3 bg-[#F5F0E8] px-5 py-2 rounded-lg">
                  <span className="text-3xl">{selectedEnvironment.icon}</span>
                  <span className="font-semibold text-[#3E3834]">{selectedEnvironment.name}</span>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <button 
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} 
                    className="p-3 rounded-full hover:bg-[#F5F0E8] transition-colors"
                  >
                    <ChevronLeftIcon className="w-6 h-6 text-[#8B7355]" />
                  </button>
                  <h3 className="text-2xl font-bold text-[#3E3834] capitalize">
                    {currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
                  </h3>
                  <button 
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} 
                    className="p-3 rounded-full hover:bg-[#F5F0E8] transition-colors"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-[#8B7355]" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => (
                    <div key={d} className="text-center font-bold text-sm text-[#636E72] py-2">{d}</div>
                  ))}
                  {calendarDays.map((day, index) => (
                    <div key={index} className="flex justify-center items-center">
                      {day && (
                        <button
                          onClick={() => handleDateSelect(day)}
                          disabled={day < new Date(new Date().toDateString())}
                          className={`w-12 h-12 rounded-xl font-semibold transition-all duration-200
                            ${day < new Date(new Date().toDateString()) 
                              ? 'text-gray-300 cursor-not-allowed' 
                              : 'hover:bg-[#8B7355] hover:text-white hover:shadow-lg hover:scale-110'
                            } 
                            ${selectedDate?.toDateString() === day.toDateString() 
                              ? 'bg-[#8B7355] text-white shadow-lg scale-110' 
                              : 'text-[#3E3834] bg-[#F5F0E8]'
                            }`}
                        >
                          {day.getDate()}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-8 max-w-md mx-auto">
                <button 
                  onClick={handleBackToEnvironment}
                  className="flex-1 py-3 border-2 border-gray-300 text-[#636E72] rounded-lg font-semibold hover:bg-[#F5F0E8] transition-all"
                >
                  ← Trocar Serviço
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Time Selection */}
          {currentStep === 'time' && selectedDate && selectedEnvironment && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <ClockIcon className="w-16 h-16 mx-auto mb-4 text-[#8B7355]" />
                <h3 className="text-2xl font-bold text-[#3E3834] mb-2">Escolha o Horário</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                  <div className="inline-flex items-center gap-3 bg-[#F5F0E8] px-5 py-2 rounded-lg">
                    <span className="text-2xl">{selectedEnvironment.icon}</span>
                    <span className="font-semibold text-[#3E3834] text-sm">{selectedEnvironment.name}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#F5F0E8] px-5 py-2 rounded-lg">
                    <CalendarIcon className="w-5 h-5 text-[#8B7355]" />
                    <span className="font-semibold text-[#3E3834] text-sm">{selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8">
                  {availableTimes.map(time => {
                    const isBooked = dayBookedSlots.includes(time);
                    return (
                      <button 
                        key={time} 
                        onClick={() => !isBooked && handleTimeSelect(time)} 
                        disabled={isBooked} 
                        className={`p-4 rounded-xl text-base font-semibold transition-all duration-200 
                          ${isBooked 
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed line-through' 
                            : 'bg-[#F5F0E8] text-[#3E3834] hover:bg-[#8B7355] hover:text-white hover:shadow-lg hover:scale-105'
                          }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
                <button 
                  onClick={handleBackToDate}
                  className="w-full py-3 border-2 border-[#8B7355] text-[#8B7355] rounded-lg font-semibold hover:bg-[#F5F0E8] transition-all"
                >
                  ← Voltar e Escolher Outra Data
                </button>
              </div>
            </div>
          )}

          {/* Step 4: User Information */}
          {currentStep === 'info' && selectedDate && selectedTime && selectedEnvironment && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#8B7355] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#3E3834] mb-2">Últimos Detalhes</h3>
                <p className="text-[#636E72] mb-6">Complete suas informações para finalizar a reserva</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="inline-flex items-center gap-2 bg-[#F5F0E8] px-4 py-2 rounded-lg">
                    <span className="text-xl">{selectedEnvironment.icon}</span>
                    <span className="font-semibold text-[#3E3834] text-sm">{selectedEnvironment.name}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#F5F0E8] px-4 py-2 rounded-lg">
                    <CalendarIcon className="w-5 h-5 text-[#8B7355]" />
                    <span className="font-semibold text-[#3E3834] text-sm">{selectedDate.toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#F5F0E8] px-4 py-2 rounded-lg">
                    <ClockIcon className="w-5 h-5 text-[#8B7355]" />
                    <span className="font-semibold text-[#3E3834] text-sm">{selectedTime}</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleBookingSubmit} className="max-w-md mx-auto">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#3E3834] mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Digite seu nome completo" 
                      value={userName} 
                      onChange={e => setUserName(e.target.value)} 
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all text-[#3E3834] placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#3E3834] mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      value={userPhone} 
                      onChange={e => setUserPhone(e.target.value)} 
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all text-[#3E3834] placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#3E3834] mb-2">Observações (Opcional)</label>
                    <input 
                      type="text" 
                      placeholder="Alguma solicitação especial?" 
                      value={userProfession} 
                      onChange={e => setUserProfession(e.target.value)} 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all text-[#3E3834] placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#8B7355] to-[#A0826D] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all"
                  >
                    Confirmar Reserva
                  </button>
                  <button 
                    type="button"
                    onClick={handleBackToTime}
                    className="w-full py-3 border-2 border-gray-300 text-[#636E72] rounded-xl font-semibold hover:bg-[#F5F0E8] transition-all"
                  >
                    ← Voltar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 'confirmed' && selectedDate && selectedTime && selectedEnvironment && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-green-700 mb-3">Reserva Confirmada!</h3>
                <p className="text-lg text-[#636E72] mb-8">
                  Seu atendimento foi agendado com sucesso. Em breve entraremos em contato para confirmar os detalhes.
                </p>
                <div className="bg-[#F5F0E8] p-6 rounded-xl mb-8">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[#636E72]">Serviço:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{selectedEnvironment.icon}</span>
                        <span className="font-bold text-[#3E3834]">{selectedEnvironment.name}</span>
                      </div>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#636E72]">Data:</span>
                      <span className="font-bold text-[#3E3834]">{selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#636E72]">Horário:</span>
                      <span className="font-bold text-[#3E3834]">{selectedTime}</span>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#636E72]">Nome:</span>
                      <span className="font-bold text-[#3E3834]">{userName}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleNewBooking}
                  className="w-full bg-[#8B7355] text-white py-4 rounded-xl font-bold hover:bg-[#A0826D] shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
                >
                  Fazer Nova Reserva
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
