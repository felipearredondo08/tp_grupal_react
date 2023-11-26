import React from 'react';
import './Us.css';

const Us = () => {
  return (
    <article id="us" className="nosotros">
      <section className="about">
        <div className="main">
          <img
            src="https://imagenes.diariodenavarra.es/files/image_645_359/uploads/2013/12/24/60b0ebcfecccd.jpeg"
            alt="Imagen de nosotros"
          />
          <div className="about-text">
            <h1>Cream Caramel</h1>
            <h5>¿Quiénes <span>somos</span>?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis temporibus delectus dolores
              quas, veritatis quam, dolorem ducimus et nemo recusandae, ad minima quae quibusdam officia deserunt
              quod reprehenderit ratione doloribus saepe. Dolorum, exercitationem! Explicabo delectus et reprehenderit
              earum nam quo ad ullam mollitia impedit fugiat fuga facere totam odit atque commodi similique possimus
              recusandae ea exercitationem perspiciatis unde architecto, dolorem vel! Accusantium, quod. Ullam, possimus
              debitis. Cumque impedit quae sunt iusto illo.
            </p>
            <button className="boton-nosotros" type="button">
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Us;