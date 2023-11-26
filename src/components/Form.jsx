import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <article id="formcontacto" className="formcontacto">
      <div className="wrapper">
        <div className="inner">
          <form action="">
            <h3>Contactanos</h3>
            <p>Hacenos saber tus dudas y recomendaciones.</p>
            <label className="form-group">
              <input type="text" className="form-control" required />
              <span>Tu Nombre</span>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <input type="text" className="form-control" required />
              <span for="">Tu Email</span>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <textarea className="form-control" required></textarea>
              <span for="">Mensaje</span>
              <span className="border"></span>
            </label>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Form;