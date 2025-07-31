// src/pages/servicespage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <section id="services" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4">Servicios</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Desarrollo de Sitios Web y Landing Pages</h5>
                <p className="card-text">
                  Páginas web y landing pages completamente adaptables a cualquier dispositivo, diseñadas para facilitar la vida de las personas y mejorar la eficiencia en sus actividades.
                </p>
              </div>
            </div>
          </div>

             <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Sistemas a Medida</h5>
                <p className="card-text">
                  Desarrollo de soluciones personalizadas según las necesidades del cliente, garantizando adaptabilidad y escalabilidad.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Aplicaciones Web Interactivas (SPAs & PWAs)</h5>
                <p className="card-text">
                  Diseño e implementación de interfaces dinámicas y progresivas que funcionan incluso sin conexión.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Backend y APIs a Medida</h5>
                <p className="card-text">
                  Construcción de servicios y microservicios escalables para gestionar lógica de negocio y datos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Optimización de Rendimiento y SEO Técnico</h5>
                <p className="card-text">
                  Análisis y mejora de velocidad, accesibilidad y posicionamiento en buscadores de tu plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-4 d-flex">
          <Link to="/" className="btn btn-secondary me-3">
            Volver
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Solicitar servicio
          </Link>
        </div>
      </div>
    </section>
  );
}
