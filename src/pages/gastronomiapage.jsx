// src/pages/gastronomiapage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import gastronomia1 from '../assets/gastronomia1.png';
import gastronomia2 from '../assets/gastronomia2.png';
import gastronomia3 from '../assets/gastronomia3.png';
import gastronomia4 from '../assets/gastronomia4.png';
import gastronomia5 from '../assets/gastronomia5.png';

export default function GastronomiaPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">App Gastronómica</h1>
      <p className="lead">
        Plataforma para restaurante con control de stock y pedidos en tiempo real, descuentos automáticos en inventario y módulo de caja con cierre diario.
      </p>
      <p>
        <strong>Tecnologías:</strong> HTML, CSS, React, MySQL.<br/>
        <strong>Mi rol:</strong> Desarrollé la lógica de selectores por categoría y las actualizaciones en tiempo real del stock.<br/>
        <strong>Resultados:</strong> gestionó +300 pedidos en tiempo real en su primer mes.
      </p>
      <div className="row g-3">
        {[gastronomia1, gastronomia2, gastronomia3, gastronomia4, gastronomia5].map((src, i) => (
          <div className="col-12 col-md-4" key={i}>
            <img src={src} alt={`App Gastronómica ${i+1}`} className="img-fluid rounded" />
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary mt-4">← Volver</Link>
    </div>
  );
}
