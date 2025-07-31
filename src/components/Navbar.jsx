// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/custom.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        {/* Hamburger toggle */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`nav-collapse ${menuOpen ? 'open' : ''}`}>
          {/* Links */}
          <div className="nav-links">
            <NavLink to="/about" className="nav-item" onClick={toggleMenu}>Sobre mí</NavLink>
            <NavLink to="/projects" className="nav-item" onClick={toggleMenu}>Proyectos</NavLink>
            <NavLink to="/services" className="nav-item" onClick={toggleMenu}>Servicios</NavLink>
            <a href="/CV-Meza Julieta.pdf" className="nav-item" download onClick={toggleMenu}>CV</a>
            <NavLink to="/contact" className="nav-item" onClick={toggleMenu}>Contacto</NavLink>
          </div>

          {/* Social icons */}
          <div className="nav-socials">
            <a href="https://github.com/julimeza" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/julieta-meza" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
