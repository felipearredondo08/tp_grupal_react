import React from 'react';
import Header from '../src/components/Header';
import Titulo from '../src/components/Titulo';
import Us from '../src/components/Us';
import Ofertas from '../src/components/Ofertas';
import Form from '../src/components/Form';  // Ajusta la ruta según la estructura de tu proyecto
import Footer from '../src/components/Footer';
import './App.css';  // Importa estilos generales si los tienes



const App = () => {
  return (
    <div>
      {/* Usar el componente Header */}
      <Header />

      {/* Usar el componente Titulo */}
      <Titulo />

      {/* Usar el componente Us */}
      <Us />

      {/* Usar el componente Ofertas */}
      <Ofertas />

      {/* Usar el componente Form */}
      <Form />

      {/* Usar el componente Footer */}
      <Footer />

      {/* Otro contenido de tu aplicación */}
      
    </div>
  );
};

export default App;