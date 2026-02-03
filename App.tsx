import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLoginPage from './pages/AdminLogin';
import DashboardLayout from './pages/DashboardLayout';
import DashboardPage from './pages/Dashboard';

// Componente da página principal
const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F5F0E8] text-[#3E3834]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Principal */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rotas Admin */}
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="agenda" element={<div className="text-center p-8">Página de Agenda em Desenvolvimento</div>} />
          <Route path="salas" element={<div className="text-center p-8">Página de Salas em Desenvolvimento</div>} />
          <Route path="clientes" element={<div className="text-center p-8">Página de Clientes em Desenvolvimento</div>} />
          <Route path="configuracoes" element={<div className="text-center p-8">Página de Configurações em Desenvolvimento</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
