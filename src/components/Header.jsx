import React from 'react';
import '../components/header.css';
import carameloLogo from '../assets/caramelo.png';  // Importa la imagen correctamente

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <img src={carameloLogo} alt="logotipo" className="logo" />

      {/* Menú */}
      <nav className="menu">
        <ul className="menu-list">
          {/* Botones */}
          <li className="menu-list_item"><a href="#">Home</a></li>
          <li className="menu-list_item"><a href="#us">Nosotros</a></li>
          <li className="menu-list_item"><a href="#formcontacto">Contacto</a></li>
          <li className="menu-list_item"><a className="boton-tienda" href="#">Tienda</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;