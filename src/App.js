// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';

import Hero from './components/Hero';
import AboutPage from './pages/aboutpage';
import Projects from './components/Projects';
import ServicesPage from './pages/servicespage';
import Contact from './components/Contact';

import IndalifPage from './pages/indalifpage';
import CookSmartPage from './pages/cooksmartpage';
import GastronomiaPage from './pages/gastronomiapage';
import EntrenadorPage from './pages/entrenadorpage';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Hero />} />

        {/* Sobre mí */}
        <Route path="/about" element={<AboutPage />} />

        {/* Proyectos */}
        <Route path="/projects" element={<Projects />} />

        {/* Servicios */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Contacto */}
        <Route path="/contact" element={<Contact />} />

        {/* Detalle de proyectos */}
        <Route path="/indalif" element={<IndalifPage />} />
        <Route path="/cooksmart" element={<CookSmartPage />} />
        <Route path="/gastronomia" element={<GastronomiaPage />} />
        <Route path="/entrenador" element={<EntrenadorPage />} />

        {/* Redirigir rutas desconocidas a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
