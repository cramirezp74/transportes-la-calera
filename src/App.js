import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';  // Importamos el nuevo componente Contact
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <Contact />  {/* Añadimos la sección de contacto aquí */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
