import React from 'react';

const Hero = () => {
  return (
<div id="hero" className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: "url('/Grand-Starex.jpg')" }}>
  <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-center">Transportes La Calera</h1>
    <p className="text-lg md:text-2xl font-light text-center">Puntualidad, experiencia y seguridad al servicio de nuestros clientes</p>
  </div>
</div>

  );
};

export default Hero;
