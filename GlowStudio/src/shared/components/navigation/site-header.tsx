"use client";

import { useState } from "react";

const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <nav
        className="navbar navbar-expand-lg fixed-top site-nav"
        aria-label="Navegación principal"
      >
        <div className="container">
          <a className="navbar-brand brand-lockup" href="#inicio" aria-label="GlowStudio, inicio">
            <span className="brand-mark" aria-hidden="true">
              <i className="bi bi-stars" />
            </span>
            <span>
              Glow<span className="brand-light">Studio</span>
              <small>SOFT BEAUTY</small>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNav"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse${isMenuOpen ? " show" : ""}`}
            id="mainNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {navigationItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <a
                    className="nav-link"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-2">
                <a
                  className="btn btn-primary-soft nav-cta"
                  href="#reservar"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agendar cita <i className="bi bi-arrow-up-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
