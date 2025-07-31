// src/pages/cooksmartpage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import cooksmart1 from '../assets/cooksmart1.png';
import cooksmart2 from '../assets/cooksmart2.png';
import cooksmart3 from '../assets/cooksmart3.png';

export default function CookSmartPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">CookSmart</h1>
      <p className="lead">
        Aplicación interactiva de recetas: seleccionás ingredientes o hacés click en imágenes y recibís dos opciones de recetas generadas en tiempo real con API de IA.
      </p>
      <p>
        <strong>Tecnologías:</strong> React, Bootstrap, llamadas a APIs de procesamiento de lenguaje.<br/>
        <strong>Mi rol:</strong> Diseñé la interfaz en React y coordiné la integración con el servicio de IA.<br/>
        <strong>Resultados:</strong> +200 recetas generadas en la primera semana.
      </p>
      <div className="row g-3">
        {[cooksmart1, cooksmart2, cooksmart3].map((src, i) => (
          <div className="col-12 col-md-4" key={i}>
            <img src={src} alt={`CookSmart ${i+1}`} className="img-fluid rounded" />
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary mt-4">← Volver</Link>
    </div>
  );
}
