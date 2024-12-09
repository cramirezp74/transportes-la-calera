import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gray-100 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 border-l-4 border-red-600">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text text-transparent mb-6 text-center">
          Contacto
        </h2>
        <p className="text-gray-800 text-lg mb-4">
          ¡Contáctanos para cualquier consulta o solicitud!
        </p>
        <ul className="text-gray-700 space-y-4">
          <li>
            <strong className="block text-xl text-gray-900">Teléfono:</strong>
            <span className="text-gray-700">+56 9 7389 3504</span>
          </li>
          <li>
            <strong className="block text-xl text-gray-900">Correo:</strong>
            <a
              href="mailto:transporteslacalera@example.com"
              className="text-blue-600 hover:underline"
            >
              transporteslacalera@example.com
            </a>
          </li>
          <li>
            <strong className="block text-xl text-gray-900">WhatsApp:</strong>
            <a
              href="https://wa.me/56973893504"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Enviar mensaje
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
