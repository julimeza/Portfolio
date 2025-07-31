// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Asegurate de que estos nombres de archivo coincidan con los que están en src/assets/
import indalif from '../assets/indalif.png';
import cooksmart1 from '../assets/cooksmart1.png';
import gastronomia1 from '../assets/gastronomia1.png';
import appEntrenar1 from '../assets/appEntrenar1.png';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5"
      style={{ background: '#1a0126' }}
    >
      <div className="container">
        <h2 className="mb-4 text-white">Proyectos Destacados</h2>
        <div className="row g-4">
          {/* Pastas Aranda */}
          <div className="col-12 col-md-6 col-lg-3">
            <Link to="/indalif" className="text-decoration-none">
              <div className="card h-100 shadow-sm bg-light">
                <img
                  src={indalif}
                  className="card-img-top"
                  alt="Pastas Aranda"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Pastas Aranda</h5>
                </div>
              </div>
            </Link>
          </div>
          {/* CookSmart */}
          <div className="col-12 col-md-6 col-lg-3">
            <Link to="/cooksmart" className="text-decoration-none">
              <div className="card h-100 shadow-sm bg-light">
                <img
                  src={cooksmart1}
                  className="card-img-top"
                  alt="CookSmart"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">CookSmart</h5>
                </div>
              </div>
            </Link>
          </div>
          {/* App Gastronómica */}
          <div className="col-12 col-md-6 col-lg-3">
            <Link to="/gastronomia" className="text-decoration-none">
              <div className="card h-100 shadow-sm bg-light">
                <img
                  src={gastronomia1}
                  className="card-img-top"
                  alt="App Gastronómica"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">App Gastronómica</h5>
                </div>
              </div>
            </Link>
          </div>
          {/* App Entrenador */}
          <div className="col-12 col-md-6 col-lg-3">
            <Link to="/entrenador" className="text-decoration-none">
              <div className="card h-100 shadow-sm bg-light">
                <img
                  src={appEntrenar1}
                  className="card-img-top"
                  alt="App Entrenador"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">App Entrenador</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
