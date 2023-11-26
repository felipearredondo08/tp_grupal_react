import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <section className="footer_widgets">
          <h3 className="footer_widget_title">Ubicación</h3>
          <p className="footer_widget_text">Intendente Leonelli 360</p>
        </section>

        <section className="footer_widgets">
          <h3 className="footer_widget_title">Teléfono</h3>
          <p className="footer_widget_text">03537 15584682</p>
        </section>

        <section className="footer_widgets">
          <h3 className="footer_widget_title">Email</h3>
          <p className="footer_widget_text">contacto@creamcaramel.com</p>
        </section>
      </footer>

      <div className="copyright">
        <h4>Todos los derechos reservados para "Cream Caramel" - 2023 - Sitio creado por **Grupo 1**</h4>
      </div>
    </div>
  );
};

export default Footer;