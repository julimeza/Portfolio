// src/pages/indalifpage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import indalif from '../assets/indalif.png';
import indalif2 from '../assets/indalif2.png';
import indalif3 from '../assets/indalif3.png';
import indalif4 from '../assets/indalif4.png';
import indalif5 from '../assets/indalif5.png';

export default function IndalifPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Pastas Aranda</h1>
      <p className="lead">
        Sistema de gestión completo para fábrica de pastas: 11 módulos automatizados (caja, costos, clientes, métricas, pedidos, stock, producción, empleados y más).
      </p>
      <p>
        <strong>Tecnologías:</strong> HTML, CSS, JavaScript, MySQL (Workbench).<br/>
        <strong>Mi rol:</strong> Desarrollé el frontend modular y la conexión con la base de datos en Node.js.<br/>
        <strong>Resultados:</strong> redujo un 40 % el tiempo de procesamiento de pedidos.
      </p>
      <div className="row g-3">
        {[indalif, indalif2, indalif3, indalif4, indalif5].map((src, i) => (
          <div className="col-12 col-md-6" key={i}>
            <img src={src} alt={`Pastas Aranda ${i+1}`} className="img-fluid rounded" />
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary mt-4">← Volver</Link>
    </div>
  );
}
