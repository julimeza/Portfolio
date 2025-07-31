// src/pages/aboutpage.jsx
import React from 'react';
import julieta from '../assets/julieta.jpeg';

export default function AboutPage() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Sobre mí</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={julieta}
              alt="Julieta Meza"
              className="img-fluid rounded-circle shadow"
            />
          </div>
          <div className="col-md-8">
            <p>
              <strong>Soy Julieta Meza<br/>
              Full-Stack Developer | Freelancer</strong>
            </p>
            <p>
              Universitaria en Programación, recibida en la UTN FR Tucumán, con 22 años y una pasión por convertir ideas en soluciones digitales. Combino desarrollo <strong>backend</strong> y <strong>frontend</strong> para crear productos completos: fusiono la lógica de negocio con interfaces modernas y 100 % responsive, y aprovecho las ventajas de las Progressive Web Apps para mejorar rendimiento y usabilidad. Además, diseño sistemas a medida, desarrollo sitios web y landing pages adaptados a las necesidades de cada cliente.
            </p>
            <h3 className="mt-5">¿Cómo trabajo?</h3>
            <ul>
              <li>Cumplo mis entregas en tiempo y forma, cuidando cada detalle según los requerimientos del cliente.</li>
              <li>Mantengo una comunicación clara y constante, validando avances y asegurando resultados.</li>
              <li>Me adapto con facilidad y aprendo rápidamente, tanto colaborando en equipos como de manera autónoma.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
