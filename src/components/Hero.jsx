// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import rocketAnimation from '../assets/cohete.json';
import laptopAnimation from '../assets/gatocodigo.json';
import '../styles/custom.css';

export default function Hero() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const sequence = [
      () => {
        setTyping(true);
        setTimeout(() => {
          setStep(1);
          setTyping(false);
        }, 1000);
      },
      () => {
        setTyping(true);
        setTimeout(() => {
          setStep(2);
          setTyping(false);
        }, 1200);
      },
      () => {
        setStep(3);
      }
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < sequence.length) {
        sequence[i]();
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      <div className="background-glow" />
      <canvas id="particle-canvas"></canvas>

      <div className="hero-content-wrapper">
        {/* Avatar animado desde public/assets */}
        <img
          src="/assets/chatbot.gif"
          alt="Avatar animado de Julieta"
          className="avatar-img avatar-fixed fade-in-avatar"
        />

        <div className="chatbox">
          {step >= 1 && (
            <div className="chat-bubble chat-fade left">
              ¡Hola! Soy <strong>Julieta Meza</strong>, desarrolladora Full-Stack r.
            </div>
          )}
          {step >= 2 && (
            <div className="chat-bubble chat-fade left">
              Mirá mis proyectos o contactame. ¡Estoy lista para trabajar con vos!
            </div>
          )}
          {typing && (
            <div className="chat-bubble typing left">Escribiendo<span className="dots">...</span></div>
          )}
          {step >= 3 && (
            <div className="button-group">
              <button
                onClick={() => navigate('/projects')}
                className="btn-with-lottie fade-in-btn btn-delay-1"
              >
                <Lottie animationData={rocketAnimation} loop autoplay className="btn-lottie" />
                Ver Proyectos
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="btn-with-lottie fade-in-btn btn-delay-2"
              >
                <Lottie animationData={laptopAnimation} loop autoplay className="btn-lottie" />
                Contacto
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
