import React from 'react';

const services = [
  {
    title: 'Transporte Corporativo',
    description: 'Llevamos a los empleados de manera segura y puntual a sus lugares de trabajo.',
  },
  {
    title: 'Excursiones',
    description: 'Transporte para actividades recreativas, turísticas o escolares.',
  },
  {
    title: 'Traslado Personalizado',
    description: 'Servicios adaptados a tus necesidades específicas.',
  },
  {
    title: 'Viajes Aeropuerto',
    description: 'Realizamos viajes para el aeropuerto.',
  },
];

const Services = () => {
  return (
    <div id="services" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text text-transparent mb-6 text-center">Nuestros Servicios</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
