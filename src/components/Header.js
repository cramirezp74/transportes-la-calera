import React from 'react';
import logoLarge from '../assets/image.png'; // Logo grande
import logoSmall from '../assets/image-small.png'; // Logo pequeño

const Header = () => {
  return (
    <header className="bg-white shadow fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo adaptable */}
        <img
          src={logoLarge}
          alt="Transportes La Calera"
          className="h-12 hidden md:block" // Visible en pantallas medianas y grandes
        />
        <img
          src={logoSmall}
          alt="Transportes La Calera"
          className="h-8 block md:hidden" // Visible en pantallas pequeñas
        />
        
        {/* Navegación */}
        <nav className="flex space-x-6">
          <a
            href="#hero"
            className="text-gray-800 hover:text-red-600 font-semibold"
          >
            Inicio
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-red-600 font-semibold"
          >
            Servicios
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-red-600 font-semibold"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
