import React from 'react';
import './Ofertas.css';
import pirulinImage from '../assets/pirulin.jpg';
import chicleImage from '../assets/chicle.jpg';
import regalizImage from '../assets/regaliz.jpg';
import paletaImage from '../assets/paleta.png';
import confitesImage from '../assets/confites.jpg';
import frutalImage from '../assets/frutal.jpg';

const Ofertas = () => {
  return (
    <article className="ofertas">
        <div className="titulo-semillas">
            <h2>Dulces con 10% de descuento</h2>
        </div>

        <div class="tarjetas">

        <div class="card">
            <div class="head">
                <div class="circle"></div>
                <div class="img">
                <img src={pirulinImage} alt="" />
            </div>
        </div>

        <div class="description">
            <h3>Pirulin</h3>
            <h4>Caramelo</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eligendi!</p>
        </div>

        <div className="contact">
                <a href="#">Ver mas</a>
            </div>
        </div>

    <div className="card">
        <div className="head">
            <div className="circle"></div>
            <div className="img">
            <img src={chicleImage} alt="" />
            </div>
        </div>

        <div className="description">
            <h3>Bubble Gum</h3>
            <h4>Chicle</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eligendi!</p>
        </div>

        <div className="contact">
            <a href="#">Ver mas</a>
        </div>
    </div>

    <div className="card">
        <div class="head">
            <div class="circle"></div>
            <div class="img">
            <img src={regalizImage} alt="" />
            </div>
        </div>

        <div className="description">
            <h3>Regaliz</h3>
            <h4>Caramelo</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eligendi!</p>
        </div>

        <div className="contact">
            <a href="#">Ver mas</a>
        </div>
    </div>

    <div className="card">
        <div className="head">
            <div className="circle"></div>
            <div className="img">
            <img src={paletaImage} alt="" />
            </div>
        </div>

        <div className="description">
            <h3>Paleta</h3>
            <h4>Caramelo</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eligendi!</p>
        </div>

        <div className="contact">
            <a href="#">Ver mas</a>
        </div>
    </div>

    <div className="card">
        <div className="head">
            <div className="circle"></div>
            <div className="img">
            <img src={confitesImage} alt="" />
            </div>
        </div>

        <div className="description">
            <h3>Confites</h3>
            <h4>Chocolate</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eligendi!</p>
        </div>

        <div className="contact">
            <a href="#">Ver mas</a>
        </div>
    </div>

    <div className="card">
        <div className="head">
            <div className="circle"></div>
            <div className="img">
            <img src={frutalImage} alt="" />
            </div>
        </div>

        <div className="description">
            <h3>Bombon frutal</h3>
            <h4>Caramelo</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eligendi!</p>
        </div>

        <div className="contact">
            <a href="#">Ver mas</a>
        </div>
    </div>






    </div>
        </article>
  );
};

export default Ofertas;