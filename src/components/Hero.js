import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h2>Transportamos Personas con Seguridad y Confianza</h2>
        <p>Contacta con nosotros para una experiencia confiable y segura.</p>
        <a href="#contact" className="cta">Contáctanos</a>
      </div>
    </section>
  );
};

export default Hero;
