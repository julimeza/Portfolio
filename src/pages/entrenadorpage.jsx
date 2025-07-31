// src/pages/entrenadorpage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import appEntrenar1 from '../assets/appEntrenar1.png';
import appEntrenar2 from '../assets/appEntrenar2.png';
import appEntrenar3 from '../assets/appEntrenar3.png';
import appEntrenar4 from '../assets/appEntrenar4.png';
import appEntrenar5 from '../assets/appEntrenar5.png';

export default function EntrenadorPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">App Entrenador</h1>
      <p className="lead">
        Aplicación multi-rol para seguimiento de rutinas: entrenadores definen ejercicios por día y alumnos registran series, pesos y descansos.
      </p>
      <p>
        <strong>Tecnologías:</strong> React, MySQL.<br/>
        <strong>Mi rol:</strong> Implementé la navegación interna sin recarga, la gestión de estados y las consultas a la base de datos.<br/>
        <strong>Resultados:</strong> +150 rutinas registradas en el primer mes.
      </p>
      <div className="row g-3">
        {[appEntrenar1, appEntrenar2, appEntrenar3, appEntrenar4, appEntrenar5].map((src, i) => (
          <div className="col-12 col-md-4" key={i}>
            <img src={src} alt={`App Entrenador ${i+1}`} className="img-fluid rounded" />
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary mt-4">← Volver</Link>
    </div>
  );
}
