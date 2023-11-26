import React from 'react';
import './Titulo.css';
import caramelotituloImage from '../assets/caramelotitulo.png';



const Titulo = () => {

 
  return (
    <article className="content">
      
      <img src={caramelotituloImage} alt="" />
     
      <a className="boton-tienda-content" href="#">Tienda</a>
    </article>
  );
};

export default Titulo;