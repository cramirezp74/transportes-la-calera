import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="service-card">
          <h3>Transporte a Empresas</h3>
          <p>Servicio especializado para traslado de empleados.</p>
        </div>
        <div className="service-card">
          <h3>Viajes Especiales</h3>
          <p>Transporte para eventos o actividades específicas.</p>
        </div>
        <div className="service-card">
          <h3>Seguridad y Puntualidad</h3>
          <p>Comprometidos con la seguridad de nuestros pasajeros.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
